import SharedBanner from "../../shared/SharedBanner";
import AllBlogs from "./AllBlogs";


const Blogs = () => {
    return (
        <div>
            <SharedBanner title={'Blogs'}></SharedBanner>
            <AllBlogs></AllBlogs>
        </div>
    );
};

export default Blogs;