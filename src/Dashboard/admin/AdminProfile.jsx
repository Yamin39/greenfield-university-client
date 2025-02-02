import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import LoadingModal from "../../components/LoadingModal";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";

const AdminProfile = () => {
  const { user, loading: userLoading, updateUserNameAndPhoto } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const axiosPublic = useAxiosPublic();
  const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`;

  const {
    data: adminProfile = {},
    isLoading: isProfileLoading,
    refetch,
  } = useQuery({
    queryKey: ["adminProfile", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    const form = e.target;
    const profilePic = form.profilePic.files[0];
    const name = form["profile-name"].value;
    const phoneNumber = form.phoneNumber.value;
    let imgURL = user.photoURL;

    const formData = new FormData();
    formData.append("image", profilePic);

    if (profilePic) {
      const res = await axiosPublic.post(imageUpload, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      imgURL = res.data.data.display_url;
    }

    const data = {
      imgURL,
      name,
      phoneNumber,
    };

    updateUserNameAndPhoto(user, name, imgURL)
      .then(() => {
        axiosPublic
          .patch(`/users/${user.email}`, data)
          .then(() => {
            toast.success("Profile updated successfully");
            setIsUpdating(false);
            refetch();
          })
          .catch((error) => {
            console.error("Error updating photo: ", error);
            toast.error("Updating failed");
            setIsUpdating(false);
          });
      })
      .catch((error) => {
        console.error("Error updating photo: ", error);
        setIsUpdating(false);
        toast.error("Updating failed");
      });
  };
  return (
    <div>
      <DashboardTitle title="Admin Profile" />

      {isUpdating && <LoadingModal text={"Updating profile..."}></LoadingModal>}

      {isProfileLoading || userLoading ? (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
          {/* Profile Picture Section */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="flex flex-col items-start gap-4">
              <div className="h-24 w-24 rounded-full bg-gray-200 animate-pulse" />
              <div className="space-y-2 w-full">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Profile Name */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Profile Email */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Button */}
          <div className="flex justify-center py-4">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveChanges} className="max-w-2xl mx-auto p-4 space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-600 text-sm">Profile picture</label>
            <div className="flex flex-col items-start gap-4">
              {user?.photoURL ? (
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <img src={user?.photoURL} alt="Profile picture" className="size-full object-cover" />
                </div>
              ) : (
                <div className="size-24 rounded-full bg-primary-800 flex justify-center items-center">
                  <span className="text-white text-4xl">{user?.displayName?.charAt(0)}</span>
                </div>
              )}

              <div className="space-y-2 w-full">
                <label htmlFor="profilePic" className="block text-gray-600 text-sm">
                  Update profile picture
                </label>
                <input
                  type="file"
                  id="profilePic"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="profile-name" className="block text-gray-600 text-sm">
              Profile name
            </label>
            <input
              type="text"
              id="profile-name"
              name="profile-name"
              placeholder="Enter your name"
              required
              defaultValue={adminProfile.name}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="profile-email" className="block text-gray-600 text-sm">
              Profile email
            </label>
            <input
              type="text"
              id="profile-email"
              name="profile-email"
              placeholder="Your email"
              defaultValue={adminProfile.email}
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-gray-600 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your Phone Number"
              defaultValue={adminProfile.phoneNumber}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-center py-4">
            <button className="px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-all">Save changes</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminProfile;
