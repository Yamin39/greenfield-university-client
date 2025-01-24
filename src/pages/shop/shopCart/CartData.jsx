/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const CartData = ({item}) => {
     const [count, setCount] = useState(1);
      const handleIncrement = () => {
        setCount(count + 1);
      };
      const handleDecrement = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
  return (
    <tr  className="">
      <td className="p-3">
        <Link to={""}>
          <img
            className="max-w-[70px] bg-gray-50 p-[10px]"
            src={item.pic}
            alt="pic"
          />
        </Link>
      </td>
      <td className="p-3">
        <Link
          to={""}
          className="hover:text-primary-700 transition duration-300"
        >
          <p>{item.name}</p>
        </Link>
      </td>
      <td className="p-3">
        <p>${item.price}</p>
      </td>
      <td className=" max-w-[150px]">
        <p className="py-2 border border-[#dcddde]  rounded-full  px-4  flex justify-between items-center gap-x-5 text-lg font-semibold">
          <button onClick={handleDecrement}>-</button>
          <span>{count}</span>
          <button onClick={handleIncrement}>+</button>
        </p>
      </td>
      <td className="p-3 text-right">
        <p>${item.price}</p>
      </td>
    </tr>
  );
};

export default CartData;
