import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex items-center mt-28 mb-20 px-5">
      {/* Left Section */}
      <div className="md:min-w-[50%]">
        <p className="text-lg md:text-xl uppercase text-[#808080] font-semibold tracking-widest">Our Partners</p>

        <h1 className="text-4xl md:text-5xl text-[#181818] font-bold mt-6 leading-tight">
          Learn with <br /> <span className="text-primary-700">Our Trusted Partners</span>
        </h1>

        <img className="w-28 mt-2 mb-7" src="https://i.ibb.co/hH8Jpm2/about-Style.png" alt="style" />

        <p className="text-gray-600 md:w-[500px] text-lg leading-relaxed">
          We collaborate with industry leaders and innovators to bring you the best learning experiences. Our partners share our commitment to excellence and
          education.
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        <div className="p-6 rounded-xl">
          <Marquee direction="left" speed={50}>
            <div className="mx-4 my-2 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-01.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-02.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-03.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-04.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-02.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-03.png" alt="Partner Logo" />
            </div>
          </Marquee>

          <Marquee direction="right" speed={50}>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-05.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-06.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-07.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-08.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-06.png" alt="Partner Logo" />
            </div>
            <div className="mx-4 p-4 bg-white rounded-lg hover:scale-105 transform transition-all duration-300 cursor-pointer">
              <img className="h-16 w-auto" src="https://demo.edublink.co/wp-content/uploads/2023/05/brand-07.png" alt="Partner Logo" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
