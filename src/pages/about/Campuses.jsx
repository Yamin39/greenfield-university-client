import { FaLocationDot } from "react-icons/fa6";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import campus1 from "../../assets/images/campus1.jpg";
import campus2 from "../../assets/images/campus2.jpg";
import campus3 from "../../assets/images/campus3.jpg";
import campus4 from "../../assets/images/campus4.jpg";
import campus6 from "../../assets/images/campus6.jpg";

const Campuses = () => {
  return (
    <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5 pb-12 pt-12 md:pt-16 lg:pt-24 space-y-10">
        <Tabs className={`grid grid-cols-1 lg:grid-cols-5 justify-between  gap-10`}>
          <TabList className={" flex flex-col  lg:col-span-2 gap"}>
            <div>
              <h1 className="text-4xl md:text-6xl text-[#031F42] font-medium pb-5">Campuses</h1>
              <p className="text-lg pb-8 text-[#57585E]">
                Acadia University has five campuses, which are located in the most exclusive areas of Moscow, Saint Petersburg and Tashkent.
              </p>
            </div>
            {/* Tab section */}
            <div id="campus-tab-container" className="flex flex-col gap-2">
              <Tab>
                <span
                  className={
                    "hover:text-[#23B9A1]  text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1.5  after:bg-[#23B9A1] after:left-0 relative"
                  }
                >
                  Gorki Campus
                </span>
              </Tab>
              <Tab>
                <span
                  className={
                    "hover:text-[#23B9A1]  text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1.5  after:bg-[#23B9A1] after:left-0 relative"
                  }
                >
                  Skolkovo Campus
                </span>
              </Tab>
              <Tab>
                <span
                  className={
                    "hover:text-[#23B9A1]  text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1.5  after:bg-[#23B9A1] after:left-0 relative"
                  }
                >
                  Saint Petersburg Campus
                </span>
              </Tab>
              <Tab>
                <span
                  className={
                    "hover:text-[#23B9A1]  text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1.5  after:bg-[#23B9A1] after:left-0 relative"
                  }
                >
                  Moscow Campus
                </span>
              </Tab>
              <Tab>
                <span
                  className={
                    "hover:text-[#23B9A1]  text-lg md:text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1.5  after:bg-[#23B9A1] after:left-0 relative"
                  }
                >
                  Moscow Campus
                </span>
              </Tab>
            </div>
          </TabList>
          {/* Tab Panel */}
          <div className={`lg:col-span-3`}>
            <TabPanel className={``}>
              <div className="md:relative">
                <img className="rounded-xl" src={campus1} alt="pic" />
                <div className=" w-full md:absolute bottom-6 left-0 ">
                  <div className="w-full md:w-11/12 rounded-lg p-6 mx-auto bg-white">
                    <div className="md:flex md:justify-between md:items-center space-y-3">
                      <p className=" flex items-center gap-x-3">
                        <span className="border border-primary-800 rounded-full p-[10px]">
                          <FaLocationDot size={16} className="text-primary-800"></FaLocationDot>
                        </span>
                        <span className="text-[#57585E] text-[15px]">
                          197345, Russia, Saint- <br />
                          Petersburg, Mebelnaya, 11A
                        </span>
                      </p>
                      <button className="border rounded-md transition duration-300 hover:bg-primary-800  border-primary-800 py-[5px] px-3 text-primary-800 font-semibold hover:text-white text-lg">
                        <span className="">Find out More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:relative">
                <img className="rounded-xl" src={campus2} alt="pic" />
                <div className=" w-full md:absolute bottom-6 left-0 ">
                  <div className="w-full md:w-11/12 rounded-lg p-6 mx-auto bg-white">
                    <div className="md:flex md:justify-between md:items-center space-y-3">
                      <p className=" flex items-center gap-x-3">
                        <span className="border border-primary-800 rounded-full p-[10px]">
                          <FaLocationDot size={16} className="text-primary-800"></FaLocationDot>
                        </span>
                        <span className="text-[#57585E] text-[15px]">
                          197345, Russia, Saint- <br />
                          Petersburg, Mebelnaya, 11A
                        </span>
                      </p>
                      <button className="border rounded-md transition duration-300 hover:bg-primary-800  border-primary-800 py-[5px] px-3 text-primary-800 font-semibold hover:text-white text-lg">
                        <span className="">Find out More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:relative">
                <img className="rounded-xl" src={campus3} alt="pic" />
                <div className=" w-full md:absolute bottom-6 left-0 ">
                  <div className="w-full md:w-11/12 rounded-lg p-6 mx-auto bg-white">
                    <div className="md:flex md:justify-between md:items-center space-y-3">
                      <p className=" flex items-center gap-x-3">
                        <span className="border border-primary-800 rounded-full p-[10px]">
                          <FaLocationDot size={16} className="text-primary-800"></FaLocationDot>
                        </span>
                        <span className="text-[#57585E] text-[15px]">
                          197345, Russia, Saint- <br />
                          Petersburg, Mebelnaya, 11A
                        </span>
                      </p>
                      <button className="border rounded-md transition duration-300 hover:bg-primary-800  border-primary-800 py-[5px] px-3 text-primary-800 font-semibold hover:text-white text-lg">
                        <span className="">Find out More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:relative">
                <img className="rounded-xl" src={campus4} alt="pic" />
                <div className=" w-full md:absolute bottom-6 left-0 ">
                  <div className="w-full md:w-11/12 rounded-lg p-6 mx-auto bg-white">
                    <div className="md:flex md:justify-between md:items-center space-y-3">
                      <p className=" flex items-center gap-x-3">
                        <span className="border border-primary-800 rounded-full p-[10px]">
                          <FaLocationDot size={16} className="text-primary-800"></FaLocationDot>
                        </span>
                        <span className="text-[#57585E] text-[15px]">
                          197345, Russia, Saint- <br />
                          Petersburg, Mebelnaya, 11A
                        </span>
                      </p>
                      <button className="border rounded-md transition duration-300 hover:bg-primary-800  border-primary-800 py-[5px] px-3 text-primary-800 font-semibold hover:text-white text-lg">
                        <span className="">Find out More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:relative">
                <img className="rounded-xl" src={campus6} alt="pic" />
                <div className=" w-full md:absolute bottom-6 left-0 ">
                  <div className="w-full md:w-11/12 rounded-lg p-6 mx-auto bg-white">
                    <div className="md:flex md:justify-between md:items-center space-y-3">
                      <p className=" flex items-center gap-x-3">
                        <span className="border border-primary-800 rounded-full p-[10px]">
                          <FaLocationDot size={16} className="text-primary-800"></FaLocationDot>
                        </span>
                        <span className="text-[#57585E] text-[15px]">
                          197345, Russia, Saint- <br />
                          Petersburg, Mebelnaya, 11A
                        </span>
                      </p>
                      <button className="border rounded-md transition duration-300 hover:bg-primary-800  border-primary-800 py-[5px] px-3 text-primary-800 font-semibold hover:text-white text-lg">
                        <span className="">Find out More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Campuses;
