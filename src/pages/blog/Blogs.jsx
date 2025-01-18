import SharedBanner from "../../shared/SharedBanner";
import AllBlogs from "./AllBlogs";


const Blogs = () => {
    return (
        <div>
            <SharedBanner title={'Blog'}></SharedBanner>
            <AllBlogs></AllBlogs>
        </div>
    );
};

export default Blogs;