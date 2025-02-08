import { useQuery } from "@tanstack/react-query";
import { Clock, Star, Users } from "lucide-react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedBanner from "../../shared/SharedBanner";

const OurCourse = () => {
  const axiosPublic = useAxiosPublic();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/courses");
      return res.data.filter((course) => course.status === "approved");
    },
  });

  return (
    <div className=" bg-[#FFFFFF] text-center">
      <SharedBanner title="Our Courses" />

      <div className="flex  justify-between  items-center max-w-7xl mt-14 mx-auto">
        <div>
          <p>
            Showing <span className="text-primary-700"> 1</span> - <span className="text-primary-700">9 </span>of<span className="text-primary-700"> 69 </span>
            Results
          </p>
        </div>
        <div className="py-2 px-6 w-56 text-black gap-4 bg-gray-200 flex justify-between items-center rounded-md">
          <input type="text" placeholder="Search Course" value={searchTerm} onChange={handleSearchChange} className="bg-transparent outline-none w-full pr-2" />
          <GoSearch className="text-gray-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const averageRating = course.reviews?.reduce((acc, review) => acc + review.rating, 0) / course.reviews?.length || 0;
            const totalLessons = course.curriculum?.reduce((acc, section) => acc + section.lessons.length, 0) || 0;

            const renderStars = (rating) => {
              return [...Array(5)].map((_, index) => (
                <Star key={index} className={`w-5 h-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
              ));
            };

            return (
              <div key={course._id} className="relative text-left group h-[450px] rounded-xl border shadow overflow-hidden">
                {/* Default Card */}
                <div className="absolute inset-0 bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:opacity-0">
                  <div className="relative">
                    <img src={course.image_url} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4 bg-orange-400 text-white px-3 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>12 Hours</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-emerald-500 font-medium">Expert</span>
                    </div>

                    <Link to={`/course-details/${course._id}`}>
                      <h2 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h2>
                    </Link>

                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(averageRating)}
                      <span className="text-gray-600 ml-2">({averageRating.toFixed(1)}/3 Rating)</span>
                    </div>

                    <div className="text-2xl font-bold text-red-500 mb-4">{course.price ? `$${course.price}` : "Free"}</div>

                    <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{totalLessons} Lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span>72 Students</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Card */}
                <div className="absolute inset-0 bg-emerald-500 p-6 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  <button className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>

                  <div className="mb-4">
                    <span className="bg-white text-emerald-500 px-3 py-1 rounded-full text-sm font-medium">Expert</span>
                  </div>

                  <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>

                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(averageRating)}
                    <span className="ml-2">({averageRating.toFixed(1)}/3 Rating)</span>
                  </div>

                  <div className="text-3xl font-bold mb-4">{course.price ? `$${course.price}` : "Free"}</div>

                  <p className="mb-6 text-white/90 line-clamp-3">
                    {course.description.slice(0, 116)}
                    {course.description.length > 116 ? "..." : ""}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{totalLessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>72 Students</span>
                    </div>
                  </div>

                  <Link
                    to={`/course-details/${course._id}`}
                    className="block text-center bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCourse;
