import { MessageSquare, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFormatTimestamp from "../../hooks/useFormatTimestamp";
import EditQueryModal from "./EditQueryModal";

/* eslint-disable react/prop-types */
const Query = ({ query, handleDelete, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border p-6 shadow-sm ">
      <span className="text-sm text-gray-500">{useFormatTimestamp(query.timestamp)}</span>
      <h2 className="mt-2 text-lg font-semibold">{query.title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {query.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-sm bg-primary-700/5 text-primary-800 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between sm:items-center sm:space-x-6">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center space-x-2 p-2 rounded-lg transition-colors text-gray-600`}>
            <button className="p-2 cursor-auto rounded-full">
              <ThumbsUp className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-gray-600">{query.upVotes.length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 cursor-auto rounded-full">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-gray-600">{query.comments.length}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to={`/query-details/${query._id}`} className="px-4 py-2 text-sm text-white bg-black rounded-lg hover:bg-gray-800">
            View
          </Link>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="px-4 py-2 text-sm text-white bg-primary-700 rounded-lg hover:bg-primary-800"
          >
            Edit
          </button>
          <button onClick={() => handleDelete(query._id)} className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
      {isModalOpen && <EditQueryModal query={query} setIsModalOpen={setIsModalOpen} refetch={refetch}></EditQueryModal>}
    </div>
  );
};

export default Query;
