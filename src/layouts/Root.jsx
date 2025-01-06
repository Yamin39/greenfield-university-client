import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div className="overflow-y-hidden">
      <Nav />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
