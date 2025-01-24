
import book1 from "../../../assets/images/book1.png";
import book2 from "../../../assets/images/book2.png";

import CartData from "./CartData";

const ShopCart = () => {
  const cartData = [
    {
      category: "Novel",
      name: " The Adventures of Huckleberry Finn",
      pic: book1,
      price: "160.00",
      discount: "-10",
      desc: "The story begins in fictional St. Petersburg, Missouri, and with a nineteenth-century boy from a River town. Throughout the book he recounts his adventures as he travels down the Mississippi river with another boy who is a runaway slave.",
    },
    {
      category: "Novel",
      name: "Great Expectations",
      pic: book2,
      price: "110.00",
      discount: "-15",
      desc: "Great Expectations is the thirteenth novel by Charles Dickens and was first published as a series of stories in Dickens`s weekly periodical from 1 December 1860 to August 1861.",
    },
  ];
  
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto py-12 px-3 mt-24">
        <div className=" grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 lg:justify-between  gap-5">
          <div className="lg:col-span-3 h-auto w-full   bg-white ">
            {cartData ? (
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
                        <th className="p-3 ">Subtotal</th>
                        {/* <th className="p-3 ">Remove</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((item, i) => (
                        <CartData key={i} item={item} ></CartData>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Coupon */}
                <div className="mt-10 pt-10 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
                    <p className="text-[16px]  text-[#656561] pb-1">Coupon:</p>
                    <div className="flex items-center gap-x-3">
                      <input
                        className="py-[10px] px-4 border border-primary-700/20 outline-none "
                        type="text"
                        placeholder="Enter Coupon Code"
                      />
                      <button className="py-[10px] px-6 border bg-primary-700 hover:bg-primary-800 transition duration-300 text-white">
                        Appy
                      </button>
                    </div>

                    <div>
                      <button className="py-[10px] px-6 border bg-primary-700 hover:bg-primary-800 transition duration-300 text-white">
                        Update cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-center items-center relative">
                  <img
                    className="max-w-[400px]"
                    src="https://i.ibb.co.com/7G91cmr/Error.jpg"
                    alt="pic"
                  />
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
                <p className="flex  items-center text-[15px] pt-4">
                  <span className="w-1/2">Subtotal</span>
                  <span className="w-1/2">$</span>
                </p>
                <p className="flex  items-center text-[15px] pb-4 ">
                  <span className="w-1/2 text-lg font-semibold">Total</span>
                  <span className="w-1/2 ">$</span>
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
