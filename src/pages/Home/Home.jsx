import About from "./About";
import Banner from "./Banner";
import CampusLife from "./CampusLife";
import HeadingComp from "./HeadingComp";
import Instructors from "./Instructors ";
import RecentBlogs from "./RecentBlogs";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <CampusLife></CampusLife>

      <Instructors />
      <HeadingComp />
      <RecentBlogs />
      <Testimonials />
    </div>
  );
};

export default Home;
