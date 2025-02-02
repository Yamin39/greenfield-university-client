import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import DashboardTitle from "../../../Dashboard/DashboardTitle";

const PurchasedHistory = () => {
    const { user } = useAuth();
    const email = user?.email;
    const axiosPublic = useAxiosPublic();

    const { data: purchasedItems = [], isLoading } = useQuery({
        queryKey: ['purchasedHistory', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get('/paidCart', { email }); // Send email in the body
            return res.data;
        }
    });

    // Skeleton loading component
    const TableSkeleton = () => (
        <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-gray-100 rounded mb-2"></div>
            ))}
        </div>
    );

    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto p-4 mt-24">
                <TableSkeleton />
            </div>
        );
    }

    return (
        <div className="bg-[#FFFFFF]">
            <DashboardTitle title="Purchase History" />

            <div className="max-w-7xl mx-auto pb-12 px-3">
                {purchasedItems.length ? (
                    <div className="container mx-auto p-2 sm:p-4 dark:text-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full text-[14px]">
                                <thead className="dark:bg-gray-300">
                                    <tr className="text-left bg-primary-700/10">
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Item Name</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3">Quantity</th>
                                        <th className="p-3">Purchase Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchasedItems.map((item) => (
                                        <tr key={item._id} className="border-b border-opacity-20 border-gray-300">
                                            <td className="p-3">
                                                <img 
                                                    src={item.pic} 
                                                    alt={item.name} 
                                                    className="w-16 h-20 object-cover rounded"
                                                />
                                            </td>
                                            <td className="p-3">
                                                <p className="font-medium">{item.name}</p>
                                            </td>
                                            <td className="p-3">${item.price}</td>
                                            <td className="p-3">{item.quantity}</td>
                                            <td className="p-3">
                                                {new Date(item.timestamp).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center p-8">
                        <img 
                            src="https://i.ibb.co/com/7G91cmr/Error.jpg" 
                            alt="No purchases" 
                            className="max-w-[400px]"
                        />
                        <p className="text-2xl font-bold text-[#FF735E] mt-4">
                            No Purchase History Found
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PurchasedHistory;
