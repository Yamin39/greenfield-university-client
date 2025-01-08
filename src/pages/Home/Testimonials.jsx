import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/tesimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto md:flex items-center      mt-28 mb-10 px-5">
      <div className="md:min-w-[50%]">
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold">
          TESTIMONIALS
        </p>

        <h1 className="text-3xl md:text-[42px] text-[#181818] font-bold mt-6 leading-tight">
          What <span className="text-[#1AB69D]">Our Students</span> <br /> Have
          To Say
        </h1>

        <img
          className="w-28 mt-2 mb-7"
          src="https://i.ibb.co/hH8Jpm2/about-Style.png"
          alt="style"
        />

        <p className="text-gray-600 md:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          mollitia cupiditate. Laborum repellendus quibusdam, voluptates eius,
          cumque commodi ut accusamus esse ipsum repellat, vitae repudiandae
          magnam cum quis est. Cupiditate?
        </p>

        <button className="flex items-center gap-1.5 bg-[#1AB69D] rounded mt-2 text-white px-4 py-2.5">
          View All <FaLongArrowAltRight />
        </button>
      </div>

      <div className="md:w-1/2">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="px-8 py-10 mb-8 h-fit max-w-96 bg-white rounded-lg flex flex-col items-center shadow-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full mb-6 border-4 border-gray-200 shadow-sm"
              />

              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                {item.content}
              </p>

              <div className="mt-4">
                <p className="text-yellow-500 text-lg font-semibold mb-1">
                  {"⭐".repeat(Math.round(item.rating))}
                </p>
                <p className="text-gray-800 text-base font-bold mt-2">
                  {item.name}
                </p>
                <p className="text-gray-500 text-sm mt-1">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
