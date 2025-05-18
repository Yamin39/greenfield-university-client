import { useQuery } from "@tanstack/react-query";
import { Calendar, ChevronDown, ChevronUp, Clock, Edit2, MapPin, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";

const ManageEvents = () => {
  const axiosPublic = useAxiosPublic();
  const { data: events = [], refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });

  const [expandedEvents, setExpandedEvents] = useState({});

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/event/${id}`)
      .then((res) => {
        refetch();
        if (res.data.deletedCount === 1) {
          toast.success("Event deleted successfully");
        } else {
          toast.error("Failed to delete event");
          toast.error("Something went wrong! Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete event");
      });
  };

  const toggleExpand = (id) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <DashboardTitle title="Manage Events" />

      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail */}
              <div className={`w-full md:w-1/3 h-64 relative overflow-hidden ${expandedEvents[event._id] ? "" : "md:h-auto"}`}>
                <img src={event.thumbnail} alt={event.title} className="w-full h-full object-cover" />
              </div>

              {/* Event Details */}
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{event.category}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">{event.type}</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">{event.status}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`edit/${event._id}`} className="p-2 text-gray-600 hover:text-blue-600 transition-colors" aria-label="Edit event">
                      <Edit2 size={20} />
                    </Link>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                      aria-label="Delete event"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>
                      {event.time.start} - {event.time.end}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{event.location.venue}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{event.description}</p>

                <button onClick={() => toggleExpand(event._id)} className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  {expandedEvents[event._id] ? (
                    <>
                      <ChevronUp size={20} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={20} />
                      Show More
                    </>
                  )}
                </button>

                {expandedEvents[event._id] && (
                  <div className="mt-6 space-y-6">
                    {/* Agenda */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Agenda</h3>
                      <div className="space-y-4">
                        {event.agenda.map((item, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="w-24 flex-shrink-0 text-gray-600">{item.time}</div>
                            <div>
                              <div className="font-medium">{item.title}</div>
                              {item.speaker && (
                                <div className="text-gray-600 text-sm">
                                  {item.speaker} • {item.duration} minutes
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Learning Outcomes</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {event.learningOutcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
