import CountUp from "react-countup";

const AboutCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between ">
      <div className=" shadow-box rounded-lg text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-700">
          <CountUp duration={2.5} end={29.3}></CountUp>k
        </h1>
        <h3 className="text-[16px] font-semibold text-[#333333] mt-2">STUDENT ENROLLED</h3>
      </div>
      <div className="shadow-box rounded-lg text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#EE4A62]">
          <CountUp duration={2.5} end={32}></CountUp>k
        </h1>
        <h3 className="text-[16px] font-semibold text-[#333333] mt-2">CLASS COMPLETED</h3>
      </div>
      <div className="shadow-box rounded-lg text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#8E56FF]">
          <CountUp duration={2.5} end={100}></CountUp>%
        </h1>
        <h3 className="text-[16px] font-semibold text-[#333333] mt-2">SATISFACTION RATE</h3>
      </div>
      <div className="shadow-box rounded-lg text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F8941F]">
          <CountUp duration={2.5} end={354}></CountUp>+
        </h1>
        <h3 className="text-[16px] font-semibold text-[#333333] mt-2">TOP INSTRUCTORS</h3>
      </div>
    </div>
  );
};

export default AboutCard;
