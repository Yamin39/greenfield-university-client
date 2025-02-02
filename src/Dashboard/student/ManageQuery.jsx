import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";
import Query from "./Query";

const ManageQuery = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: queries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["queries", user.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/queries?email=${user.email}`);
      return data;
    },
  });

  console.log(queries);

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/query/${id}`)
      .then(() => {
        console.log("Query deleted");
        toast.success("Query deleted successfully");
        refetch();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete query");
      });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <DashboardTitle title="Manage Query" />

      <div className="mt-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-6">
            {queries.map((query) => (
              <Query key={query._id} query={query} handleDelete={handleDelete} refetch={refetch} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuery;
