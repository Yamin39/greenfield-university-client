import { X } from "lucide-react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const CampusIntro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/5179YXW/intro-banner.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="bg-black/50  ">
          <div className="py-32 md:py-40 lg:py-56 space-y-16">
            <div className="flex justify-center items-center relative z-20">
              <button onClick={openModal} className="bg-[#EE4A62] rounded-full w-20 h-20  flex justify-center items-center">
                <FaPlay size={25} className=" text-white"></FaPlay>
                <span className="border absolute border-spacing-12   animate-ping border-white w-24 h-24 rounded-full" style={{ animationDuration: "2s" }}>
                  {" "}
                </span>
                <span
                  className="border absolute border-spacing-12  delay-1000 animate-ping border-white w-20 h-20 rounded-full"
                  style={{ animationDuration: "2s" }}
                >
                  {" "}
                </span>
              </button>
            </div>

            <h1 className="text-3xl md:text-5xl text-center text-white  font-bold relative z-10">
              Take a Video Tour to Learn <br className="hidden md:block" /> Intro of Campus
            </h1>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-4xl h-auto">
            <button className="absolute top-4 right-9 text-white bg-black p-2 rounded-full hover:text-gray-300 transition-colors z-50" onClick={closeModal}>
              <X size={20} />
            </button>
            <div className="aspect-video px-5">
              <iframe
                src="https://www.youtube.com/embed/GkZhGCJsIj8?si=W7ioh4glKqBWAsZ2"
                className="rounded-xl size-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampusIntro;
