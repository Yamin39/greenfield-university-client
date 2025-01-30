/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { IoMdStar } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import reviewer from "../../../assets/icons/commenter.png";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useFormatTimestamp from "../../../hooks/useFormatTimestamp";

const DescReview = ({ product, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const ratingData = {
    averageRating: product?.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length,
    totalRatings: product?.reviews.length,
    allRatings: [
      {
        rating: 5,
        count: product?.reviews.filter((review) => review.rating === 5).length,
        percentage: (product?.reviews.filter((review) => review.rating === 5).length / product.reviews.length) * 100,
      },
      {
        rating: 4,
        count: product?.reviews.filter((review) => review.rating === 4).length,
        percentage: (product?.reviews.filter((review) => review.rating === 4).length / product.reviews.length) * 100,
      },
      {
        rating: 3,
        count: product?.reviews.filter((review) => review.rating === 3).length,
        percentage: (product?.reviews.filter((review) => review.rating === 3).length / product.reviews.length) * 100,
      },
      {
        rating: 2,
        count: product?.reviews.filter((review) => review.rating === 2).length,
        percentage: (product?.reviews.filter((review) => review.rating === 2).length / product.reviews.length) * 100,
      },
      {
        rating: 1,
        count: product?.reviews.filter((review) => review.rating === 1).length,
        percentage: (product?.reviews.filter((review) => review.rating === 1).length / product.reviews.length) * 100,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const rating = form.rating.value;
    const desc = form.desc.value;
    const timestamp = new Date().getTime();
    const newReview = {
      name,
      email,
      rating: parseInt(rating),
      desc,
      timestamp,
    };
    console.log(newReview);

    axiosPublic
      .patch(`/product/${product._id}/review`, newReview)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Review added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add the review. Please try again.");
        }
        refetch();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
      });
  };

  const formatTimestamp = useFormatTimestamp;
  return (
    <div className="max-w-7xl mx-auto bg-[#FFFFFF]  mt-28 mb-10 px-5">
      <div>
        <div className="mt-12">
          <Tabs>
            <TabList className={"flex justify-center border-b border-gray-100"}>
              <Tab>
                <span
                  className={
                    "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                  }
                >
                  Description
                </span>
              </Tab>
              <Tab>
                <span
                  className={
                    "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                  }
                >
                  Reviews ({product.reviews.length})
                </span>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="mt-10">
                <h1 className="text-3xl font-semibold">Description</h1>
                <p className="text-[#888888] text-lg my-3">{product.desc}</p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-10">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-x-20">
                  <div className="lg:w-1/2  ">
                    <div className="sm:w-[380px] md:w-[425px] border border-gray-200 p-8">
                      <h2 className="my-2 ">
                        <span className="text-xl font-semibold px-2 pb-2  text-[#161613] ">Customer reviews</span>
                      </h2>
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-3xl md:text-4xl font-semibold">{ratingData?.averageRating?.toFixed(1)}</span>
                        <div className="flex items-center mt">
                          {ratingData?.averageRating === 0 ? (
                            <p className="text-[16px] text-[#ACAEB0]">No rating yet</p>
                          ) : (
                            Array.from({ length: ratingData?.averageRating.toFixed(0) }).map((_, i) => (
                              <IoMdStar
                                key={i}
                                size={18}
                                className={`text-[#F8B81F] ${i < ratingData?.averageRating ? "text-[#F8B81F]" : "text-gray-300"}`}
                              ></IoMdStar>
                            ))
                          )}
                          <p className="text-[16px] text-[#57595F] pl-2">({product.reviews.length} Review)</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        {ratingData.allRatings.map((rating, index) => (
                          <div key={index} className="flex items-center gap-x-2 gap-y-4">
                            <p className=" text-[16px] text-[#ACAEB0]">{rating.rating} Star</p>
                            <span className="flex-1 text-[16px] bg-[#EDEEEE] h-3 rounded-sm">
                              <span className="block h-full bg-[#F8B81F]" style={{ width: `${rating.percentage}%` }}></span>
                            </span>
                            <p className=" text-[16px] text-[#ACAEB0] ml-[2px]">{rating.percentage.toFixed(0)}%</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-12">
                      <h2 className="text-2xl font-medium">Reviews</h2>

                      <div className="mt-3">
                        {product.reviews.length === 0 ? (
                          <p className="text-[16px] text-[#ACAEB0]">No reviews yet</p>
                        ) : (
                          product.reviews.map((review, index) => (
                            <div key={index} className="border border-gray-200 p-4 mt-4 flex gap-5">
                              <div className="hidden sm:block min-w-[60px]">
                                <img src={reviewer} className="size-[60px]" alt="Reviewer" />
                              </div>

                              <div>
                                <div className="flex items-center gap-0.5">
                                  {Array.from({ length: review.rating }).map((_, i) => (
                                    <IoMdStar
                                      key={i}
                                      size={18}
                                      className={`text-[#F8B81F] ${i < ratingData?.averageRating ? "text-[#F8B81F]" : "text-gray-300"}`}
                                    ></IoMdStar>
                                  ))}
                                </div>

                                <div className="mt-1 mb-2 flex flex-col sm:flex-row sm:items-center gap-2">
                                  <h5 className="font-medium">{review.name}</h5>
                                  <span className="hidden sm:block size-1.5 bg-gray-400 rounded-full"></span>
                                  <p className="text-sm text-[#57595f]">{formatTimestamp(review.timestamp)}</p>
                                </div>

                                <p className="text-sm text-[#57595f]">{review.desc}</p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                  {/* form */}
                  <div className="lg:w-1/2 ">
                    <h2 className="text-xl md:text-2xl font-bold">Be the first to review “Emelie Schepp Vita”</h2>
                    <p className="text-[16px] text-[#888888]">
                      Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                    </p>
                    <div className="w-full  mt-6 md:mt-10">
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full border border-gray-200/80 py-3 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 px-3 rounded-[3px]"
                            type="text"
                            name="name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full border border-gray-200/80 py-3 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 px-3 rounded-[3px]"
                            type="email"
                            name="email"
                            required
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-4">
                            <p className="text-[16px]">
                              Select a rating <span className="text-red-500">*</span>
                            </p>
                            <select
                              name="rating"
                              className="border border-gray-200/80 px-2.5 py-1.5 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 rounded-2xl cursor-pointer"
                              required
                            >
                              <option value="" defaultChecked>
                                Choose
                              </option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="">
                            Your review <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="desc"
                            className="w-full border border-gray-200/80 py-3 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 px-3 rounded-[3px]"
                            cols={50}
                            rows={6}
                            required
                          ></textarea>
                        </div>

                        <input
                          className="rounded-[3px] py-3 px-6 font-semibold hover:bg-primary-800 flex justify-center items-center  text-primary-800 text-lg border hover:border-primary-800 border-primary-800/50  bg-primary-800/5 transition duration-500 hover:text-white cursor-pointer"
                          type="submit"
                          value="Submit Review"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DescReview;
