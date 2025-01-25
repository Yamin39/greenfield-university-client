import { useState } from "react";
import { IoAdd, IoEyeOutline } from "react-icons/io5";
import DashboardTitle from "../DashboardTitle";
import { MdOutlineDelete } from "react-icons/md";

const ManageGallery = () => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleDelete = () => {
    console.log("Click");
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardTitle title="Manage Gallery" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridAutoRows: "1fr" }}>
        <div className="flex items-center justify-center border cursor-pointer rounded-lg text-center flex-col">
          <IoAdd className="text-6xl" />
          <span className="text-sm text-gray-600">Click To Add Image</span>
        </div>

        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt={`Gallery image ${index + 1}`}
            />
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center duration-500 space-x-2">
              <IoEyeOutline
                onClick={() => openModal(image)}
                className="text-white text-3xl cursor-pointer opacity-0 group-hover:opacity-100"
              />
              <MdOutlineDelete
                onClick={() => handleDelete()}
                className="text-[#f42b2e] text-3xl cursor-pointer bg-white p-0.5 rounded-full hover:bg-[#f42b2e] hover:text-white opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="max-w-full max-h-[80vh] rounded-lg"
              src={selectedImage}
              alt="Selected"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full px-3 py-1 text-lg"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageGallery;
