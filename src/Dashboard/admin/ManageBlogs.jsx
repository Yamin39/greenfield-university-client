import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import { BsThreeDots } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import Swal from "sweetalert2";

const ManageBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const role = useRole(user?.email);

  console.log(role);

  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs", user?.email, role],
    queryFn: async () => {
      if (!user?.email || !role) return [];
      const res = await axiosPublic.get(`/blogs?email=${user.email}&role=${role}`);
      return res.data;
    },
    enabled: !!user?.email && !!role,
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosPublic.delete(`/blog/${id}`);
        if (res.data.deletedCount > 0) {
          toast.success("Blog has been deleted.");
          refetch();
        }
      } catch (error) {
        toast.error(error.message || "Something went wrong!");
        console.log(error);
      }
    }
  };

  return (
    <div>
      <DashboardTitle title="Manage Blogs" />

      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border ">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr className="text-left bg-slate-100">
                <th className="p-3">SL</th>
                <th className="p-3">Author Name</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Title</th>
                <th className="p-3">Thumbnail</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Update</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={i} className="border">
                  <td className="p-2">
                    <p>{i + 1}</p>
                  </td>
                  <td className="p-2">
                    <p>{blog?.author?.name}</p>
                  </td>
                  <td className="p-2">
                    <img
                      src={
                        blog?.author?.img
                          ? blog.author?.img
                          : "https://greenfield-university.netlify.app/assets/banner_66-Bq6KXLtZ.png"
                      }
                      alt=""
                      className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"
                    />
                  </td>
                  <td className="p-2">
                    <p>{blog.title.slice(0, 20)}...</p>
                  </td>
                  <td className="p-2">
                    <img
                      src={blog.thumbnail}
                      alt=""
                      className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"
                    />
                  </td>
                  <td className="p-2">
                    <p>
                      {format(new Date(blog.timestamp), "hh:mm a , dd-MM-yyyy")}
                    </p>
                  </td>

                  <td className="p-2">
                    <p>{blog?.author?.email}</p>
                  </td>
                  <td className="p-2 text-center">
                    <p className={`px-2 py-0.5 border  rounded-lg ${blog?.author?.role === 'Admin' && 'text-green-600 border-green-200 bg-green-50 '} ${blog?.author?.role === 'Instructor' && 'text-pink-600 bg-pink-50 border-pink-200'} ${blog?.author?.role === 'Student' && 'text-blue-600 bg-blue-50 border-blue-200'} `}>{blog?.author?.role} </p>
                  </td>

                  <td className="p-2">

                    {blog.status === 'pending' && <BsThreeDots className="animate-ping mx-auto text-lg text-blue-500" />}

                    {blog.status === 'approved' && <FcApproval className="mx-auto text-lg " />}

                    {blog.status === 'rejected' && <CiCircleRemove className="mx-auto text-lg text-red-500" />}
                  </td>

                  <td className="p-2">
                    <Link
                      to={`/dashboard/updateBlog/${blog._id}`}
                      className="px-3 py-1 font-semibold rounded-md bg-green-500 text-white cursor-pointer"
                    >
                      <span>Update</span>
                    </Link>
                  </td>
                  <td className="p-2">
                    <button onClick={() => handleDelete(blog._id)} className={`px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer $`}>
                      <span>Delete</span>
                    </button>
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

export default ManageBlogs;
