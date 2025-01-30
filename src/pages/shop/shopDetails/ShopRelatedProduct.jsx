import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ShopRelatedProduct = () => {
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
    <div className="mt-20">
      <h1 className="text-4xl font-semibold pb-8 text-center border-t border-gray-200 pt-20">Related Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8">
        {products.slice(0, 3).map((item, i) => (
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
                  <Link to={"/shop-details"}>
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
                <Link to={"/shop-details"} className="">
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
    </div>
  );
};

export default ShopRelatedProduct;
