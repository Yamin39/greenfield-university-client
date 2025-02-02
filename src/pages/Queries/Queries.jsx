import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight, MessageSquare, ThumbsUp } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import LoadingModal from "../../components/LoadingModal";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useRole from "../../hooks/useRole";
import SharedBanner from "../../shared/SharedBanner";

const Queries = () => {
  const [isQueryPosting, setIsQueryPosting] = useState(false);
  const { user, loading } = useAuth();
  const role = useRole(user?.email);
  const axiosPublic = useAxiosPublic();
  const tagRef = useRef(null);
  const [tags, setTags] = useState([]);

  // get queries
  const {
    data: queries = [],
    refetch,
    isLoading: isQueryLoading,
  } = useQuery({
    queryKey: ["queries"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/queries`);
      return res.data;
    },
  });
  console.log(queries);

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

  // post query
  const handlePostQuery = (e) => {
    e.preventDefault();
    setIsQueryPosting(true);

    // check if tags are empty
    if (!tags.length) {
      setIsQueryPosting(false);
      return toast.error("Please add at least one tag");
    }

    // create query object
    const query = {
      title: e.target.title.value,
      author: {
        name: user.displayName,
        avatar: user.photoURL,
        email: user.email,
      },
      tags: tags,
      upVotes: [],
      comments: [],
      timestamp: new Date().getTime(),
    };

    console.log(query);

    // post query
    axiosPublic
      .post("/query", query)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Query posted successfully");
          e.target.reset();
          setTags([]);
          refetch();
          setIsQueryPosting(false);
        } else {
          toast.error("Failed to post query");
          setIsQueryPosting(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to post query");
        setIsQueryPosting(false);
      });
  };

  const handleUpVote = (query) => {
    if (!user) {
      toast.error("Please login to upvote");
      return;
    }
    console.log(user.email, query._id);

    // check if user has already upvoted
    if (query.upVotes.includes(user.email)) {
      axiosPublic
        .patch(`/query/upvote/remove/${query._id}`, { email: user.email })
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
      .patch(`/query/upvote/add/${query._id}`, { email: user.email })
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
      <SharedBanner title="Queries" />

      {isQueryPosting && <LoadingModal text={"Posting query..."} />}

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* New Query Section */}

        {loading ? (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start space-x-4">
              {/* Avatar skeleton */}
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

              <div className="flex-1">
                {/* Textarea skeleton */}
                <div className="w-full h-[108px] bg-gray-200 rounded-lg animate-pulse" />

                <div className="mt-3 flex justify-between items-center">
                  {/* Tags skeleton */}
                  <div className="flex gap-3">
                    {/* Simulating 3 tags */}
                    <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse" />
                    <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
                    <div className="w-14 h-6 bg-gray-200 rounded-full animate-pulse" />

                    {/* Tag input skeleton */}
                    <div className="w-24 h-6 bg-gray-200 rounded-full animate-pulse" />

                    {/* Add tag button skeleton */}
                    <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse" />
                  </div>

                  {/* Post button skeleton */}
                  <div className="min-w-[127px] h-10 bg-gray-200 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {role === "student" ? (
              <form onSubmit={handlePostQuery} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img src={user.photoURL} alt="User avatar" className="w-10 h-10 rounded-full" />
                  <div className="w-full sm:w-auto sm:flex-1">
                    <textarea
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-700 focus:outline-none resize-none"
                      placeholder="What's on your mind? Share your question..."
                      rows={3}
                      name="title"
                      required
                    />
                    <div className="mt-3 flex flex-col sm:flex-row justify-between sm:items-center gap-y-4 ">
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
                        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2">
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
                      <button className="min-w-[127px] block px-6 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors">
                        Post Query
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="bg-white rounded-xl border shadow-sm p-6">
                <h2 className="text-lg font-semibold">Only students can post queries</h2>
              </div>
            )}
          </>
        )}

        {/* Queries List */}
        <div className="space-y-4">
          {isQueryLoading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    {/* Avatar skeleton */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

                    <div className="flex-1">
                      {/* Author info skeleton */}
                      <div className="flex items-center space-x-2">
                        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                      </div>

                      {/* Title skeleton */}
                      <div className="mt-2 h-7 w-3/4 bg-gray-200 rounded animate-pulse" />

                      {/* Tags skeleton */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
                        <div className="h-6 w-14 bg-gray-200 rounded-full animate-pulse" />
                      </div>

                      {/* Interaction buttons skeleton */}
                      <div className="mt-4 flex items-center space-x-6">
                        {/* Upvotes */}
                        <div className="flex items-center space-x-2">
                          <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse" />
                          <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* Comments */}
                        <div className="flex items-center space-x-2">
                          <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse" />
                          <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                        </div>

                        {/* View discussion link */}
                        <div className="ml-auto w-28 h-6 bg-gray-200 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {queries.map((query) => (
                <div key={query._id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <img src={query.author.avatar} alt={query.author.name} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{query.author.name}</h3>
                        <span className="text-sm text-gray-500">• {formatDistanceToNow(new Date(query.timestamp), { addSuffix: true })}</span>
                      </div>
                      <h2 className="mt-2 text-lg font-semibold">{query.title}</h2>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {query.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-sm bg-primary-700/5 text-primary-800 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap sm:flex-nowrap items-center space-x-6">
                        <div
                          className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                            query.upVotes.includes(user?.email) ? "bg-primary-700/5" : "text-gray-600"
                          }`}
                        >
                          <button onClick={() => handleUpVote(query)} className="p-2 hover:bg-gray-100 rounded-full">
                            {query.upVotes.includes(user?.email) ? (
                              <ThumbsUp className="w-5 h-5 text-primary-700" />
                            ) : (
                              <ThumbsUp className="w-5 h-5 text-gray-600" />
                            )}
                          </button>
                          <span className="text-gray-600">{query.upVotes.length}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 cursor-auto rounded-full">
                            <MessageSquare className="w-5 h-5 text-gray-600" />
                          </button>
                          <span className="text-gray-600">{query.comments.length}</span>
                        </div>
                        <Link to={`/query-details/${query._id}`} className="ml-auto flex items-center text-primary-700 hover:text-primary-800">
                          View discussion
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Queries;
