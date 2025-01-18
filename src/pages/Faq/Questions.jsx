import { useState } from "react";

// icons
import { FaPlus } from "react-icons/fa6";

const Questions = () => {
   const [isAccordingOpen, setIsAccordingOpen] = useState(null);

   const faqData = [
      {
         title: "What courses are offered in the Computer Science department?",
         description: "The Computer Science department offers courses such as Programming, Data Structures, Machine Learning, Artificial Intelligence, and Web Development."
      },
      {
         title: "How can I apply for a Master's program?",
         description: "To apply for a Master's program, you need to submit your application online through the university's admission portal, along with the required documents like transcripts and recommendation letters."
      },
      {
         title: "What is the duration of the undergraduate programs?",
         description: "Undergraduate programs typically last for 4 years, divided into 8 semesters."
      },
      {
         title: "Are there any scholarships available for students?",
         description: "Yes, the university offers merit-based, need-based, and special category scholarships for eligible students."
      },
      {
         title: "What facilities are available in the university library?",
         description: "The university library provides access to a wide range of books, journals, research papers, and digital resources, along with dedicated study areas."
      },
      {
         title: "How can I contact the faculty members?",
         description: "Faculty members can be contacted through their official university email addresses, which are listed on the department's website."
      },
      {
         title: "Is there any internship or placement support provided by the university?",
         description: "Yes, the university has a dedicated career services team that helps students find internships and job placements."
      },
      {
         title: "What extracurricular activities are available on campus?",
         description: "The university offers a variety of extracurricular activities, including sports, cultural clubs, debate societies, and music bands."
      },
      {
         title: "Are there any online courses or distance learning programs available?",
         description: "Yes, the university provides online courses and distance learning programs for students who prefer flexible learning options."
      },
      {
         title: "How do I change my major or transfer to another department?",
         description: "To change your major or transfer to another department, you need to submit a formal request to the academic office, and approval is subject to availability and academic performance."
      }
   ];


   const handleBorderClick = (index) =>
      setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
   return (
      <div className="max-w-7xl mx-auto  px-3 flex gap-8 py-16 flex-col md:flex-row">
         <div className="basis-[40%] space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-gray-700">Know More About Us By The Questions</h1>
            <p className="text-[#8b8a8a] text-justify text-[15px]">Our university is a leading institution dedicated to providing world-class education and fostering innovation. With a rich history of academic excellence, it offers a wide range of undergraduate, postgraduate, and doctoral programs across diverse disciplines such as engineering, business, humanities, and the sciences.</p>
            <p className="text-[#8b8a8a] text-justify text-[15px]">Beyond academics, the university takes pride in its vibrant campus life, promoting personal growth through numerous extracurricular opportunities. Students can participate in various clubs, sports teams, and cultural events, fostering a sense of community and belonging.</p>

         </div>

         {/* freequently asked question */}

         <div className="flex gap-3 flex-col w-full flex-grow">
            {faqData?.map((according, index) => (
               <article key={index} className="border border-[#e5eaf2] rounded p-3">
                  <div
                     className="flex gap-2 cursor-pointer items-center justify-between w-full"
                     onClick={() => handleBorderClick(index)}>
                     <h2 className={`text-primary-800 font-[600] text-[1.2rem]`}>
                        {according.title}
                     </h2>
                     <p>
                        <FaPlus
                           className={`text-[1.3rem] text-[#424242] transition-all duration-300 ${isAccordingOpen === index && "rotate-[45deg] !text-primary-800"
                              }`}
                        />
                     </p>
                  </div>
                  <div
                     className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === index
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                        }`}>
                     <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                        {according.description}
                     </p>
                  </div>
               </article>
            ))}
         </div>

      </div>
   );
};

export default Questions;