import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  FaAngleRight, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaMoneyCheckAlt, 
  FaPlay 
} from 'react-icons/fa';
import { 
  IoIosPerson, 
  IoLogoTwitter, 
  IoMdStar 
} from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { CiGlobe } from 'react-icons/ci';
import { GoClock } from 'react-icons/go';

const EventsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => {  
        const selectedEvent = data.find(event => event._id == id);
        setEvent(selectedEvent);
      })
      .catch(error => console.error('Error fetching event details:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#F5F9FA] py-[86px] mb-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#181818] font-bold">{event.title}</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-6">
            <div className="flex items-center gap-x-2 md:border-r-2 border-gray-200 md:pr-4">
              <TbWorld size={25} className="text-[#2CBCA5]" />
              <p className="text-[16px]">{event.category}</p>
            </div>
            <div className="flex items-center gap-x-2 md:border-r-2 border-gray-200 md:pr-4">
              <GoClock size={25} className="text-[#2CBCA5]" />
              <p className="text-[16px]">{event.type}</p>
            </div>
            <div className="flex items-center gap-x-[2px]">
              <p className="text-[16px] pl-2">{event.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pb-12 px-3 mt-5">
        <div className="w-full mb-10">
          <img 
            src={event.thumbnail} 
            alt={event.title} 
            className="w-full rounded-xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">About The Event</h3>
              <p className="text-gray-600 mb-6">{event.description}</p>

              <h3 className="text-2xl font-bold mb-4">Event Agenda</h3>
              {event.agenda.map((item, index) => (
                <div key={index} className="mb-4 pb-4 border-b">
                  <div className="flex justify-between">
                    <span className="font-semibold">{item.time} - {item.title}</span>
                    <span className="text-gray-600">{item.duration}</span>
                  </div>
                  {item.speaker && <p className="text-gray-500">Speaker: {item.speaker}</p>}
                </div>
              ))}

              <h3 className="text-2xl font-bold mb-4">Learning Outcomes</h3>
              <ul className="list-disc pl-5">
                {event.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="mb-2">{outcome}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-5 shadow-box rounded-xl">
              <h1 className="text-2xl py-6">Event Info</h1>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-xl flex items-center text-[#323232] gap-x-2">
                    <FaMoneyCheckAlt size={20} />
                    <span>Price</span>
                  </p>
                  <p className="text-xl text-[#EE4A62] font-semibold">
                    ${event.price.amount} {event.price.currency}
                  </p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <IoIosPerson size={20} />
                    <span>Date</span>
                  </p>
                  <p className="text-[16px]">{event.date}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <GoClock size={20} />
                    <span>Time</span>
                  </p>
                  <p className="text-[16px]">{event.time.start} - {event.time.end}</p>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <p className="text-[#323232] text-xl flex items-center gap-x-2">
                    <CiGlobe size={20} />
                    <span>Location</span>
                  </p>
                  <p className="text-[16px]">{event.location.type}</p>
                </div>
                <div className="pt-5 lg:pt-8">
                  <button className="text-xl text-center py-4 transition duration-300 bg-[#1AB69D] text-white w-full rounded-md hover:bg-[#31B978]">
                    Register Now
                  </button>
                  
                  <h2 className="text-2xl mt-6">Share Event:</h2>
                  <div className="flex flex-row items-center mt-6 gap-5">
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center transition duration-300 items-center">
                      <FaFacebookF size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] transition duration-300 border border-gray-100 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                      <IoLogoTwitter size={20} />
                    </span>
                    <span className="w-10 h-10 text-[#888888] border border-gray-100 transition duration-300 hover:bg-[#1AB69D] hover:text-white rounded-full flex justify-center items-center">
                      <FaLinkedinIn size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;