import { FaLock, FaClock, FaUser, FaGraduationCap } from 'react-icons/fa';
import DashboardTitle from '../DashboardTitle';
import { useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import { toast } from 'react-hot-toast'
import axios from 'axios'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { MdOutlineMailOutline } from 'react-icons/md';
const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

const AddCourse = () => {
   const [loading, setLoading] = useState(false)
   const axiosPublic = useAxiosPublic()
   const { user } = useAuth();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      setLoading(true)



      const currentPhoto = form.image_url?.files?.[0];

      if (!currentPhoto) {
         toast.error("Please upload a photo");
         setLoading(false);
         return;
      }

      const formData = new FormData();
      formData.append("image", currentPhoto);

      try {
         const res = await axios.post(imageUpload, formData, {
            headers: { "Content-Type": "multipart/form-data" }
         });

         const image_url = res.data.data.display_url;
         const reviews = []


         const courseData = {
            category: form.category.value,
            title: form.title.value,
            description: form.description.value,
            image_url,
            whatYouLearn: [
               form.learn1.value,
               form.learn2.value,
               form.learn3.value,
               form.learn4.value,
               form.learn5.value
            ],
            curriculum: [
               {
                  section: form.section1.value,
                  lessons: [
                     {
                        title: form.lesson1_1.value,
                        duration: form.duration1_1.value,
                        locked: form.locked1_1.checked
                     },
                     {
                        title: form.lesson1_2.value,
                        duration: form.duration1_2.value,
                        locked: form.locked1_2.checked
                     }
                  ]
               },
               {
                  section: form.section2.value,
                  lessons: [
                     {
                        title: form.lesson2_1.value,
                        duration: form.duration2_1.value,
                        locked: form.locked2_1.checked
                     },
                     {
                        title: form.lesson2_2.value,
                        duration: form.duration2_2.value,
                        locked: form.locked2_2.checked
                     }
                  ]
               }
            ],
            instructorDetails: {
               name: form.instructor_name.value,
               designation: form.instructor_designation.value,
               email: form.instructor_email.value,
               img: user?.photoURL,
               bio: form.instructor_bio.value
            },
            reviews            
         };

         const { data } = await axiosPublic.post('/course', courseData)
         if (data.insertedId) {
            console.log(data);
            toast.success('Course has been uploaded.')
            form.reset()
            setLoading(false)

         }

      } catch (error) {
         console.error("Image upload failed:", error);
         toast.error("Image upload failed!");
      }

   };

   return (
      <div className='mb-12'>
         <DashboardTitle title="Add Course" />
         <div className="max-w-4xl mx-auto border">
            <div className="bg-white rounded-lg shadow-lg p-8">

               <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Course Information */}
                  <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-gray-700">Basic Information</h3>
                     <div className="space-y-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                           <input
                              type="text"
                              name="category"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                              required
                           />
                        </div>

                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                           <input
                              type="text"
                              name="title"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                              required
                           />
                        </div>

                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                           <textarea
                              name="description"
                              rows="3"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                              required
                           />
                        </div>

                        {/* image file  */}

                        <div className="relative">
                           <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                           <div className="relative">
                              <input
                                 type="file"
                                 name="image_url"
                                 className="w-full  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 file:p-2 file:border-none cursor-pointer file:cursor-pointer"
                                 required
                              />

                           </div>
                        </div>
                     </div>
                  </div>

                  {/* What You'll Learn */}
                  <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <FaGraduationCap className="text-primary-700" />
                        What You'll Learn
                     </h3>
                     {[1, 2, 3, 4, 5].map((num) => (
                        <input
                           key={num}
                           type="text"
                           name={`learn${num}`}
                           placeholder={`Learning Point ${num}`}
                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                           required
                        />
                     ))}
                  </div>

                  {/* Curriculum */}
                  <div className="space-y-6">
                     <h3 className="text-lg font-semibold text-gray-700">Curriculum</h3>

                     {/* Section 1 */}
                     <div className="p-6 border border-gray-200 rounded-lg space-y-4 bg-gray-50">
                        <input
                           type="text"
                           name="section1"
                           placeholder="Section 1 Title"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 bg-white"
                           required
                        />

                        {[1, 2].map((lessonNum) => (
                           <div key={lessonNum} className="flex flex-wrap gap-4">
                              <div className="flex-1">
                                 <input
                                    type="text"
                                    name={`lesson1_${lessonNum}`}
                                    placeholder={`Lesson ${lessonNum} Title`}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 bg-white"
                                    required
                                 />
                              </div>
                              <div className="w-32">
                                 <div className="relative">
                                    <input
                                       type="number"
                                       name={`duration1_${lessonNum}`}
                                       placeholder="Duration"
                                       className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 bg-white"
                                       required
                                    />
                                    <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                 </div>
                              </div>
                              <label className="flex items-center gap-2 text-sm text-gray-600">
                                 <input
                                    type="checkbox"
                                    name={`locked1_${lessonNum}`}
                                    className="w-4 h-4 text-primary-700"
                                 />
                                 <span className="flex items-center gap-1">
                                    <FaLock className="text-gray-400" /> Locked
                                 </span>
                              </label>
                           </div>
                        ))}
                     </div>

                     {/* Section 2 */}
                     <div className="p-6 border border-gray-200 rounded-lg space-y-4 bg-gray-50">
                        <input
                           type="text"
                           name="section2"
                           placeholder="Section 2 Title"
                           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 bg-white"
                           required
                        />

                        {[1, 2].map((lessonNum) => (
                           <div key={lessonNum} className="flex flex-wrap gap-4">
                              <div className="flex-1">
                                 <input
                                    type="number"
                                    name={`lesson2_${lessonNum}`}
                                    placeholder={`Lesson ${lessonNum} Title`}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 bg-white"
                                    required
                                 />
                              </div>
                              <div className="w-32">
                                 <div className="relative">
                                    <input
                                       type="number"
                                       name={`duration2_${lessonNum}`}
                                       placeholder="Duration"
                                       className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700 bg-white"
                                       required
                                    />
                                    <FaClock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                 </div>
                              </div>
                              <label className="flex items-center gap-2 text-sm text-gray-600">
                                 <input
                                    type="checkbox"
                                    name={`locked2_${lessonNum}`}
                                    className="w-4 h-4 text-primary-700"
                                 />
                                 <span className="flex items-center gap-1">
                                    <FaLock className="text-gray-400" /> Locked
                                 </span>
                              </label>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Instructor Details */}
                  <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <FaUser className="text-primary-700" />
                        Instructor Details
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                           <input
                              type="text"
                              name="instructor_name"
                              defaultValue={user?.displayName}
                              placeholder="Instructor Name"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                              required
                           />
                           <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        <div className="relative">
                           <input
                              type="text"
                              name="instructor_designation"
                              placeholder="Designation"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                              required
                           />
                           <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>


                        <input
                           type="email"
                           name="instructor_email"
                           defaultValue={user?.email}
                           placeholder="Email"
                           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                           required
                        />
                        <MdOutlineMailOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                     </div>

                     <textarea
                        name="instructor_bio"
                        placeholder="Instructor Bio"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-700"
                        rows="3"
                        required
                     />
                  </div>

                  <button disabled={loading} className="bg-primary-700 text-white p-2.5 px-8 hover:bg-primary-800 w-60 ">
                     {
                        loading ? <TbFidgetSpinner className="text-2xl animate-spin mx-auto " /> : <span className="">Post Course</span>
                     }

                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddCourse;