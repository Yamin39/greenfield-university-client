import { Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingModal from "../../components/LoadingModal";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";

const AddEvents = () => {
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);
  const [agendaItems, setAgendaItems] = useState([]);
  const [learningOutcomes, setLearningOutcomes] = useState([]);
  const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`;

  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(":");
    let period = "AM";
    let hour = parseInt(hours, 10);

    if (hour >= 12) {
      period = "PM";
      if (hour > 12) hour -= 12;
    }
    if (hour === 0) hour = 12; // Handle midnight (00:00)

    return `${hour}:${minutes} ${period}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;

    const formData = new FormData();
    formData.append("image", form.thumbnail.files[0]);

    const res = await axiosPublic.post(imageUpload, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const thumbnail = res.data.data.display_url;

    const eventData = {
      title: form.title.value,
      category: form.category.value,
      type: form.type.value,
      status: form.status.value,
      thumbnail,
      date: form.date.value,
      time: {
        start: convertTo12HourFormat(form.start.value),
        end: convertTo12HourFormat(form.end.value),
      },
      location: {
        venue: form.venue.value,
      },
      description: form.description.value,
      agenda: agendaItems.map((item) => ({
        ...item,
        time: convertTo12HourFormat(item.time), // Convert when submitting
      })),
      learningOutcomes: learningOutcomes,
    };

    console.log(eventData);
    // form.reset();

    axiosPublic
      .post("/event", eventData)
      .then((res) => {
        console.log(res.data);
        toast.success("Event added successfully");
        setIsLoading(false);
        e.target.reset();
        setAgendaItems([]);
        setLearningOutcomes([]);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add event");
        setIsLoading(false);
      });
  };

  // Handle agenda item addition
  const handleAddAgendaItem = () => {
    setAgendaItems([
      ...agendaItems,
      {
        time: "",
        title: "",
        speaker: "",
        duration: "",
      },
    ]);
  };

  // Handle learning outcome addition
  const handleAddOutcome = () => {
    setLearningOutcomes([...learningOutcomes, ""]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <DashboardTitle title="Add Event" />

      {isLoading && <LoadingModal text={"Posting a event..."} />}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Event Title</label>
            <input type="text" name="title" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <input type="text" name="category" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Event Type</label>
            <select name="type" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
              <option value="Conference">Conference</option>
              <option value="Webinar">Webinar</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select name="status" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail</label>
          <input type="file" name="thumbnail" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input type="date" name="date" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Start Time</label>
            <input type="time" name="start" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">End Time</label>
            <input type="time" name="end" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-2">Venue</label>
          <input type="text" name="venue" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea name="description" required rows="4" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        {/* Agenda */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Agenda</h3>
            <button type="button" onClick={handleAddAgendaItem} className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
              Add Agenda Item
            </button>
          </div>
          {agendaItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <input
                  type="time"
                  value={item.time}
                  onChange={(e) => {
                    const newAgenda = [...agendaItems];
                    newAgenda[index].time = e.target.value;
                    setAgendaItems(newAgenda);
                  }}
                  placeholder="09:00 AM"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Duration <span className="text-gray-500">(in minutes)</span>
                </label>
                <input
                  type="number"
                  value={item.duration}
                  onChange={(e) => {
                    const newAgenda = [...agendaItems];
                    newAgenda[index].duration = e.target.value;
                    setAgendaItems(newAgenda);
                  }}
                  placeholder="30 mins"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => {
                    const newAgenda = [...agendaItems];
                    newAgenda[index].title = e.target.value;
                    setAgendaItems(newAgenda);
                  }}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Speaker</label>
                <input
                  type="text"
                  value={item.speaker}
                  onChange={(e) => {
                    const newAgenda = [...agendaItems];
                    newAgenda[index].speaker = e.target.value;
                    setAgendaItems(newAgenda);
                  }}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  const newAgenda = agendaItems.filter((_, i) => i !== index);
                  setAgendaItems(newAgenda);
                }}
                className="w-fit px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>

        {/* Learning Outcomes */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Learning Outcomes</h3>
            <button type="button" onClick={handleAddOutcome} className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700">
              Add Outcome
            </button>
          </div>
          {learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex gap-4">
              <input
                type="text"
                value={outcome}
                onChange={(e) => {
                  const newOutcomes = [...learningOutcomes];
                  newOutcomes[index] = e.target.value;
                  setLearningOutcomes(newOutcomes);
                }}
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Enter a learning outcome"
              />
              <button
                type="button"
                onClick={() => {
                  const newOutcomes = learningOutcomes.filter((_, i) => i !== index);
                  setLearningOutcomes(newOutcomes);
                }}
                className="px-3 text-red-600 hover:text-red-800"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvents;
