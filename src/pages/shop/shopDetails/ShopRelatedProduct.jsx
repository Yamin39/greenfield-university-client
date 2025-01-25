import { Link } from "react-router-dom";
import book1 from "../../../assets/images/book1.png";
import book2 from "../../../assets/images/book2.png";
import book3 from "../../../assets/images/book3.png";

const ShopRelatedProduct = () => {
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
  ];
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-semibold pb-8 text-center border-t border-gray-200 pt-20">Related Products</h1>
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
