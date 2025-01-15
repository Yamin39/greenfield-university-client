import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-72">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        {courses.map((course) => (
          <div
            className="group flex bg-[#F7F5F2] flex-col h-96 w-80 border border-gray-200 rounded shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
            key={course._id}
          >
            {/* Image Section */}
            <div className="h-[60%]">
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={course.image_url}
                alt={course.title}
              />
            </div>

            {/* Text Section */}
            <div className="relative translate-y-[1px] bg-[#F7F5F2] pb-40 duration-500 group-hover:translate-y-[-65px] flex flex-col p-4">
              {/* Category */}
              <h2 className="px-2.5 py-0.5 text-xs text-center w-fit rounded-sm bg-green-400 text-teal-900">
                {course.category || "General"} {/* Fallback if category is missing */}
              </h2>

              {/* Title */}
              <h3 className="text-xl font-bold  ">{course.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-2">{course.description.slice(0, 50)}</p>

              {/* Rating */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(course.rating || 0)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <p className="ml-2 text-sm text-gray-500">
                  ({course.reviews?.length || 0} Reviews)
                </p>
              </div>

              {/* Enroll Button */}
              <Link
                to={`/course-details/${course._id}`}
                className="mt-4 w-32 px-4 py-1 bg-red-500 text-white text-center rounded-md hover:bg-yellow-600 transition-colors duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourse;