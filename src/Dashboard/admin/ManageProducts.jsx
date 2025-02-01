import { Link } from "react-router-dom";
import DashboardTitle from "../DashboardTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { format } from "date-fns";


const ManageProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: productsData = [], refetch } = useQuery({
       queryKey: ['products'],
       queryFn: async () => {
          const res = await axiosPublic.get('/products')
          return res.data;
       }
    })
 
    const handleDelete = async (id) => {
       const res = await axiosPublic.delete(`/product/${id}`)
       if(res.data.deletedCount > 0){
          toast.success("Product has been deleted.")
          refetch()
       }
    }
    return (
        <div>
         <DashboardTitle title="Manage Products" />

         <div className="max-w-7xl mx-auto">
                     <div className="overflow-x-auto">
                        <table className="min-w-full text-xs border ">
                           <colgroup>
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                              <col />
                           </colgroup>
                           <thead>
                              <tr className="text-left">
                                 <th className="p-3">SL</th>
                                 <th className="p-3">Name</th>
                                 <th className="p-3">Photo</th>
                                 <th className="p-3">Category</th>
                                 <th className="p-3">Date & Time</th>
                                 <th className="p-3">Update</th>
                                 <th className="p-3">Delete</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 productsData.map((item, i) => <tr key={i} className="border">
                                    <td className="p-2">
                                       <p>{i + 1}</p>
                                    </td>
                                    <td className="p-2">
                                       <p>{item?.name}</p>
                                    </td>
                                    <td className="p-2">
                                       <img src={item?.pic ? item?.pic : 'https://greenfield-university.netlify.app/assets/banner_66-Bq6KXLtZ.png' } alt="" className="w-12 h-8 object-cover rounded-lg hover:scale-105 duration-300"/>
                                    </td>
                                    <td className="p-2">
                                    <p>{item?.category}</p>
                                    </td>
                                    <td className="p-2">
                                       <p>{format(new Date(item.timestamp), "yyyy-MM-dd hh:mm a")}</p>
                                    </td>

                                    <td className="p-2">
                                       <Link to={`/dashboard/updateProduct/${item._id}`} className="px-3 py-1 font-semibold rounded-md bg-green-500 text-white cursor-pointer">
                                          <span>Update</span>
                                       </Link>
                                    </td>
                                    <td onClick={() => handleDelete(item._id)} className="p-2">
                                       <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                          <span>Delete</span>
                                       </span>
                                    </td>
                                 </tr>)
                              }
                           </tbody>
                        </table>
                     </div>
                  </div>

      </div>
    );
};

export default ManageProducts;