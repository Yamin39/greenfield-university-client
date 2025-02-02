/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdCloseCircle } from "react-icons/io";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const EditQueryModal = ({ query, setIsModalOpen, refetch }) => {
  const tagRef = useRef(null);
  const [tags, setTags] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    setTags(query.tags);
  }, [query.tags]);

  // store tags
  const handleStoreTags = () => {
    const tag = tagRef.current.value;

    // check if tag is empty
    if (!tag) return;

    // check if tag already exists
    if (tags.includes(tag)) {
      return toast.error("Tag already added");
    }

    // store tag
    setTags([...tags, tag]);

    // clear input
    tagRef.current.value = "";
  };

  const handleUpdateQuery = (e) => {
    e.preventDefault();

    const title = e.target.title.value;

    if (!title) {
      return toast.error("Title is required");
    }

    if (tags.length === 0) {
      return toast.error("At least one tag is required");
    }

    axiosPublic
      .patch(`/query/${query._id}`, { title, tags })
      .then(() => {
        toast.success("Query updated successfully");
        setIsModalOpen(false);
        refetch();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update query");
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg animate-in fade-in zoom-in duration-200">
        <form onSubmit={handleUpdateQuery} className="bg-white rounded-xl shadow-sm p-8 max-w-xl w-full">
          <div className="flex">
            <div className="flex-1">
              <textarea
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-700 focus:outline-none resize-none"
                placeholder="What's on your mind? Share your question..."
                rows={3}
                defaultValue={query.title}
                name="title"
                required
              />
              <div className="mt-3 flex flex-col justify-between gap-y-4 ">
                <div className="flex gap-3 flex-wrap">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-primary-700/5 text-primary-800 rounded-full flex justify-center items-center gap-1">
                      #{tag}
                      <button
                        type="button"
                        onClick={() => setTags(tags.filter((t) => t !== tag))}
                        className="ml-1 text-sm 
                                text-red-500 hover:text-red-600 focus:outline-none"
                      >
                        <IoMdCloseCircle />
                      </button>
                    </span>
                  ))}
                  <div className="flex flex-wrap items-center gap-2">
                    <input
                      type="text"
                      ref={tagRef}
                      placeholder="Enter tag"
                      className="px-3 py-1 text-sm text-gray-600 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary-700 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleStoreTags}
                      className="px-3 py-1 text-sm text-gray-600 border border-gray-200 rounded-full hover:bg-gray-50"
                    >
                      Add Tag
                    </button>
                  </div>
                </div>

                <div className="flex w-full justify-center items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-1/2 block px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>

                  <button className="w-1/2 block px-6 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors">Save</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditQueryModal;
