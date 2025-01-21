import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdGridView } from "react-icons/md";
import book1 from "../../assets/images/book1.png";
import book2 from "../../assets/images/book2.png";
import book3 from "../../assets/images/book3.png";
import book4 from "../../assets/images/book4.png";
import book5 from "../../assets/images/book5.png";
import book6 from "../../assets/images/book6.png";
import { Link } from "react-router-dom";

const ShopContent = () => {
  const [viewMode, setViewMode] = useState("card");

  const bookData = [
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
    {
      category: "Epic",
      name: " Lord Of The Rings Trilogy",
      pic: book3,
      price: "190.00",
      discount: "-10",
      desc: "The Lord of the Rings is an high fantasy novel, written between 1937-1949 by the English author and scholar J. R. R. Tolkien.All three parts of the masterpiece are steeped in magic and otherworldliness. The epic story centres around Frodo Baggins, who is forced to leave his hometown of the Shire to make a perilous journey across the realms of Middle-earth to destroy a powerful ring, deep inside the territories of the Dark Lord. ",
    },
    {
      category: "History",
      name: "War And Peace",
      pic: book4,
      price: "120.00",
      discount: "-10",
      desc: "War and Peace is a novel by the Russian author Leo Tolstoy and published in its entirety in 1869. Often called the greatest novel ever written, and regarded as one of Tolstoy`s finest literary achievements, this historical war epic is a celebration of Russian spirit.",
    },
    {
      category: "War Novel",
      name: " All Quiet on the Western Front",
      pic: book5,
      price: "140.00",
      discount: "-20",
      desc: "All Quiet on the Western Front was written by a German veteran of World War I called Erich Maria Remarque in 1928. The book follows an incredible story of a young unknown soldier that patriotically signed up to the ‘glorious war’, and his experience pre, present and post war.",
    },
    {
      category: "Psychological Novel",
      name: "Don Quixote",
      pic: book6,
      price: "210.00",
      discount: "-15",
      desc: "Don Quixote was written by Miguel de Cervantes Don Quixote in the 16th century. Brimming with romance and adventure, his book is considered to be the greatest work in the Spanish literary world. It’s the tale of Quixote, who’s been driven mad by reading too many chivalric romances that he determines to become a knight-errant himself.",
    },
  ];
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
            {bookData.map((item, i) => (
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
                      <Link to={""}>
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
                    <Link to={"#"} className="">
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
              {bookData.map((item, i) => (
                <div key={i} className="">
                  <div className=" bg-gray-50 py-12 px-14 flex flex-col md:flex-row md:justify-center  gap-10">
                    <div className="w-1/4">
                      <img className="  shadow-pic" src={item.pic} alt="" />
                    </div>
                    <div className="w-3/4">
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
                        <Link to={"#"} className="">
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
                        <Link to={""}>
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
      {/* pagination */}
      <div className="flex justify-center items-center gap-x-4 text-xl mt-12 md:mt-16">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>2</span>
      </div>
    </div>
  );
};

export default ShopContent;
