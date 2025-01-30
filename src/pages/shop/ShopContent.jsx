import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdGridView } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ShopContent = () => {
  const [viewMode, setViewMode] = useState("card");
  const axiosPublic = useAxiosPublic();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto ">
      <div className=" flex items-center justify-between gap-x-5">
        <div className="flex items-center gap-x-5">
          <button
            onClick={() => setViewMode("card")}
            className={`${
              viewMode === "card"
                ? "border-primary-800/50 text-[#333330]"
                : "text-[#797975]"
            } p-3 rounded-md border border-gray-100`}
          >
            <MdGridView className="" size={20}></MdGridView>
          </button>
          <button
            onClick={() => setViewMode("landscape")}
            className={`${
              viewMode === "landscape"
                ? "border-primary-800/50 text-[#1c1c1a]"
                : "text-[#797975]"
            } p-3 rounded-md border border-gray-100`}
          >
            <HiMiniBars3 className="" size={20}></HiMiniBars3>
          </button>
          <p className="ml-3">Showing 1–6 of 8 results</p>
        </div>
        <div className="">
          <select
            className="py-2 px-2 outline-none border border-gray-100 shadow-box text-[#656561]"
            name=""
            id=""
          >
            <option defaultValue={"default-sorting"} value="">
              Default Sorting
            </option>
            <option value="popularity">Sorting by popularity</option>
            <option value="rating">Sorting by average rating</option>
            <option value="latest">Sorting by latest</option>
            <option value="price-low-high">Sorting by price:low to high</option>
            <option value="price-high-low">Sorting by price:high to low</option>
          </select>
        </div>
      </div>
      {/* Content section */}
      <div className="mt-12">
        {/* card section */}
        {viewMode === "card" && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8">
            {products.map((item, i) => (
              <div key={i} className="">
                <div className="group group ">
                  <div className="relative overflow-hidden ">
                    <div className="relative  bg-gray-50 py-12 px-14 flex flex-col justify-center items-center">
                      <img
                        className="group-hover:scale-105 transition duration-500 shadow-pic"
                        src={item.pic}
                        alt=""
                      />
                      <p className="absolute top-3 left-3 bg-primary-700/80 text-white text-[15px] font-semibold  px-[12px]">
                        {item.discount}%
                      </p>
                    </div>
                    <div className=" w-full transition-all duration-500   absolute   -bottom-12 group-hover:bottom-4">
                      <Link to={`/shop-details/${item._id}`}>
                        <button className="w-11/12 mx-auto hover:bg-primary-800  py-2 px-3  font-semibold bg-[#319C9A] flex justify-center items-center  text-primary-800 border border-primary-800 transition duration-500 group-hover:text-white">
                          <span>View Details</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link to={"#"}>
                      <p className="text-lg text-[#656561] text-center hover:text-primary-700 transition duration-300">
                        {item.category}
                      </p>
                    </Link>
                    <Link to={`/shop-details/${item._id}`} className="">
                      <h2 className="text-xl md:text-[22px]  by-1  text-center font-semibold hover:text-primary-700 transition duration-300">
                        {item.name}
                      </h2>
                    </Link>
                    <p className="text-lx text-center text-[#656561]">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* landscape section */}
        <div>
          {viewMode === "landscape" && (
            <div className="grid grid-cols-1  gap-y-8">
              {products.map((item, i) => (
                <div key={i} className="">
                  <div className=" bg-gray-50 py-6 md:py-12 px-8 md:px-14 flex flex-col md:flex-row md:justify-center  gap-10">
                    <div className="w-full  md:w-1/4 sm:py-6 md:py-0 sm:px-8 md:px-0">
                      <img className="  shadow-pic" src={item.pic} alt="" />
                    </div>
                    <div className="w-full md:w-3/4">
                      <div className="flex justify-between items-center">
                        <Link to={"#"}>
                          <p className="text-lg text-[#656561] text-center hover:text-primary-700 transition duration-300">
                            {item.category}
                          </p>
                        </Link>
                        <p className=" bg-primary-700/80 text-white text-[15px] font-semibold  px-[12px]">
                          {item.discount}%
                        </p>
                      </div>
                      <div>
                        <Link to={`/shop-details/${item._id}`} className="">
                          <h2 className="text-xl md:text-[22px] by-1 font-semibold hover:text-primary-700 transition duration-300">
                            {item.name}
                          </h2>
                        </Link>

                        <p className="text-[16px]  text-[#656561] py-3">
                          {item.desc.slice(0, 200)}...
                        </p>
                        <p className="text-2xl  text-[#656561] pt-3 pb-2">
                          ${item.price}
                        </p>
                        <Link to={`/shop-details/${item._id}`}>
                          <button className=" hover:bg-primary-800  py-2  px-8  font-semibold bg-[#319C9A] flex justify-center items-center  border border-primary-800 transition duration-500 text-white">
                            <span>View Details</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
