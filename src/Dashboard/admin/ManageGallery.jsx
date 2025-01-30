import { useState } from "react";
import { IoAdd, IoEyeOutline } from "react-icons/io5";
import DashboardTitle from "../DashboardTitle";
import { MdOutlineDelete } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-hot-toast";
import axios from "axios";

const apiKey = import.meta.env.VITE_ImgBB_api_key;
const imageUpload = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const ManageGallery = () => {
  const axiosPublic = useAxiosPublic();

  const { data: images = [], refetch } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleImageChange = async (e) => {
    const image = e.target.files[0];

    if (!image) {
      toast.error("Please select a photo.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post(imageUpload, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = res.data.data.display_url;

      await axiosPublic.post("/gallery", { img: imageUrl });

      toast.success("Image uploaded successfully!");
      refetch();
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed. Please try again.");
    }
  };

  const handleDeleteImage = async (id) => {
    const { data } = await axiosPublic.delete(`/gallery/${id}`);
    console.log(data);
    if (data.deletedCount > 0) {
      toast.success("Image has been deleted successfully.");
      refetch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <DashboardTitle title="Manage Gallery" />
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        style={{ gridAutoRows: "1fr" }}
      >
        <div className="flex items-center justify-center border cursor-pointer rounded-lg text-center flex-col relative">
          <IoAdd className="text-6xl" />
          <input
            type="file"
            name="image"
            onChange={handleImageChange} // Trigger upload on image selection
            className="w-full h-full absolute top-0 left-0 right-0 file:hidden cursor-pointer opacity-0"
          />
          <span className="text-sm text-gray-600">Click To Add Image</span>
        </div>

        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image.img}
              alt={`Gallery image ${index + 1}`}
            />
            <div className="bg-black absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center duration-500 space-x-2">
              <IoEyeOutline
                onClick={() => openModal(image.img)}
                className="text-white text-3xl cursor-pointer opacity-0 group-hover:opacity-100"
              />
              <MdOutlineDelete
                onClick={() => handleDeleteImage(image._id)}
                className="text-[#f42b2e] text-3xl cursor-pointer bg-white p-0.5 rounded-full hover:bg-[#f42b2e] hover:text-white opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-10"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="max-w-full max-h-[80vh] rounded-lg "
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
