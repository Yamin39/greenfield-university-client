import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import OurCourse from "../pages/course/OurCourse";
import CourseDetails from "../pages/course/CourseDetails";
import Overview from "../pages/overview/Overview";
import HowtoApply from "../pages/Apply/HowtoApply";
import TuitionFee from "../pages/tuitionFee/TuitionFee";
import FinancialAid from "../pages/financialAid/FinancialAid";
import Contact from "../pages/contact/Contact";
import DateDeadline from "../pages/dateDeadline/DateDeadline";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/our-course",
        element: <OurCourse />,
      },
      {
        path: "/course-details/:_id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/tuition-fees",
        element: <TuitionFee></TuitionFee>,
      },
      {
        path: "/financial-aid",
        element: <FinancialAid></FinancialAid>,
      },
      {
        path: "/dates-deadlines",
        element: <DateDeadline></DateDeadline>,
      },
      {
        path: "/university-overview",
        element: <Overview />,
      },

      {
        path: '/how-to-Apply',
        element: <HowtoApply />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: "/university-overview",
        element: <Overview />,
      },

      {
        path: "/university-apply",
        element: <HowtoApply/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      
    ],
  },
]);

export default router;
