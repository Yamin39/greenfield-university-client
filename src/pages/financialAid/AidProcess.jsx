const AidProcess = () => {
  return (
    <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5  py-12 md:py-16 lg:py-24 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 relative gap-8 justify-between">
          <div className="col-span-1 sticky top-0">
            <img
              className="w-[250px] h-[364px]"
              src="https://i.ibb.co.com/G7VMBxc/ManRead.png"
              alt=""
            />
          </div>
          <div className="col-span-2 overflow-y-hidden">
            <h1 className="text-2xl md:text-4xl text-[#031F42] font-semibold pb-5">
              The Financial Aid Process
            </h1>
            <div className="space-y-8 ">
              <div className=" bg-[#FFFFFF] rounded-md py-10 md:py-12 lg:py-16  px-10 md:px-12  shadow-box ">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex  items-center gap-5">
                    <p className="w-10 h-10 rounded-full border-2 border-pink-600 flex justify-center items-center">
                      <span className="text-xl font-bold text-pink-600">1</span>
                    </p>
                    <p className="text-2xl font-semibold text-[#263750]">
                      Complete Application Form
                    </p>
                  </div>
                  <p className="text-lg  text-[#5F6167] ">
                    Creativity and innovation to challenge the status quo will
                    affect what and how we teach and the intellectual ambitions
                    of the university itself.
                  </p>
                </div>
              </div>
              <div className=" bg-[#FFFFFF] rounded-md py-10 md:py-12 lg:py-16  px-10 md:px-12  shadow-box ">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex  items-center gap-5">
                    <p className="w-10 h-10 rounded-full border-2 border-pink-600 flex justify-center items-center">
                      <span className="text-xl font-bold text-pink-600">2</span>
                    </p>
                    <p className="text-2xl font-semibold text-[#263750]">
                    Review
                    </p>
                  </div>
                  <p className="text-lg  text-[#5F6167] ">
                  Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.
                  </p>
                </div>
              </div>
              <div className=" bg-[#FFFFFF] rounded-md py-10 md:py-12 lg:py-16  px-10 md:px-12  shadow-box ">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex  items-center gap-5">
                    <p className="w-10 h-10 rounded-full border-2 border-pink-600 flex justify-center items-center">
                      <span className="text-xl font-bold text-pink-600">3</span>
                    </p>
                    <p className="text-2xl font-semibold text-[#263750]">
                    Make Your Deposit
                    </p>
                  </div>
                  <p className="text-lg  text-[#5F6167] ">
                  Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AidProcess;
