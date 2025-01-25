import CountUp from 'react-countup';

const AboutStatistics = () => {
    return (
        <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5 pb-12 pt-12 md:pt-16 lg:pt-24 ">
        <div className=" bg-[#FFFFFF] rounded-xl p-6  md:py-10 md:px-12 shadow-box">
          <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 justify-center items-center">
            <div className="relative md:w-full w-4/5 mx-auto">
                <h1 className="text-[70px] font-bold text-center text-[#be3326] "> <CountUp duration={3} delay={1} end={10} /> K</h1>
                <p className="text-lg text-center text-[#5F6167] ">Students</p>
                <span className="h-24 w-[2px] bg-gray-200 hidden lg:block absolute bottom-2 -right-8" ></span>
            </div>
            
            <div className="relative md:w-full w-4/5 mx-auto">
                <h1 className="text-[70px] font-bold text-center text-[#be3326]"><CountUp duration={3} delay={1} end={300} /></h1>
                <p className="text-lg text-center text-[#5F6167] ">Professors</p>
                <span className="h-24 w-[2px] bg-gray-200 hidden lg:block absolute bottom-2 -right-8" ></span>
            </div>
            
            <div className=" w-4/5 md:w-full mx-auto relative">
                <h1 className="text-[70px] font-bold text-center text-[#be3326]"><CountUp duration={3} delay={1} end={48} /></h1>
                <p className="text-lg text-center text-[#5F6167] ">Programs</p>
                <span className="h-24 w-[2px] bg-gray-200 hidden lg:block absolute bottom-2 -right-8" ></span>
            </div>
            <div className=" w-4/5 md:w-full mx-auto">
                <h1 className="text-[70px] font-bold text-center text-[#be3326]"><CountUp duration={3} delay={1} end={2} />K</h1>
                <p className="text-lg text-center text-[#5F6167] ">Programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AboutStatistics;