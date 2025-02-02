import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import toast from "react-hot-toast";

const NewsletterRequests = () => {
  const axiosPublic = useAxiosPublic();

  const { data: requests = [], isLoading, refetch } = useQuery({
    queryKey: ["newsletterRequests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/newsletter");
      return res.data;
    },
  });

  console.log(requests);

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/newsletter/${id}`)
      .then(() => {
        console.log("Newsletter request deleted");
        toast.success("Newsletter request deleted successfully");
        refetch();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete newsletter request");
      });
  }
return (
    <div className="max-w-7xl mx-auto p-4">
      <DashboardTitle title="Newsletter Requests" />
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">Total Requests: {requests.length}</p>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading...</div>
      ) : requests.length === 0 ? (
        <div className="text-center py-8">No newsletter requests found</div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left font-medium text-gray-500">Email</th>
                <th className="p-3 text-left font-medium text-gray-500">Date</th>
                <th className="p-3 text-left font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {requests.map((request) => (
                <tr key={request._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{request.email}</td>
                  <td className="p-3">{new Date(request.timestamp).toLocaleDateString()}</td>
                  <td className="p-3">
                    <button 
                      onClick={() => handleDelete(request._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
);
};

export default NewsletterRequests;
