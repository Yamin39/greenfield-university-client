import { IoSearch } from "react-icons/io5";
import book1 from "../../assets/images/book1.png";
import book2 from "../../assets/images/book2.png";
import book3 from "../../assets/images/book3.png";
import book4 from "../../assets/images/book4.png";
import book5 from "../../assets/images/book5.png";
import book6 from "../../assets/images/book6.png";
import { Link } from "react-router-dom";

const ShopSideBar = () => {
  const bookData = [
    {
      category: "Novel",
      name: " The Adventures of Huckleberry Finn",
      pic: book1,
      price: "160",
      discount: "-10",
      desc: "The story begins in fictional St. Petersburg, Missouri, and with a nineteenth-century boy from a River town. Throughout the book he recounts his adventures as he travels down the Mississippi river with another boy who is a runaway slave.",
    },
    {
      category: "Fantasy ovel",
      name: "Great Expectations",
      pic: book2,
      price: "110",
      discount: "-15",
      desc: "Great Expectations is the thirteenth novel by Charles Dickens and was first published as a series of stories in Dickens`s weekly periodical from 1 December 1860 to August 1861.",
    },
    {
      category: "Epic",
      name: " Lord Of The Rings Trilogy",
      pic: book3,
      price: "190",
      discount: "-10",
      desc: "The Lord of the Rings is an high fantasy novel, written between 1937-1949 by the English author and scholar J. R. R. Tolkien.All three parts of the masterpiece are steeped in magic and otherworldliness. The epic story centres around Frodo Baggins, who is forced to leave his hometown of the Shire to make a perilous journey across the realms of Middle-earth to destroy a powerful ring, deep inside the territories of the Dark Lord. ",
    },
    {
      category: "History",
      name: "War And Peace",
      pic: book4,
      price: "120",
      discount: "-10",
      desc: "War and Peace is a novel by the Russian author Leo Tolstoy and published in its entirety in 1869. Often called the greatest novel ever written, and regarded as one of Tolstoy`s finest literary achievements, this historical war epic is a celebration of Russian spirit.",
    },
    {
      category: "War Novel",
      name: " All Quiet on the Western Front",
      pic: book5,
      price: "140",
      discount: "-20",
      desc: "All Quiet on the Western Front was written by a German veteran of World War I called Erich Maria Remarque in 1928. The book follows an incredible story of a young unknown soldier that patriotically signed up to the ‘glorious war’, and his experience pre, present and post war.",
    },
    {
      category: "Psychological Novel",
      name: "Don Quixote",
      pic: book6,
      price: "210",
      discount: "-15",
      desc: "Don Quixote was written by Miguel de Cervantes Don Quixote in the 16th century. Brimming with romance and adventure, his book is considered to be the greatest work in the Spanish literary world. It’s the tale of Quixote, who’s been driven mad by reading too many chivalric romances that he determines to become a knight-errant himself.",
    },
  ];
  return (
    <div className="">
      <div>
        <p className="text-xl md:text-2xl pb-2  text-[#353533] font-semibold border-b border-gray-200">
          Search
        </p>
        <div className="flex w-full bg-primary-700/5 mt-8 hover:focus:outline-primary-700/50 items-center gap-x-4 border  rounded-lg py-2 md:py-4 px-3 md:px-6">
          <input
            className="w-full outline-none bg-transparent text-lg "
            type="text"
            placeholder="Search..."
          />
          <IoSearch className="text-[#797975] " size={25}></IoSearch>
        </div>
        {/* Price Filter */}
        <div>
          <p className="text-xl md:text-2xl pb-2 pt-10 text-[#353533] font-semibold border-b border-gray-200">
            Price Filter
          </p>
          {/* <span></span> */}
          <div className="flex items-center justify-between my-4">
            <p className="flex items-center gap-x-2 text-primary-800">
              <span>Price: </span>
              <span className="flex items-center text-sm">
                <span>12$ --</span>
                <span> 20$</span>
              </span>
            </p>
            <button className="bg-primary-700/5 py-[2px] px-3 hover:bg-primary-700 hover:text-white transition duration-500">
              Filter
            </button>
          </div>
        </div>
        {/* Categories */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl  font-semibold border-b pb-2 border-gray-200">
            Categories
          </h2>
          <div className="grid grid-cols-1 gap-3 mt-3 md:mt-5">
            {bookData.map((item, index) => (
              <div key={index} className=" ">
                <Link to={"#"} className="">
                  <div className="flex justify-between group group items-center">
                    <h2 className="text-[16px]   group-hover:text-primary-700 transition duration-300 ">
                      {item.category}
                    </h2>
                    <p className="flex items-center gap-x-2 text-[#656561] group-hover:text-primary-700 transition duration-300">
                      <span>(11)</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Products */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl  font-semibold border-b pb-2 border-gray-200">
            Products
          </h2>
          <div className="h-[400px] overflow-y-auto grid grid-cols-1 gap-3 mt-3 md:mt-5">
            {bookData.map((item, i) => (
              <div key={i} className="">
                <div className=" flex flex-row lg:justify-between  gap-3 ">
                  <div className=" ">
                    <img
                      className="max-w-[80px] bg-gray-50 p-2 "
                      src={item.pic}
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <div>
                      <Link to={"#"} className="">
                        <h2 className="text-lg by-1 font-semibold hover:text-primary-700 transition duration-300">
                          {item.name}
                        </h2>
                      </Link>
                      <p className="text-[16px]  text-[#656561]">
                        ${item.price}
                      </p>
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
