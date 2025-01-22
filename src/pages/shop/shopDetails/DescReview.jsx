import { IoMdStar } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const DescReview = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#FFFFFF]  mt-28 mb-10 px-5">
      <div>
        <div className="mt-12">
          <Tabs>
            <TabList className={"flex justify-center border-b border-gray-100"}>
              <Tab>
                <span
                  className={
                    "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                  }
                >
                  Description
                </span>
              </Tab>
              <Tab>
                <span
                  className={
                    "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                  }
                >
                  Reviews (0)
                </span>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="mt-10">
                <h1 className="text-3xl font-semibold">Description</h1>
                <p className="text-[#888888] text-lg my-3">
                  “The Castle” invites readers into a world of mystery and
                  intrigue. Follow protagonist Amelia as she unravels the
                  secrets hidden within the ancient fortress’s walls,
                  confronting her own past along the way. This captivating tale
                  weaves together history, suspense, and painting a vivid
                  picture of love, loss, and the power of resilience. Prepare to
                  be transported to a realm where the echoes of the past shape
                  the present in ways. For years, rumours of the ‘Marsh Girl’
                  have haunted Barkley Cove, a quiet town on the North Carolina
                  coast. So in late 1969, when handsome Chase Andrews is found
                  dead.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-10">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-x-20">
                  <div className="lg:w-1/2  ">
                    <div className="sm:w-[380px] md:w-[425px] border border-gray-200 p-8">
                    <h2 className="my-2 ">
                      <span className="text-xl font-semibold px-2 pb-2  text-[#161613] ">
                      Customer reviews
                      </span>
                    </h2>
                    <div className="flex items-center flex-wrap gap-2">
                        <span className="text-3xl md:text-4xl font-semibold">0.0</span>
                    <div className="flex items-center mt">
                      <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                      <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                      <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                      <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                      <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                      <p className="text-[16px] text-[#57595F] pl-2">(0 Review)</p>
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="flex items-center gap-x-2 gap-y-4">
                        <p className=" text-[16px] text-[#ACAEB0]">5 Star</p>
                        <span className="flex-1 text-[16px] bg-[#EDEEEE] py-[6px] rounded-sm"></span>
                        <p className=" text-[16px] text-[#ACAEB0] ml-[2px]">0%</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p className=" text-[16px] text-[#ACAEB0]">4 Star</p>
                        <span className="flex-1 text-[16px] bg-[#EDEEEE] py-[6px] rounded-sm"></span>
                        <p className=" text-[16px] text-[#ACAEB0] ml-[2px]">0%</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p className=" text-[16px] text-[#ACAEB0]">3 Star</p>
                        <span className="flex-1 text-[16px] bg-[#EDEEEE] py-[6px] rounded-sm"></span>
                        <p className=" text-[16px] text-[#ACAEB0] ml-[2px]">0%</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p className=" text-[16px] text-[#ACAEB0]">2 Star</p>
                        <span className="flex-1 text-[16px] bg-[#EDEEEE] py-[6px] rounded-sm"></span>
                        <p className=" text-[16px] text-[#ACAEB0] ml-[2px]">0%</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p className=" text-[16px] text-[#ACAEB0]">1 Star</p>
                        <span className="flex-1 text-[16px] bg-[#EDEEEE] py-[6px] rounded-sm"></span>
                        <p className=" text-[16px] text-[#ACAEB0] ml-[2px]">0%</p>
                    </div>
                    
                    </div>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-medium">Reviews</h2>
                        <p className=" text-[16px] text-[#ACAEB0] mt-3">There are no reviews yet.</p>
                    </div>
                  </div>
                  {/* form */}
                  <div className="lg:w-1/2 ">
                    <h2 className="text-xl md:text-2xl font-bold">
                      Be the first to review “Emelie Schepp Vita”
                    </h2>
                    <p className="text-[16px] text-[#888888]">
                      Your email address will not be published. Required fields
                      are marked <span className="text-red-500">*</span>
                    </p>
                    <div className="w-full  mt-6 md:mt-10">
                      <form className="space-y-5">
                        <div>
                          <label htmlFor="">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full border border-gray-200/80 py-3 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 px-3 rounded-[3px]"
                            type="text"
                            name=""
                            id=""
                          />
                        </div>
                        <div>
                          <label htmlFor="">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full border border-gray-200/80 py-3 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 px-3 rounded-[3px]"
                            type="email"
                            name=""
                            id=""
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-[2px]">
                            <p className="text-[16px]">Your rating <span className="text-red-500">*</span></p>
                            <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                            <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                            <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                            <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>
                            <IoMdStar size={18} className="text-[#F8B81F]"></IoMdStar>  
                          </div>
                        </div>
                        <div>
                          <label htmlFor="">
                            Your review <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name=""
                            id=""
                            className="w-full border border-gray-200/80 py-3 outline-gray-100 transition-all duration-500  focus:outline-primary-800/50 px-3 rounded-[3px]"
                            cols={50}
                            rows={6}
                          ></textarea>
                        </div>

                        <input
                          className="rounded-[3px] py-3 px-6 font-semibold hover:bg-primary-800 flex justify-center items-center  text-primary-800 text-lg border hover:border-primary-800 border-primary-800/50  bg-primary-800/5 transition duration-500 hover:text-white"
                          type="submit"
                          value="Submit Review"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DescReview;
