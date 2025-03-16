import { useQuery } from "@tanstack/react-query";
import { Facebook, Linkedin, LoaderCircle, MessageSquare, MoreHorizontal, Send, Share2, ThumbsUp, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GrVimeo } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SharedBanner from "../../../shared/SharedBanner";
import Comment from "./Comment";

const QueryDetails = () => {
  const { id } = useParams();
  const { user, loading } = useAuth();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isUpVoteLoading, setIsUpVoteLoading] = useState(false);
  const [localUpvoteState, setLocalUpvoteState] = useState(null); // Track local upvote state
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  if (!loading) {
    if (!user) {
      toast.error("Please login to view this page");
      navigate("/login");
    }
  }

  const {
    data: queries = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["query", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/query/${id}`);
      return res.data;
    },
  });

  // Convert timestamp to readable date
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Update local upvote state when query data is loaded
  useEffect(() => {
    if (queries && user) {
      setLocalUpvoteState(queries.upVotes?.includes(user.email) || false);
    }
  }, [queries, user]);

  const handleUpVote = async (query) => {
    if (isUpVoteLoading) return;
    setIsUpVoteLoading(true);

    // Use our local state instead of checking the query directly
    const hasUpvoted = localUpvoteState;

    // Update local state immediately (optimistic update)
    setLocalUpvoteState(!hasUpvoted);

    try {
      if (hasUpvoted) {
        await axiosPublic.patch(`/query/upvote/remove/${query._id}`, { email: user.email });
      } else {
        await axiosPublic.patch(`/query/upvote/add/${query._id}`, { email: user.email });
      }
      // Refetch to ensure server state is synced
      refetch();
    } catch (err) {
      console.log(err);
      toast.error("Failed to update vote");
      // Revert optimistic update if API call fails
      setLocalUpvoteState(hasUpvoted);
    } finally {
      setIsUpVoteLoading(false);
    }
  };

  // Submit new comment
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const comment = {
      author: {
        name: user.displayName,
        avatar: user.photoURL,
        email: user.email,
      },
      content: e.target.comment.value,
      timestamp: new Date().getTime(),
      likes: [],
      replies: [],
    };
    console.log(comment);

    axiosPublic
      .patch(`/query/comment/add/${queries._id}`, comment)
      .then((res) => {
        console.log(res.data);
        refetch();
        toast.success("Comment added");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add comment");
      });
  };

  if (isLoading || loading) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;

  return (
    <div>
      <SharedBanner title="Query Details" />

      <div className="max-w-4xl mx-auto p-6">
        {/* Main Query Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <img src={queries.author.avatar} alt={queries.author.name} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg">{queries.author.name}</h3>
                <p className="text-gray-500 text-sm">{formatDate(queries.timestamp)}</p>
              </div>
            </div>
            <div className="relative">
              <button onClick={() => setIsMoreOpen(!isMoreOpen)} className="p-2 hover:bg-gray-100 rounded-full">
                <MoreHorizontal className="w-6 h-6 text-gray-600" />
              </button>

              {/* More options dropdown */}
              <div className={`absolute top-10 right-0 w-48 bg-white rounded-lg shadow-lg p-4 ${isMoreOpen ? "block" : "hidden"}`}>
                <button
                  onClick={() => {
                    toast.success("Report submitted");
                    setIsMoreOpen(false);
                  }}
                  className="flex w-full items-center space-x-2 p-2 rounded-lg hover:bg-gray-50"
                >
                  <span>Report</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-4">{queries.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {queries.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary-700/5 text-primary-800 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex space-x-6">
                <button
                  onClick={() => handleUpVote(queries)}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    queries.upVotes.includes(user?.email) ? "text-primary-800 bg-primary-700/5" : "text-gray-600 hover:bg-gray-50"
                  } disabled:cursor-not-allowed disabled:bg-gray-50`}
                  disabled={isUpVoteLoading}
                >
                  {isUpVoteLoading ? <LoaderCircle className="w-5 h-5 animate-spin" /> : <ThumbsUp className="w-5 h-5" />}
                  <span>{queries.upVotes.length}</span>
                </button>
                <button
                  onClick={() => document.getElementById("comment").focus()}
                  className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{queries.comments.length}</span>
                </button>
              </div>
              <div className="relative flex space-x-4">
                <button onClick={() => setIsShareOpen(!isShareOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>

                {/* share card */}
                <div className={`absolute top-10 border right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 ${isShareOpen ? "block" : "hidden"}`}>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-700 focus:outline-none"
                      value={window.location.href}
                      readOnly
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast.success("Link copied to clipboard");
                      }}
                      className="p-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 mt-4">
                    <a
                      target="_blank"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${location}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      href={`https://twitter.com/share?url=${location}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${location}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      target="_blank"
                      href={`https://vimeo.com/share?url=${location}`}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <GrVimeo className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Discussion</h2>

          {/* New Comment Input */}
          <form onSubmit={handleSubmitComment} className="flex flex-col sm:flex-row sm:items-start gap-4 mb-8">
            <img src={user.photoURL} alt="Current user" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1">
              <textarea
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-700/50 focus:outline-none resize-none"
                placeholder="Add to the discussion..."
                rows={3}
                name="comment"
                id="comment"
                required
              />
              <div className="mt-3 sm:flex justify-end">
                <button className="w-full sm:w-auto px-6 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </form>

          {/* Comments List */}
          {queries.comments.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600">No comments yet</h3>
              <p className="text-gray-500">Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {queries.comments.map((comment) => (
                <Comment key={comment._id} comment={comment} query={queries} refetch={refetch} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
