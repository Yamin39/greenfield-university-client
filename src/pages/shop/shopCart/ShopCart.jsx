import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SharedBanner from "../../../shared/SharedBanner";
import CartData from "./CartData";

const ShopCart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [total, setTotal] = useState(0);

  const {
    data: cartData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  // set total
  const setTotalPrice = () => {
    let total = 0;
    cartData.map((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    setTotalPrice();
  }, [cartData]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen    w-full bg-white">Loading...</div>;
  }
  return (
    <div className="bg-[#FFFFFF]">
      <SharedBanner title={"Cart"}></SharedBanner>

      <div className="max-w-7xl mx-auto py-12 px-3 mt-24">
        <div className=" grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 lg:justify-between  gap-5">
          <div className="lg:col-span-3 h-auto w-full   bg-white ">
            {cartData.length ? (
              <div className="container  mx-auto p-2 sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full text-[14px]">
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="" />
                    </colgroup>
                    <thead className="dark:bg-gray-300 ">
                      <tr className="text-left bg-primary-700/10 ">
                        <th className="p-3 ">Thumbnail</th>
                        <th className="p-3 ">Product</th>
                        <th className="p-3 ">Price</th>
                        <th className="p-3 ">Quantity</th>
                        <th className="p-3 ">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, i) => (
                        <CartData key={i} item={item} refetch={refetch}></CartData>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-center items-center relative">
                  <img className="max-w-[400px]" src="https://i.ibb.co.com/7G91cmr/Error.jpg" alt="pic" />
                  <p className="text-3xl  absolute bottom-0 mx-auto font-bold text-[#FF735E] text-center bg-primary-700/10 py-2 px-6 rounded-lg ">
                    Data is not found
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-1  p-2 sm:p-4">
            <div className="w-full sm:max-w-[400px] lg:w-full bg-white shadow-box py-12 px-8">
              <h1 className="text-xl font-semibold pb-4">Cart totals</h1>
              <div className="border-y border-gray-200 space-y-6">
                <p className="flex  items-center text-[15px] py-4 ">
                  <span className="w-1/2 text-lg font-semibold">Total</span>
                  <span className="w-1/2 ">${total}</span>
                </p>
              </div>
              <div className="mt-6">
                <button className="py-[10px] w-full px-6 border bg-primary-700 hover:bg-primary-800 transition duration-300 text-white">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
