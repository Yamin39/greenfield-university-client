import { useEffect, useState } from "react";

const OurCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  mt-72">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center  justify-center">
        {courses.map((course) => (
               <div
               className="group flex bg-[#F7F5F2] flex-col  h-96 w-80 border border-gray-200 rounded shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105   "
               key={course.id}
             >
               {/* Image Section */}
               <div className=" h-[40%]  ">
                 <img
                   className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                   src={course.image_url}
                   alt=""
                 />
                 <p className="absolute top-2 left-2 px-2.5 py-0.5 text-sm rounded-sm bg-yellow-500 text-white">
                   {course.mode}
                 </p>
               </div>

            {/* Text Section */}
            <div className="relative translate-y-[62px] bg-[#F7F5F2] pb-40  duration-500 group-hover:translate-y-[-5px] flex flex-col p-4  ">
              <h2 className="px-2.5 py-0.5 text-xs text-center w-fit rounded-sm bg-green-400 text-teal-900">
                {course.category}
              </h2>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{course.description}</p>
              <p className="mt-2 text-yellow-500 font-medium">Rating: {course.rating}</p>

              {/* Enroll Button */}
              <button className=" mt-4 w-32 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-yellow-600"> 
                Enroll Now
              </button>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCourse;
