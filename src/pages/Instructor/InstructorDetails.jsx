import { useLoaderData } from "react-router-dom";
import SharedBanner from "../../shared/SharedBanner";

const InstructorDetails = () => {
   const {name} = useLoaderData();   
   return (
      <div>
         <SharedBanner title="Instructor Details" />
         <div>
            <h1>{name}</h1>
         </div>
      </div>
   );
};

export default InstructorDetails;