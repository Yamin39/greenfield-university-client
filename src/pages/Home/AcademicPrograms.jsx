import { useQuery } from "@tanstack/react-query";
import { Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AcademicPrograms = () => {
  const axiosPublic = useAxiosPublic();

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data;
    },
  });

  // Take only first 6 courses
  const displayedCourses = courses.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto bg-[#FFFFFF] p-4 text-center mt-20 mb-28">
      {/* Heading Section */}
      <div>
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">POPULAR COURSES</p>
        <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
          <span className="text-primary-700">Academic Programs</span>
        </h1>
        <img className="w-28 mt-2 mb-7 mx-auto" src="https://i.ibb.co.com/9kQWLt0S/images-removebg-preview.png" alt="style" />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center pt-8">
        {displayedCourses.map((course) => {
          // Calculate total duration from curriculum
          const totalDuration = course.curriculum?.reduce((acc, section) => {
            return (
              acc +
              section.lessons.reduce((lessonAcc, lesson) => {
                const [minutes] = lesson.duration.split(":").map(Number);
                return lessonAcc + minutes;
              }, 0)
            );
          }, 0);

          // Calculate average rating
          const averageRating = course.reviews?.reduce((acc, review) => acc + review.rating, 0) / course.reviews?.length || 0;

          return (
            <div key={course._id} className="bg-white rounded-lg shadow-md overflow-hidden text-left hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img src={course.image_url} alt={course.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-700 text-white text-sm rounded-full">{course.category}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{totalDuration} mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.curriculum?.reduce((acc, section) => acc + section.lessons.length, 0)} lessons</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={course.instructorDetails.img} alt={course.instructorDetails.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm text-gray-700">{course.instructorDetails.name}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{averageRating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/course-details/${course._id}`}
                    className="px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors duration-300"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Courses Button */}
      <div className="mt-12">
        <Link to="/our-course" className="px-6 py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors duration-300 inline-block">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default AcademicPrograms;
