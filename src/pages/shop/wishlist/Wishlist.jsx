import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useFormatTimestamp from "../../../hooks/useFormatTimestamp";
import SharedBanner from "../../../shared/SharedBanner";

const Wishlist = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const formatTimestamp = useFormatTimestamp;

  const {
    data: wishlist = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist?email=${user.email}`);
      return res.data;
    },
  });

  const handleRemove = (id) => {
    axiosPublic
      .delete(`/wishlist/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Item removed from wishlist");
        refetch();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to remove item from wishlist");
      });
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen    w-full bg-white">Loading...</div>;
  }
  return (
    <div className="bg-[#FFFFFF]">
      <SharedBanner title={"Wishlist"}></SharedBanner>

      <div className="max-w-7xl mx-auto py-12 px-3 mt-24">
        <div className="grid grid-cols-1 ">
          <div className="overflow-x-auto">
            <table className="w-full  ">
              <tbody className="">
                {wishlist.map((item, i) => (
                  <tr key={i} className="border border-gray-200 ">
                    <td className="p-3 w-[30px] h-auto  ">
                      <button onClick={() => handleRemove(item._id)}>
                        {" "}
                        <span className="flex justify-center items-center">
                          <RxCross2 className="hover:text-primary-700 transition duration-300" size={20}></RxCross2>
                        </span>{" "}
                      </button>
                    </td>
                    <td className="p-3  w-[70px] border-x border-gray-200">
                      <Link to={`/shop-details/${item.productId}`}>
                        <img className="max-w-[70px]  bg-gray-50 p-[10px]" src={item.pic} alt="pic" />
                      </Link>
                    </td>
                    <td className="p-4 border-r border-gray-200 ">
                      <div className="flex-1 ">
                        <Link to={`/shop-details/${item.productId}`} className="">
                          <h2 className="text-lg  font-semibold hover:text-primary-700 transition duration-300">{item.name}</h2>
                        </Link>
                        <p className="text-[16px]  text-[#656561] py-2">${item.price}</p>
                        <p className="text-[16px]  text-[#656561] ">{formatTimestamp(item.timestamp)}</p>
                      </div>
                    </td>
                    <td className="p-3  h-auto  ">
                      <Link to={""}>
                        {" "}
                        <span className="flex justify-center items-center">
                          <IoCartOutline className="hover:text-primary-700 transition duration-300" size={20}></IoCartOutline>
                        </span>{" "}
                      </Link>
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
