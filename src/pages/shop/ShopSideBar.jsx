import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const ShopSideBar = () => {
  const axiosPublic = useAxiosPublic();
  const [category, setCategory] = useState([]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  products.map((item) => {
    if (!category.includes(item.category)) {
      setCategory([...category, item.category]);
    }
  });

  const productCount = (category) => {
    let count = 0;
    products.map((item) => {
      if (item.category === category) {
        count++;
      }
    });
    return count;
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="">
      <div>
        <p className="text-xl md:text-2xl pb-2  text-[#353533] font-semibold border-b border-gray-200">Search</p>
        <div className="flex w-full bg-primary-700/5 mt-8 hover:focus:outline-primary-700/50 items-center gap-x-4 border  rounded-lg py-2 md:py-4 px-3 md:px-6">
          <input className="w-full outline-none bg-transparent text-lg " type="text" placeholder="Search..." />
          <IoSearch className="text-[#797975] " size={25}></IoSearch>
        </div>
        {/* Price Filter */}
        <div>
          <p className="text-xl md:text-2xl pb-2 pt-10 text-[#353533] font-semibold border-b border-gray-200">Price Filter</p>
          {/* <span></span> */}
          <div className="flex items-center justify-between my-4">
            <p className="flex items-center gap-x-2 text-primary-800">
              <span>Price: </span>
              <span className="flex items-center text-sm">
                <span>12$ --</span>
                <span> 20$</span>
              </span>
            </p>
            <button className="bg-primary-700/5 py-[2px] px-3 hover:bg-primary-700 hover:text-white transition duration-500">Filter</button>
          </div>
        </div>
        {/* Categories */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl  font-semibold border-b pb-2 border-gray-200">Categories</h2>
          <div className="grid grid-cols-1 gap-3 mt-3 md:mt-5">
            {category.map((item, index) => (
              <div key={index} className=" ">
                <Link to={"#"} className="">
                  <div className="flex justify-between group group items-center">
                    <h2 className="text-[16px]   group-hover:text-primary-700 transition duration-300 ">{item}</h2>
                    <p className="flex items-center gap-x-2 text-[#656561] group-hover:text-primary-700 transition duration-300">
                      <span>{productCount(item)}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Products */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl  font-semibold border-b pb-2 border-gray-200">Products</h2>
          <div className="h-[400px] overflow-y-auto grid grid-cols-1 gap-3 mt-3 md:mt-5">
            {products.slice(0, 6).map((item, i) => (
              <div key={i} className="">
                <div className=" flex flex-row lg:justify-between  gap-3 ">
                  <div className=" ">
                    <img className="max-w-[80px] bg-gray-50 p-2 " src={item.pic} alt="" />
                  </div>
                  <div className="flex-1">
                    <div>
                      <Link to={`/shop-details/${item._id}`} className="">
                        <h2 className="text-lg by-1 font-semibold hover:text-primary-700 transition duration-300">{item.name}</h2>
                      </Link>
                      <p className="text-[16px]  text-[#656561]">${item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSideBar;
