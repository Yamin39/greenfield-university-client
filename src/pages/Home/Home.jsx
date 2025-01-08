import About from "./About";
import Banner from "./Banner";
import CampusLife from "./CampusLife";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About></About>
      <CampusLife></CampusLife>
      <Testimonials/>
    </div>
  );
};

export default Home;
