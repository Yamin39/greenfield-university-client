import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
  return (
    <div className="overflow-y-hidden">
      <Nav />

      <div>
        <ScrollToTop />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
