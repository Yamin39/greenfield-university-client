import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import SharedBanner from "../../shared/SharedBanner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Events = () => {
  const axiosPublic = useAxiosPublic();

  const { data: seminars = [] } = useQuery({
     queryKey: ['events'],
     queryFn: async () => {
        const res = await axiosPublic.get('/events')
        return res.data;
     }
  })

  return (
   <div className="max-w-7xl mx-auto bg-[#FFFFFF] p-4 text-center">

    <SharedBanner title="Events" />

    <div className="max-w-7xl mx-auto bg-[#FFFFFF] p-4 text-center">
      <div>
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">
        Events
        </p>
        <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
        Popular Events & News 
        </h1>
        <img
          className="w-28 mt-2 mb-7 mx-auto"
          src="https://i.ibb.co/hH8Jpm2/about-Style.png"
          alt="style"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
        {seminars.map((seminar) => (
          <div
            key={seminar._id}
            className="group flex bg-[#F7F5F2] flex-col h-[32rem] w-80 border border-gray-200 rounded shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105"
          >
          
            <div className="h-[40%]">
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={seminar.thumbnail}
                alt={seminar.title}
              />
            </div>

            
            <div className="relative h-[60%] translate-y-[1px] bg-[#F7F5F2] duration-500 group-hover:translate-y-[-65px] flex flex-col p-4">
            
              <div className="flex gap-2">
                <h2 className="px-2.5 py-0.5 text-xs text-center w-fit rounded-sm bg-green-400 text-teal-900">
                  {seminar.category}
                </h2>
                <span className="px-2.5 py-0.5 text-xs text-center w-fit rounded-sm bg-blue-400 text-blue-900">
                  {seminar.type}
                </span>
              </div>

            
              <h3 className="text-xl text-start font-bold mt-2">{seminar.title}</h3>

              {/* Description */}
              <p className="text-sm text-start text-gray-500 mt-2">
                {seminar.description.slice(0, 100)}...
              </p>

           
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-green-600" />
                  <span>{seminar.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-orange-700" />
                  <span>{`${seminar.time.start} - ${seminar.time.end} ${seminar.time.timezone}`}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                  <span>{seminar.location.venue}</span>
                </div>
              </div>

            
              <div className="mt-4 text-lg text-start font-semibold text-gray-900">
                ${seminar.price.amount} {seminar.price.currency}
              </div>

              
              <Link
                to={`/event/${seminar._id}`}
                className="   mt-2 px-4 py-2 bg-red-500 text-white text-center rounded-md hover:bg-yellow-600 transition-colors duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

   </div> 
  );
};

export default Events;
