import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Dashboard/Statistics";
import AddBlog from "../Dashboard/admin/AddBlog";
import AddEvents from "../Dashboard/admin/AddEvents";
import AddFaq from "../Dashboard/admin/AddFaq";
import AddProduct from "../Dashboard/admin/AddProduct";
import AdminProfile from "../Dashboard/admin/AdminProfile";
import ApproveCourse from "../Dashboard/admin/ApproveCourses";
import ContactRequests from "../Dashboard/admin/ContactRequests";
import ManageAnnouncements from "../Dashboard/admin/ManageAnnouncements";
import ManageBlogs from "../Dashboard/admin/ManageBlogs";
import ManageEvents from "../Dashboard/admin/ManageEvents";
import ManageFaq from "../Dashboard/admin/ManageFaq";
import ManageGallery from "../Dashboard/admin/ManageGallery";
import ManageProducts from "../Dashboard/admin/ManageProducts";
import NewsletterRequests from "../Dashboard/admin/NewsletterRequests";
import PostAnnouncements from "../Dashboard/admin/PostAnnouncements";
import RegisteredInstructors from "../Dashboard/admin/RegisteredInstructors";
import RegisteredStudents from "../Dashboard/admin/RegisteredStudents";
import UpdateAnnouncement from "../Dashboard/admin/UpdateAnnouncement";
import UpdateBlog from "../Dashboard/admin/UpdateBlog";
import UpdateEvent from "../Dashboard/admin/UpdateEvent";
import UpdateFaq from "../Dashboard/admin/UpdateFaq";
import UpdateProduct from "../Dashboard/admin/UpdateProduct";
import ApproveBlogs from "../Dashboard/admin/approveBlogs";
import AddCourse from "../Dashboard/instructor/AddCourse";
import InstructorsProfile from "../Dashboard/instructor/InstructorsProfile";
import ManageCourse from "../Dashboard/instructor/ManageCourse";
import ManageQuery from "../Dashboard/student/ManageQuery";
import PurchasedCourses from "../Dashboard/student/PurchasedCourses";
import StudentProfile from "../Dashboard/student/StudentProfile";
import Root from "../layouts/Root";
import HowtoApply from "../pages/Apply/HowtoApply";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Events from "../pages/Events/Events";
import Eventspage from "../pages/Eventspage/Eventspage";
import Faq from "../pages/Faq/Faq";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import InstructorDetails from "../pages/Instructor/InstructorDetails";
import Instructors from "../pages/Instructor/Instructors";
import UnregisteredInstructors from "../pages/Instructor/unregisteredInstructors";
import UnregisteredStudents from "../pages/Instructor/unregisteredStudents";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import Policy from "../pages/Policy/Policy";
import Queries from "../pages/Queries/Queries";
import QueryDetails from "../pages/Queries/QueryDetails/QueryDetails";
import Registration from "../pages/Registration/Registration";
import ManageTestimonials from "../pages/Testimonials/ManageTestimonials";
import Testimonials from "../pages/Testimonials/Testimonials";
import Tour from "../pages/Tour/Tour";
import About from "../pages/about/About";
import AnnouncementDetails from "../pages/announcements/AnnouncementDetails";
import Announcements from "../pages/announcements/Announcements";
import Blogs from "../pages/blog/Blogs";
import BlogDetails from "../pages/blog/blogDetails/BlogDetails";
import Chatbot from "../pages/chatbot/Chatbot";
import Contact from "../pages/contact/Contact";
import CourseDetails from "../pages/course/CourseDetails";
import OurCourse from "../pages/course/OurCourse";
import DateDeadline from "../pages/dateDeadline/DateDeadline";
import FinancialAid from "../pages/financialAid/FinancialAid";
import Overview from "../pages/overview/Overview";
import PrivacyPolicy from "../pages/privacyPolicy/PrivacyPolicy";
import PurcheseGuide from "../pages/purcheseGuide/PurcheseGuide";
import Shop from "../pages/shop/Shop";
import PurchasedBooks from "../pages/shop/purchased/PurchasedBooks";
import PurchasedHistory from "../pages/shop/purchased/PurchasedHistory";
import ShopCart from "../pages/shop/shopCart/ShopCart";
import ShopDetails from "../pages/shop/shopDetails/ShopDetails";
import Wishlist from "../pages/shop/wishlist/Wishlist";
import TermsCondition from "../pages/termsCondition/TermsCondition";
import TuitionFee from "../pages/tuitionFee/TuitionFee";
import PrivateRoute from "./PrivateRoute";

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
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/announcement/${params.id}`),
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/instructor/:id",
        element: <InstructorDetails />,
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/instructor/${params.id}`),
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
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "/query-details/:id",
        element: <QueryDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
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
        path: "registeredStudents",
        element: <RegisteredStudents></RegisteredStudents>,
      },
      {
        path: "registeredInstructors",
        element: <RegisteredInstructors></RegisteredInstructors>,
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
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/product/${params.id}`),
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/product/${params.id}`),
      },
      {
        path: "manageBlogs",
        element: <ManageBlogs />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },
      {
        path: "updateBlog/:id",
        element: <UpdateBlog />,
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/blogs/${params.id}`),
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
        path: "updateFaq/:id",
        element: <UpdateFaq></UpdateFaq>,
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/faqs/${params.id}`),
      },
      {
        path: "updateAnnouncement/:id",
        element: <UpdateAnnouncement />,
        loader: ({ params }) => fetch(`https://greenfield-university-server.vercel.app/announcement/${params.id}`),
      },
      {
        path: "addCourse",
        element: <AddCourse />,
      },
      {
        path: "manageCourse",
        element: <ManageCourse />,
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
        path: "contactRequests",
        element: <ContactRequests />,
      },
      {
        path: "admin/my-profile",
        element: <AdminProfile />,
      },
      {
        path: "contactRequests",
        element: <ContactRequests />,
      },
      {
        path: "purchasedBooks",
        element: <PurchasedBooks />,
      },
      {
        path: "purchasedHistory",
        element: <PurchasedHistory />,
      },
      {
        path: "approveBlogs",
        element: <ApproveBlogs />,
      },
      {
        path: "approveCourses",
        element: <ApproveCourse />,
      },
      {
        path: "addEvents",
        element: <AddEvents />,
      },
      {
        path: "manageEvents",
        element: <ManageEvents />,
      },
      {
        path: "manageEvents/edit/:id",
        element: <UpdateEvent />,
      },
      {
        path: "manageQuery",
        element: <ManageQuery />,
      },

      {
        path: "unregisteredStudents",
        element: <UnregisteredStudents />,
      },
      {
        path: "unregisteredInstructors",
        element: <UnregisteredInstructors />,
      },
      {
        path: "newsletterRequests",
        element: <NewsletterRequests />,
      },
      {
        path: "registeredCourse",
        element: <PurchasedCourses />,
      },
    ],
  },
]);

export default router;
