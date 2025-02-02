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
import InstructorDetails from "../pages/Instructor/InstructorDetails";
import Policy from "../pages/Policy/Policy";
import ShopCart from "../pages/shop/shopCart/ShopCart";
import Wishlist from "../pages/shop/wishlist/Wishlist";
import ManageAnnouncements from "../Dashboard/admin/ManageAnnouncements";
import PostAnnouncements from "../Dashboard/admin/PostAnnouncements";
import AddProduct from "../Dashboard/admin/AddProduct";
import Eventspage from "../pages/Eventspage/Eventspage";
import Events from "../pages/Events/Events";
import Testimonials from "../pages/Testimonials/Testimonials";
import Chatbot from "../pages/chatbot/Chatbot";
import ManageBlogs from "../Dashboard/admin/ManageBlogs";
import AddBlog from "../Dashboard/admin/AddBlog";
import PurcheseGuide from "../pages/purcheseGuide/PurcheseGuide";
import TermsCondition from "../pages/termsCondition/TermsCondition";
import UpdateBlog from "../Dashboard/admin/UpdateBlog";
import AddFaq from "../Dashboard/admin/AddFaq";
import ManageFaq from "../Dashboard/admin/ManageFaq";
import UpdateFaq from "../Dashboard/admin/UpdateFaq";
import UpdateAnnouncement from "../Dashboard/admin/UpdateAnnouncement";
import ManageTestimonials from "../pages/Testimonials/ManageTestimonials";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import AddCourse from "../Dashboard/instructor/AddCourse";
import InstructorsProfile from "../Dashboard/instructor/InstructorsProfile";
import ManageEvent from "../pages/Events/ManageEvent";
import AddEvents from "../pages/Events/AddEvents";

import StudentProfile from "../Dashboard/student/StudentProfile";
import ManageProducts from "../Dashboard/admin/ManageProducts";
import UpdateProduct from "../Dashboard/admin/UpdateProduct";
import ManageCourse from "../Dashboard/instructor/ManageCourse";
import ContactRequests from "../Dashboard/admin/ContactRequests";
import Queries from "../pages/Queries/Queries";
import QueryDetails from "../pages/Queries/QueryDetails/QueryDetails";
import Payment from "../pages/Payment/Payment";
import PurchasedBooks from "../pages/shop/purchased/PurchasedBooks";
import PurchasedHistory from "../pages/shop/purchased/PurchasedHistory";
<<<<<<< HEAD
import ApproveBlogs from "../Dashboard/admin/approveBlogs";
=======
import AdminProfile from "../Dashboard/admin/AdminProfile";
>>>>>>> 303383663798b1bbebb17243fb4001ad513923e9

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
        path: "/course-details/:id",
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
        path: "/shop-details/:id",
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
        path: "/guide",
        element: <PurcheseGuide></PurcheseGuide>,
      },
      {
        path: "/terms-condition",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/university-overview",
        element: <Overview />,
      },

      {
        path: "/how-to-Apply",
        element: <HowtoApply />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        path: "/tour",
        element: <Tour />,
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
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/announcements",
        element: <Announcements />,
      },
      {
        path: "/announcement/:id",
        element: <AnnouncementDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/announcement/${params.id}`),
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/instructor/:id",
        element: <InstructorDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructor/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/policy",
        element: <Policy />,
      },

      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event/:id",
        element: <Eventspage />,
      },

      {
        path: "/testimonials",
        element: <Testimonials />,
      },

      {
        path: "/chatbot",
        element: <Chatbot />,
      },
      {
        path: "/queries",
        element: <Queries />,
      }, {
        path: 'payment',
        element: <Payment />
      },
      {
        path: "/query-details/:id",
        element: <QueryDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "manageGallery",
        element: <ManageGallery />,
      },
      {
        path: "manageAnnouncements",
        element: <ManageAnnouncements />,
      },
      {
        path: "postAnnouncements",
        element: <PostAnnouncements />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: 'manageProducts',
        element: <ManageProducts></ManageProducts>
      },
      {
        path: 'updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: 'manageProducts',
        element: <ManageProducts></ManageProducts>
      },
      {
        path: 'updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: 'manageBlogs',
        element: <ManageBlogs />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },
      {
        path: "updateBlog/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
      {
        path: "addFaq",
        element: <AddFaq></AddFaq>,
      },
      {
        path: "manageFaq",
        element: <ManageFaq></ManageFaq>,
      },
      {
        path: "manageTestimonials",
        element: <ManageTestimonials />,
      },
      {
        path: "manageEvents",
        element: <ManageEvent />,
      },
      {
        path: "addEvents",
        element: <AddEvents />,
      },
      {
        path: "updateFaq/:id",
        element: <UpdateFaq></UpdateFaq>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/faqs/${params.id}`),
      },
      {
        path: "updateAnnouncement/:id",
        element: <UpdateAnnouncement />,
        loader: ({ params }) => fetch(`http://localhost:5000/announcement/${params.id}`),
      },
      {
        path: 'addCourse',
        element: <AddCourse />
      },
      {
        path: 'manageCourse',
        element: <ManageCourse />
      },
      {
        path: "instructor/my-profile",
        element: <InstructorsProfile />,
      },
      {
        path: "student/my-profile",
        element: <StudentProfile />,
      },
      {
        path: 'contactRequests',
        element: <ContactRequests />
      },
      {
        path: "admin/my-profile",
        element: <AdminProfile />
      },
      {
        path: 'contactRequests',
        element: <ContactRequests />
      },
      {
        path: "purchasedBooks",
        element: <PurchasedBooks />,
      },
      {
        path: 'purchasedHistory',
        element: <PurchasedHistory />
      },
      {
        path: 'approveBlogs',
        element: <ApproveBlogs />
      }
    ]
  }

]);

export default router;
