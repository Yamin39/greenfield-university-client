import { FaFacebookF, FaLinkedinIn, FaRegHeart } from "react-icons/fa";
import book1 from "../../../assets/images/book1.png";
import { Link } from "react-router-dom";
import { IoLogoTwitter, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrVimeo } from "react-icons/gr";
import { useState } from "react";

const ShopDetailsPage = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () =>{
    setCount(count + 1)
  }
  const handleDecrement =()=>{
    if(count > 0){
      setCount(count-1)
    }
  }
  
  const bookData = {
    category: "Novel",
    name: " The Adventures of Huckleberry Finn",
    available: "In Stock",
    pic: book1,
    price: "160.00",
    discount: "-10",
    desc: "The story begins in fictional St. Petersburg, Missouri, and with a nineteenth-century boy from a River town. Throughout the book he recounts his adventures as he travels down the Mississippi river with another boy who is a runaway slave.",
  };

  return (
    <div className="pt-12 md:pt-16">
      <div className="  flex flex-col lg:flex-row lg:justify-between gap-20">
        <div className="w-full  lg:w-1/2 ">
          <div className="  bg-gray-50 py-6 sm:py-12 px-8 sm:px-14 md:py-16 md:px-18 flex justify-center items-center">
            <img className=" w-fit shadow-pic" src={bookData.pic} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="">
            <Link to={"#"}>
              <p className="text-lg text-[#656561]  hover:text-primary-700 transition duration-300">
                {bookData.category}
              </p>
            </Link>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-[34px] by-1 font-semibold py-2">
              {bookData.name}
            </h2>
            <p className="text-[16px]  text-primary-700 py-1 px-3 my-2 bg-primary-700/5 inline-block">
              {bookData.available}
            </p>
            <p className="text-[18px]  text-[#656561] py-3">{bookData.desc}</p>
            <p className="text-xl  text-[#656561] py-3">${bookData.price}</p>
            <p className="text-[15px]  text-[#656561] ">Quantity</p>
            <div className="flex justify-between items-center gap-5 py-2">
              <p className="py-2 bg-[#F3F5F6]  px-8 rounded-sm flex justify-around items-center gap-x-3 text-lg font-semibold">
              <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
              </p>
              <Link to={"/cart"} className="flex-1">
                <button className=" w-full hover:bg-primary-800  py-2  text-lg px-8  font-semibold rounded-sm hover:text-white bg-white flex justify-center items-center  border border-[#F3F5F6] transition duration-500 text-primary-800">
                  <span>Add to Cart</span>
                </button>
              </Link>
            </div>
            <Link to={""} className="">
              <button className="w-full mt-1 hover:bg-primary-800 text-lg py-2  px-8  font-semibold bg-[#319C9A] flex justify-center items-center  border border-primary-800 transition duration-500 text-white">
                <span>Buy Now</span>
              </button>
            </Link>
            <div className=" border-b border-gray-200 pb-5">
            <Link to={"/wishlist"} >
                <p className="text-[16px] mt-5 text-[#656561] flex items-center gap-x-2  hover:text-primary-700 transition duration-300"> <FaRegHeart ></FaRegHeart><span>Add To Wishlist</span>
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-2  mt-5">
              <p className="text-[15px] text-[#41413e]"> Category: </p>
              
              <Link to={"#"}>
                <p className="text-[15px] text-[#656561] text-center hover:text-primary-700 transition duration-300">
                  {bookData.category}
                </p>
              </Link>
            </div>
            <div className="pt-5 lg:pt-8">
              <div className="flex flex-row flex-wrap items-center mt-6 gap-1 sm:gap-2">
                <h2 className="text-[16px]">Share On:</h2>
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${location}`}><span className="w-10 h-10 text-[#888888] border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center transition duration-300 items-center">
                  <FaFacebookF size={20} />
                </span></a>
                <a target="_blank" href={`https://twitter.com/share?url=${location}`}><span className="w-10 h-10 text-[#888888] transition duration-300 border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                  <IoLogoTwitter size={20} />
                </span></a>
                <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${location}`}><span className="w-10 h-10 text-[#888888] border border-gray-100 transition duration-300 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                  <FaLinkedinIn size={20} />
                </span></a>
                <a target="_blank" href={`https://vimeo.com/share?url=${location}`}><span className="w-10 h-10 text-[#888888] border border-gray-100 transition duration-300 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                  <GrVimeo size={20} />
                </span></a>
              </div>
              <div className="mt-8">
                <p className="text-[16px] text-[#656561] flex items-center gap-x-2"> <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline><span>30 days easy returns</span></p>
                <p className="text-[16px] text-[#656561] flex items-center gap-x-2"> <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline><span>Order yours before 2.30pm for same day dispatch</span></p>
              </div>
              <div className="mt-8 bg-[#F3F5F6] flex justify-between py-3 px-4 gap-x-3 md:gap-x-5">
                <p className="text-[16px] text-[#3b3b36] "> Guaranteed safe & secure checkout</p>
                <div className="flex items-center gap-x-2">
                <button className=" py-[1px]  text-[16px] px-2 text-[#6C71C6]  font-bold rounded-sm bg-white ">
                  <span>Stripe</span>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsPage;
