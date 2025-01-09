import About from "./About";
import Banner from "./Banner";
import CampusLife from "./CampusLife";
import HeadingComp from "./HeadingComp";
import Instructors from "./Instructors ";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <CampusLife></CampusLife>

      <Instructors/>
      <HeadingComp/>
      <Testimonials/>
    </div>
  );
};

export default Home;
