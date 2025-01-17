import student1 from "../../assets/images/student1.jpg";
import student2 from "../../assets/images/student2.jpg";
import student3 from "../../assets/images/student3.jpg";
import student4 from "../../assets/images/student4.jpg";

const Gallery = () => {
  return (
    <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5 pb-12 pt-12 md:pt-24 ">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl pb-4">
            Our goal is to develop and meet the needs of each child so that he
            or she becomes a well-rounded tomorrow individual.
          </h2>
          <button className="bg-primary-800/80 hover:bg-primary-800 py-3 md:py-4 px-7 rounded-lg text-white font-semibold text-lg">
            Why Choose Acadia
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center flex-wrap  sm:justify-between   gap-8 mt-16 md:mt-24">
          <div className=" sm:flex flex-col sm:items-center ">
            <img
              className="rounded-xl w-[281px] h-[380px]"
              src={student1}
              alt="pic"
            />
          </div>
          <div className="">
            <img
              className=" rounded-xl w-[385px] h-[606px] "
              src={student2}
              alt="pic"
            />
          </div>
          <div className=" sm:flex sm:flex-col sm:items-center ">
            <img
              className="rounded-xl w-[281px] h-[380px]"
              src={student3}
              alt="pic"
            />
          </div>
          <div className=" sm:flex sm:flex-col sm:items-center ">
            <img
              className="rounded-xl w-[179px] h-[248px]"
              src={student4}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
