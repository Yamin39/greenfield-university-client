import About from "./About";
import Banner from "./Banner";
import CampusIntro from "./CampusIntro";
import CampusLife from "./CampusLife";
import GetTouch from "./GetTouch";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <CampusLife></CampusLife>
      <Testimonials/>
      <CampusIntro></CampusIntro>
      <GetTouch></GetTouch>
    </div>
  );
};

export default Home;
