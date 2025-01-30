/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CartItemSkeleton from "./CartItemSkeleton";

const CartData = ({ item, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = () => {
    setIsLoading(true);
    axiosPublic
      .delete(`/cart/${item._id}`)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        toast.success("Item removed from cart");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to remove item from cart");
        setIsLoading(false);
      });
  };

  const updateCartQuantity = (id, quantity) => {
    setIsLoading(true);
    const cart = {
      quantity: quantity,
    };

    axiosPublic
      .patch(`/cart/${id}`, cart)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("Cart quantity updated");
          setIsLoading(false);
          refetch();
        } else {
          console.log("Failed to update cart");
          toast.error("Failed to update cart");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) {
    return <CartItemSkeleton />;
  }
  return (
    <tr className="">
      <td className="p-3">
        <Link to={""}>
          <img className="max-w-[70px] bg-gray-50 p-[10px]" src={item.pic} alt="pic" />
        </Link>
      </td>
      <td className="p-3">
        <Link to={""} className="hover:text-primary-700 transition duration-300">
          <p>{item.name}</p>
        </Link>
      </td>
      <td className="p-3">
        <p>${item.price}</p>
      </td>
      <td className=" max-w-[150px]">
        <p className="py-2 border border-[#dcddde]  rounded-full  px-4  flex justify-between items-center gap-x-5 text-lg font-semibold">
          <button
            onClick={() => {
              updateCartQuantity(item._id, item.quantity - 1);
            }}
            disabled={item.quantity === 1}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => {
              updateCartQuantity(item._id, item.quantity + 1);
            }}
          >
            +
          </button>
        </p>
      </td>
      <td className="p-3 text-right">
        <button onClick={handleRemove} className="text-xl text-red-500">
          <MdOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default CartData;
