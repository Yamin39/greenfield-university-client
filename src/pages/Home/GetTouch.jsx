const GetTouch = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#FFFFFF]  mt-24  mb-24 px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center gap-y-6  px-3 bg-gradient-to-r rounded-xl py-12 from-[#1BB69C] to-[#30B97A]">
        <div className="col-span-5 text-center md:text-end">
          <h2 className="text-xl font-medium text-[#F4FBF9]">Get In Touch:</h2>
          <h2 className="text-xl md:text-3xl font-bold text-white">info@gu.edu</h2>
        </div>
        <div className="col-span-2 text-center w-[70px] h-[70px] rounded-full flex justify-center items-center mx-auto font-bold text-2xl text-primary-700 bg-[#FFFFFF] border-4 border-[#D1F0EB]">
          or
        </div>
        <div className="col-span-5 text-center md:text-start">
          <h2 className="text-xl  font-medium text-[#F4FBF9]">Call Us Via: </h2>
          <h2 className="text-xl md:text-3xl font-bold text-white"> +880 180000 0000</h2>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
