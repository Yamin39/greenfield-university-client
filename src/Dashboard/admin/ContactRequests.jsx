import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useFormatTimestamp from "../../hooks/useFormatTimestamp";
import DashboardTitle from "../DashboardTitle";

const ContactRequests = () => {
  const axiosPublic = useAxiosPublic();

  const { data: contactRequests = [], refetch } = useQuery({
    queryKey: ["contactRequests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contact");
      return res.data;
    },
  });

  const formatTimestamp = useFormatTimestamp;

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/contact/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Contact request deleted");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete contact request");
      });
  };
  return (
    <div>
      <DashboardTitle title="Contact Requests" />

      <div className="w-full max-w-4xl mx-auto p-4">
        {/* Contact request cards */}
        <div className="space-y-4">
          {contactRequests.map((request, idx) => (
            <div key={request._id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between">
                {/* User info and content */}
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">{request.name.charAt(0)}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-900">{request.name}</h3>
                      <span title={formatTimestamp(request.timestamp)} className="text-sm text-gray-500">
                        {formatDistanceToNow(new Date(request.timestamp), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{request.email}</p>
                    <h4 className="font-medium text-gray-900 mb-1">{request.subject}</h4>
                    <p className="text-gray-600">{request.message}</p>
                  </div>
                </div>

                {/* Tags/Badge */}
                <div className="ml-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">#{idx + 1}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-4 flex items-center space-x-4 pt-4 border-t border-gray-100">
                <button onClick={() => handleDelete(request._id)} className="flex items-center text-red-500 hover:text-red-700 transition duration-300">
                  <span className="text-sm">Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactRequests;
