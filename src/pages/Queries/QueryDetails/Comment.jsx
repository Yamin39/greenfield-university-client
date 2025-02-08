import { formatDistanceToNow } from "date-fns";
import { Heart, Reply, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

/* eslint-disable react/prop-types */
const Comment = ({ comment, query, refetch }) => {
  const { user } = useAuth();
  const isLiked = comment.likes.includes(user.email);
  const [showReply, setShowReply] = useState(false);
  const [showNestedReply, setShowNestedReply] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleDeleteComment = () => {
    console.log(comment._id);

    axiosPublic
      .patch(`/query/comment/remove/${query._id}`, { commentId: comment._id })
      .then((res) => {
        console.log(res);
        toast.success("Comment deleted");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete comment");
      });
  };

  const handleLikeComment = () => {
    console.log(user.email, comment._id);

    // check if user has already upvoted
    if (comment.likes.includes(user.email)) {
      axiosPublic
        .patch(`/query/comment/like/remove/${query._id}`, { commentId: comment._id, email: user.email })
        .then((res) => {
          console.log(res.data);
          refetch();
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    axiosPublic
      .patch(`/query/comment/like/add/${query._id}`, { commentId: comment._id, email: user.email })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReply = (e) => {
    e.preventDefault();
    const form = e.target;
    const reply = {
      author: {
        name: user.displayName,
        avatar: user.photoURL,
        email: user.email,
      },
      content: form.reply.value,
      timestamp: new Date().getTime(),
      likes: [],
    };

    console.log(reply);

    axiosPublic
      .patch(`/query/comment/reply/add/${query._id}`, { commentId: comment._id, reply })
      .then((res) => {
        console.log(res);
        toast.success("Reply posted");
        refetch();
        form.reset();
        setShowReply(false);
        setShowNestedReply(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to post reply");
      });
  };

  const handleDeleteReply = (replyId) => {
    console.log(replyId);

    axiosPublic
      .patch(`/query/comment/reply/remove/${query._id}`, { commentId: comment._id, replyId })
      .then((res) => {
        console.log(res);
        toast.success("Reply deleted");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete reply");
      });
  };

  const handleLikeReply = (replyId) => {
    console.log(user.email, comment._id, replyId);

    axiosPublic
      .patch(`/query/comment/reply/like/add/${query._id}`, { commentId: comment._id, replyId, email: user.email })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnlikeReply = (replyId) => {
    console.log(user.email, comment._id, replyId);

    axiosPublic
      .patch(`/query/comment/reply/like/remove/${query._id}`, { commentId: comment._id, replyId, email: user.email })
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4">
        <img src={comment.author.avatar} alt={comment.author.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium">{comment.author.name}</h4>
                <p className="text-sm text-gray-500">{formatDistanceToNow(new Date(comment.timestamp), { addSuffix: true })}</p>
              </div>
              {user.email === comment.author.email && (
                <button onClick={handleDeleteComment} className="p-1 hover:bg-gray-200 rounded-full transition-opacity">
                  <Trash2 className="w-5 h-5 text-gray-500" />
                </button>
              )}
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>

          <div className="flex items-center space-x-4 mt-2 ml-2">
            <button
              onClick={() => {
                handleLikeComment();
              }}
              className={`flex items-center space-x-1 text-sm ${isLiked ? "text-red-500" : "text-gray-500"}`}
            >
              <Heart className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} />
              <span>{comment.likes.length}</span>
            </button>
            <button onClick={() => setShowReply(!showReply)} className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700">
              <Reply className="w-4 h-4" />
              <span>Reply</span>
            </button>
          </div>

          {showReply && (
            <form onSubmit={handleReply} className="mt-4 flex space-x-3">
              <img src={user.photoURL} alt="Current user" className="w-8 h-8 rounded-full object-cover" />
              <div className="flex-1">
                <textarea
                  className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-700/50 focus:outline-none resize-none"
                  placeholder="Write a reply..."
                  rows={2}
                  name="reply"
                  required
                />
                <div className="mt-2 flex justify-end space-x-2">
                  <button onClick={() => setShowReply(false)} className="px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                    Cancel
                  </button>
                  <button className="px-4 py-1.5 text-sm bg-primary-700 text-white rounded-lg hover:bg-primary-800">Reply</button>
                </div>
              </div>
            </form>
          )}

          {/* Nested Replies */}
          {comment.replies && (
            <div className="ml-6 mt-4 space-y-4">
              {comment.replies.map((reply, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4">
                  <img src={reply.author.avatar} alt={reply.author.name} className="w-8 h-8 rounded-full object-cover" />
                  <div className="w-full">
                    <div className="w-full bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{reply.author.name}</h4>
                          <p className="text-sm text-gray-500">{formatDistanceToNow(new Date(reply.timestamp), { addSuffix: true })}</p>
                        </div>
                        {user.email === reply.author.email && (
                          <button onClick={() => handleDeleteReply(reply._id)} className="p-1 hover:bg-gray-200 rounded-full transition-opacity">
                            <Trash2 className="w-5 h-5 text-gray-500" />
                          </button>
                        )}
                      </div>
                      <p className="text-gray-700">{reply.content}</p>
                    </div>

                    <div className="flex items-center space-x-4 mt-2 ml-2">
                      <button
                        onClick={() => {
                          if (reply.likes.includes(user.email)) {
                            handleUnlikeReply(reply._id);
                          } else {
                            handleLikeReply(reply._id);
                          }
                        }}
                        className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
                      >
                        <Heart
                          className={`w-4 h-4 ${reply.likes.includes(user.email) ? "text-red-500" : "text-gray-500"}`}
                          fill={reply.likes.includes(user.email) ? "currentColor" : "none"}
                        />
                        <span>{reply.likes.length}</span>
                      </button>

                      <button
                        onClick={() => setShowNestedReply(!showNestedReply)}
                        className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700"
                      >
                        <Reply className="w-4 h-4" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {showNestedReply && (
                <form onSubmit={handleReply} className="mt-4 flex space-x-3">
                  <img src={user.photoURL} alt="Current user" className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex-1">
                    <textarea
                      className="w-full p-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-700/50 focus:outline-none resize-none"
                      placeholder="Write a reply..."
                      rows={2}
                      name="reply"
                      required
                    />
                    <div className="mt-2 flex justify-end space-x-2">
                      <button onClick={() => setShowNestedReply(false)} className="px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                        Cancel
                      </button>
                      <button className="px-4 py-1.5 text-sm bg-primary-700 text-white rounded-lg hover:bg-primary-800">Reply</button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
