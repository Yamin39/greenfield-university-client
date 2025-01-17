import About from "./About";
import Banner from "./Banner";
import CampusIntro from "./CampusIntro";
import CampusLife from "./CampusLife";
import HeadingComp from "./HeadingComp";
import Instructors from "./Instructors ";
import RecentBlogs from "./RecentBlogs";
import GetTouch from "./GetTouch";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Academic from "./Academic";

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <CampusLife></CampusLife>
      <Testimonials />
      <CampusIntro></CampusIntro>
      <GetTouch></GetTouch>
      <Instructors />
      <Partners/>
      <Academic/>
      <HeadingComp />
      <RecentBlogs />
    </div>
  );
};

export default Home;
