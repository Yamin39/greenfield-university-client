import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SharedBanner from "../../shared/SharedBanner";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();

  const { data: galleryImages = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  const getImageClassName = (size) => {
    const baseClasses = "group relative overflow-hidden rounded-lg bg-gray-100";

    const sizeClasses = {
      normal: "",
      large: "col-span-2 row-span-2",
      tall: "col-span-1 row-span-2",
      wide: "col-span-2 row-span-1",
    };

    return `${baseClasses} ${sizeClasses[size] || ""}`;
  };

  return (
    <div>
      <SharedBanner title="University Gallery" />

      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="sm:grid grid-cols-1 md:grid-cols-4 space-y-4 sm:space-y-0 sm:gap-4 auto-rows-[200px]">
          {galleryImages.map((image, idx) => (
            <div key={idx + 1} className={getImageClassName(image.size)}>
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
    </div>
  );
};

export default Gallery;
