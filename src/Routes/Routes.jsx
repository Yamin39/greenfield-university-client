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
import Tour from "../pages/Tour/Tour";
import DateDeadline from "../pages/dateDeadline/DateDeadline";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import About from "../pages/about/About";
import Faq from "../pages/Faq/Faq";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Announcements from "../pages/announcements/Announcements";
import Blogs from "../pages/blog/Blogs";
import BlogDetails from "../pages/blog/blogDetails/BlogDetails";
import Instructors from "../pages/Instructor/Instructors";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog-details",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
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
        element: <HowtoApply />,
      },
      {
        path: '/tour',
        element: <Tour />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/announcements',
        element: <Announcements />
      },
      {
        path: '/instructors',
        element: <Instructors />
      }

    ],
  },
]);

export default router;
