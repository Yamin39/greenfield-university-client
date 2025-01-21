import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedBanner from "../../shared/SharedBanner";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: galleryImages = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "Escape") {
          setSelectedImage(null);
        } else if (e.key === "ArrowLeft") {
          navigateImage("prev");
        } else if (e.key === "ArrowRight") {
          navigateImage("next");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, galleryImages]);

  const navigateImage = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
      setSelectedImage(galleryImages[currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1]);
    } else {
      setCurrentIndex((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
      setSelectedImage(galleryImages[currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1]);
    }
  };

  const getImageClassName = (size) => {
    const baseClasses = "group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer";

    const sizeClasses = {
      normal: "",
      large: "col-span-2 row-span-2",
      tall: "col-span-1 row-span-2",
      wide: "col-span-2 row-span-1",
    };

    return `${baseClasses} ${sizeClasses[size] || ""}`;
  };

  const openImage = (image, idx) => {
    setSelectedImage(image);
    setCurrentIndex(idx);
  };

  return (
    <div>
      <SharedBanner title="University Gallery" />

      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="sm:grid grid-cols-1 md:grid-cols-4 space-y-4 sm:space-y-0 sm:gap-4 auto-rows-[200px]">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx + 1} 
              className={getImageClassName(image.size)} 
              onClick={() => openImage(image, idx)}
            >
              <img
                src={image.img}
                alt={`Gallery image ${idx + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center top-[76px] animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white bg-black p-2 rounded-full hover:text-gray-300 hover:bg-gray-800 transition-all duration-300 z-50"
          >
            <X size={20} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-[90vw] max-h-[90vh] relative">
            <img 
              src={selectedImage.img} 
              alt="Selected gallery image" 
              className="max-w-full max-h-[90vh] bg-gray-300 object-contain animate-scaleIn"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;