import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AnnouncementsCard = () => {

   const axiosPublic = useAxiosPublic();

   const { data : announcements = [] } = useQuery({
      queryKey: ['announcements'],
      queryFn: async () => {
         const res = await axiosPublic.get('/announcements')
         return res.data;
      }
   })

   const formatTimestamp = (timestamp) => {
      const data = new Date(timestamp);
      return data.toLocaleString()
   }


   return (
      <div className="max-w-7xl mx-auto my-16 bg-gray-50 p-12 space-y-6 border rounded-lg">
         {
            announcements.map((item, i) => <div key={i} className="space-y-3 border p-6 rounded-lg">
               <div className="flex items-center space-x-6">
                  <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                  <span className="bg-primary-700 bg-opacity-30 py-1 px-3 rounded-lg text-sm">Feature</span>
               </div>
               <p className="text-[#8d8b8b] font-light">{item.description}<span className="text-blue-500 cursor-pointer font-semibold text-sm pl-1">Learn more...</span></p>
               <p>{formatTimestamp(item.timestamp)}</p>

            </div>)
         }





      </div>
   );
};

export default AnnouncementsCard;