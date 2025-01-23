import { useLoaderData } from "react-router-dom";
import SharedBanner from "../../shared/SharedBanner";

const AnnouncementDetails = () => {
   const { title, timestamp, description } = useLoaderData();

   const formatTimestamp = (timestamp) => {
      const data = new Date(timestamp);
      return data.toLocaleString()
   }

   console.log(title);
   return (
      <div>
         <SharedBanner title='Announcements Details' />
         <div className="max-w-7xl mx-auto px-3 space-y-6 pt-16">
            <h1 className="text-4xl font-semibold text-center">{title}</h1>
            <p className="text-center font-semibold text-lg">Time : <span className="text-primary-700">{formatTimestamp(timestamp)}</span></p>
            <p className="text-justify font-light bg-gray-50 border rounded-lg p-8 leading-8"><span className="font-semibold text-lg">Description : </span>{description + description + description + description}</p>
         </div>
      </div>
   );
};

export default AnnouncementDetails;