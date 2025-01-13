import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import OurCourse from "../pages/course/OurCourse";
import CourseDetails from "../pages/course/CourseDetails";

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
      path:"/our-course",
        element: <OurCourse/>,
      },
      {
      path:"/course-details",
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);

export default router;
