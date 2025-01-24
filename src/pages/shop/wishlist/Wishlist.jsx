import { Link } from "react-router-dom";
import book1 from "../../../assets/images/book1.png";
import book2 from "../../../assets/images/book2.png";
import book3 from "../../../assets/images/book3.png";
import { RxCross2 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";

const Wishlist = () => {
  const bookData = [
    {
      category: "Novel",
      name: " The Adventures of Huckleberry Finn",
      pic: book1,
      price: "160.00",
      discount: "-10",
    },
    {
      category: "Novel",
      name: "Great Expectations",
      pic: book2,
      price: "110.00",
      discount: "-15",
    },
    {
      category: "Epic",
      name: " Lord Of The Rings Trilogy",
      pic: book3,
      price: "190.00",
      discount: "-10",
    },
  ];
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto py-12 px-3 mt-24">
        <div className="grid grid-cols-1 ">
          <div className="overflow-x-auto">
          <table className="w-full  ">
            <tbody className="">
              {bookData.map((item, i) => (
                <tr key={i} className="border border-gray-200 ">
                  <td className="p-3 w-[30px] h-auto  ">
                    <Link to={''}> <span className="flex justify-center items-center"><RxCross2 className="hover:text-primary-700 transition duration-300" size={20}></RxCross2></span> </Link>
                  </td>
                  <td className="p-3  w-[70px] border-x border-gray-200">
                    <Link to={""}>
                      <img
                        className="max-w-[70px]  bg-gray-50 p-[10px]"
                        src={item.pic}
                        alt="pic"
                      />
                    </Link>
                  </td>
                  <td className="p-4 border-r border-gray-200 ">
                    <div className="flex-1 ">
                      <Link to={""} className="">
                        <h2 className="text-lg  font-semibold hover:text-primary-700 transition duration-300">
                          {item.name}
                        </h2>
                      </Link>
                      <p className="text-[16px]  text-[#656561] py-2">
                        ${item.price}
                      </p>
                      <p className="text-[16px]  text-[#656561] ">
                        {Date().slice(0, 15)}
                      </p>
                    </div>
                  </td>
                  <td className="p-3  h-auto  ">
                    <Link to={''}> <span className="flex justify-center items-center"><IoCartOutline className="hover:text-primary-700 transition duration-300" size={20}></IoCartOutline></span> </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
