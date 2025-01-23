import SharedBanner from "../../shared/SharedBanner";
import Teacher from "./Teacher";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Instructors = () => {
   const axiosPublic = useAxiosPublic();

   const { data: instructors = [] } = useQuery({
      queryKey: ['instructor'],
      queryFn: async () => {
         const { data } = await axiosPublic.get('/instructors')
         return data;
      }
   })

   console.log(instructors);

   return (
      <div>
         <SharedBanner title="Instructors" />
         <div className="text-center space-y-3 py-16">
            <h5 className="text-sm font-semibold text-[#9f9d9d]">INSTRUCTORS</h5>
            <h2 className="text-3xl font-semibold">Our Course Instructors</h2>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-3">
            {
               instructors.map((instructor, i) => <Teacher key={i} instructor={instructor} />)
            }
         </div>

      </div>
   );
};

export default Instructors;