import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import DashboardTitle from "../DashboardTitle";
import { Link } from "react-router-dom";

const ManageFaq = () => {
  const axiosPublic = useAxiosPublic();

  const { data: faqs = [], refetch } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => {
      const res = await axiosPublic.get("/faqs");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const res = await axiosPublic.delete(`/deleteFaq/${id}`);
    console.log(res.data)
    if (res.data.deletedCount > 0) {
      toast.success("Faq has been deleted.");
      refetch();
    }
  };
  return (
    <div>
      <DashboardTitle title="Manage FAQ" />
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border ">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className="text-left">
                <th className="p-3">SL</th>
                <th className="p-3">Title</th>
                <th className="p-3">Description</th>
                <th className="p-3">Update</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((item, i) => (
                <tr key={i} className="border *:py-3">
                  <td className="p-2">
                    <p>{i + 1}</p>
                  </td>
                  <td className="p-2">
                    <p>{item.title}</p>
                  </td>
                  <td className="p-2">
                    <p>{item.description.slice(0, 50)}...</p>
                  </td>
                  <td className="p-2">
                    <Link
                      to={`/dashboard/updateFaq/${item._id}`}
                      className="px-3 py-1 font-semibold rounded-md bg-green-500 text-white cursor-pointer"
                    >
                      <span>Update</span>
                    </Link>
                  </td>
                  <td onClick={() => handleDelete(item._id)} className="p-2">
                    <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                      <span>Delete</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFaq;
