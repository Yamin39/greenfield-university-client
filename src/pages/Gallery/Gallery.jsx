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
    const newIndex = direction === "next"
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const openImage = (image, idx) => {
    setSelectedImage(image);
    setCurrentIndex(idx);
  };

  return (
    <div>
      <SharedBanner title="University Gallery" />

      <div className="max-w-7xl mx-auto px-4 pt-20 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openImage(image, idx)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.img}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white bg-black p-2 rounded-full hover:text-gray-300 hover:bg-gray-800 transition-all duration-300 z-50"
          >
            <X size={20} />
          </button>

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
              className="max-w-full max-h-[90vh] object-contain animate-scaleIn"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;