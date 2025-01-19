import SharedBanner from "../../../shared/SharedBanner";
import BlogDetailsPage from "./BlogDetailsPage";
import Comments from "./Comments";
import LeaveForm from "./LeaveForm";


const BlogDetails = () => {
    return (
        <div>
            <SharedBanner title={'Blog Details'}></SharedBanner>
            <BlogDetailsPage></BlogDetailsPage>
            <Comments></Comments>
            <LeaveForm></LeaveForm>
        </div>
    );
};

export default BlogDetails;