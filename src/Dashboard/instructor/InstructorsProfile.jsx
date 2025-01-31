import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";

const InstructorsProfile = () => {
  const axiosPublic = useAxiosPublic();
  const [isPhotoSynced, setIsPhotoSynced] = useState(false);
  const { user, updateUserNameAndPhoto } = useAuth();
  const [loading, setLoading] = useState(false);
  const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`;

  const {
    data: instructorProfile = {},
    refetch,
    isLoading: isInstructorProfileLoading,
  } = useQuery({
    queryKey: ["instructorProfile", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/instructors?email=${user?.email}`);
      return res.data;
    },
  });

  const updateProfile = () => {
    setLoading(true);
    updateUserNameAndPhoto(user, instructorProfile.name, instructorProfile.img)
      .then(() => {
        setIsPhotoSynced(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error updating photo: ", error);
        setLoading(false);
      });
  };

  // Move the photo sync check into useEffect
  useEffect(() => {
    if (user?.displayName === instructorProfile?.name || user?.photoURL === instructorProfile?.img) {
      setIsPhotoSynced(true);
    } else {
      setIsPhotoSynced(false);
      updateProfile();
    }
  }, [user?.photoURL, instructorProfile?.img, instructorProfile]);

  useEffect(() => {
    setTimeout(() => {
      updateProfile();
    }, 1000);
  }, []);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setLoading(true);
    const currentProfilePic = e.target["profilePic"].files[0];
    const profileName = e.target["profile-name"].value;
    const designation = e.target["designation"].value;
    const address = e.target["address"].value;
    const phoneNumber = e.target["phoneNumber"].value;
    const bio = e.target["bio"].value;

    const formData = new FormData();
    formData.append("image", currentProfilePic);

    const res = await axios.post(imageUpload, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const img = res.data.data.display_url;

    const data = {
      img,
      name: profileName,
      designation,
      address,
      phoneNumber,
      bio,
    };

    console.log(data);

    if (res.data.data.display_url) {
      console.log(data);
      updateUserNameAndPhoto(user, profileName, img)
        .then(() => {
          axiosPublic
            .patch(`/instructor/${instructorProfile.email}`, data)
            .then(() => {
              toast.success("Profile updated successfully");
              setLoading(false);
              refetch();
            })
            .catch((error) => {
              console.error("Error updating photo: ", error);
              toast.error("Updating failed");
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("Error updating photo: ", error);
          setLoading(false);
          toast.error("Updating failed");
        });
    }
  };

  return (
    <div>
      <DashboardTitle title="Instructor Profile" />

      {isInstructorProfileLoading || loading ? (
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

          {/* University ID */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Designation */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-24 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Button */}
          <div className="flex justify-center py-4">
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveChanges} className="max-w-2xl mx-auto p-4 space-y-6">
          {isPhotoSynced ? (
            <div className="space-y-2">
              <label className="block text-gray-600 text-sm">Profile picture</label>
              <div className="flex flex-col items-start gap-4">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <img src={user?.photoURL} alt="Profile picture" className="size-full object-cover" />
                </div>

                <div className="space-y-2 w-full">
                  <label htmlFor="profilePic" className="block text-gray-600 text-sm">
                    Update profile picture
                  </label>
                  <input
                    type="file"
                    id="profilePic"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="size-24 flex justify-center items-center">
              <span className="animate-spin">
                <FaSpinner className="text-gray-500" />
              </span>
            </div>
          )}

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
              defaultValue={instructorProfile.name}
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
              defaultValue={instructorProfile.email}
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-600
            disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="universityId" className="block text-gray-600 text-sm">
              University ID
            </label>
            <input
              type="text"
              id="universityId"
              name="universityId"
              placeholder="Your university id"
              defaultValue={instructorProfile.universityId}
              disabled
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-600
            disabled:cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="block text-gray-600 text-sm">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Your designation"
              required
              defaultValue={instructorProfile.designation}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-gray-600 text-sm">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your address"
              required
              defaultValue={instructorProfile.address}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              required
              defaultValue={instructorProfile.phoneNumber}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bio" className="block text-gray-600 text-sm">
              About you
            </label>
            <textarea
              id="bio"
              name="bio"
              defaultValue={instructorProfile.bio}
              placeholder="Your bio"
              required
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-none"
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

export default InstructorsProfile;
