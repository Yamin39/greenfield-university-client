import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SharedBanner from "../../../shared/SharedBanner";
import BlogDetailsPage from "./BlogDetailsPage";
import Comments from "./Comments";
import LeaveForm from "./LeaveForm";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs/${id}`);
      return res.data;
    },
  });
  return (
    <div>
      <SharedBanner title={"Blog Details"}></SharedBanner>
      <BlogDetailsPage data={data}></BlogDetailsPage>
      <Comments data={data}></Comments>
      <LeaveForm blogId={id} refetch={refetch}></LeaveForm>
    </div>
  );
};

export default BlogDetails;
