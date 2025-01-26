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
import Gallery from "../pages/Gallery/Gallery";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Dashboard/Statistics";
import ManageGallery from "../Dashboard/admin/ManageGallery";
import ShopDetails from "../pages/shop/shopDetails/ShopDetails";
import AnnouncementDetails from "../pages/announcements/AnnouncementDetails";
import InstructorDetails from '../pages/Instructor/InstructorDetails'
import Policy from "../pages/Policy/Policy";
import ShopCart from "../pages/shop/shopCart/ShopCart";
import Wishlist from "../pages/shop/wishlist/Wishlist";
import ManageAnnouncements from "../Dashboard/admin/ManageAnnouncements";
import PostAnnouncements from "../Dashboard/admin/PostAnnouncements";
import AddProduct from "../Dashboard/admin/AddProduct";
import Eventspage from "../pages/Eventspage/Eventspage";
import Events from "../pages/Events/Events";

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
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shop-details",
        element: <ShopDetails></ShopDetails>,
      },
      {
        path: "/cart",
        element: <ShopCart></ShopCart>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
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
        path: '/announcement/:id',
        element: <AnnouncementDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/announcement/${params.id}`)
      },
      {
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/instructor/:id',
        element: <InstructorDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/instructor/${params.id}`)
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: '/policy',
        element: <Policy />
      },
       
      {
        path: '/events',
        element: <Events />
      }
      ,
       
      {
        path: '/event/:id',
        element: <Eventspage />
      }

    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Statistics />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'manageGallery',
        element: <ManageGallery />
      },
      {
        path: 'manageAnnouncements',
        element: <ManageAnnouncements />
      },
      {
        path: 'postAnnouncements',
        element: <PostAnnouncements />
      },
      {
        path: 'addProduct',
        element: <AddProduct />
      }
    ]
  }

]);

export default router;
