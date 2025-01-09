import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { GiCheckMark } from "react-icons/gi";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#FFFFFF]  mt-28 mb-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8  justify-center lg:justify-between">
        <div>
          <h2 className="text-lg md:text-xl  uppercase text-[#808080]  font-semibold">
            About Us
          </h2>
          <h1 className="text-3xl md:text-[42px]  text-[#181818] font-bold mt-6 leading-tight">
            We Provide Best <span className="text-[#1AB69D]">Education</span>{" "}
            Services For You
          </h1>
          <img
            className="w-[130px] h-[15px] mt-4"
            src="https://i.ibb.co.com/hH8Jpm2/about-Style.png"
            alt=""
          />
          <div className="mt-12">
            <Tabs>
              <TabList>
                <Tab>
                  {" "}
                  <span
                    className={
                      "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                    }
                  >
                    About EduBlink
                  </span>
                </Tab>
                <Tab>
                  <span
                    className={
                      "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                    }
                  >
                    Our Mission
                  </span>
                </Tab>
                <Tab>
                  <span
                    className={
                      "hover:text-red-500 text-xl font-semibold duration-300 after:w-0 hover:after:w-full after:duration-300 after:h-0.5 after:absolute after:-bottom-1 after:bg-red-500 after:left-0 relative"
                    }
                  >
                    Our Vision
                  </span>
                </Tab>
              </TabList>

              <TabPanel>
                <div>
                  <p className="text-[#888888] text-lg my-6">
                    Magna aliquaenim minim veniam quis nostrud exercitation
                    ullamco laborisLorem ipsum dolor sit amet consectetur
                    adipisicing elit sed do eius tempor incididunt labore.
                  </p>
                  <div className="mt-4 space-y-3">
                    <p className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#181818]">
                      <GiCheckMark
                        size={25}
                        className="text-[#EE4A62] "
                      ></GiCheckMark>{" "}
                      <span>Education award achived</span>{" "}
                    </p>
                    <p className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#181818]">
                      <GiCheckMark
                        size={25}
                        className="text-[#EE4A62] "
                      ></GiCheckMark>{" "}
                      <span>Available online courses</span>{" "}
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <p className="text-[#888888] text-lg my-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa.
                  </p>
                  <div className="mt-4 space-y-3">
                    <p className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#181818]">
                      <GiCheckMark
                        size={25}
                        className="text-[#EE4A62] "
                      ></GiCheckMark>{" "}
                      <span>Industry Expert Instructor</span>{" "}
                    </p>
                    <p className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#181818]">
                      <GiCheckMark
                        size={25}
                        className="text-[#EE4A62] "
                      ></GiCheckMark>{" "}
                      <span>Up-to-Date Course Content</span>{" "}
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <p className="text-[#888888] text-lg my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exer.
                  </p>
                  <div className="mt-4 space-y-3">
                    <p className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#181818]">
                      <GiCheckMark
                        size={25}
                        className="text-[#EE4A62] "
                      ></GiCheckMark>{" "}
                      <span>Online Remote Learning</span>{" "}
                    </p>
                    <p className="text-lg flex flex-row gap-x-5 items-center font-semibold text-[#181818]">
                      <GiCheckMark
                        size={25}
                        className="text-[#EE4A62] "
                      ></GiCheckMark>{" "}
                      <span>Lifetime Access For Learning</span>{" "}
                    </p>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
        {/* Right side */}
        <div className="">
          <div className="relative flex flex-col  lg:items-center">
            <img
              className="rounded-xl w-[390px] h-[390px]"
              src="https://i.ibb.co.com/prPywNG/about-1.webp"
              alt="pic"
            />
            <img
              className="absolute hidden md:block  md:translate-x-4 transition  rounded-xl md:right-64 md:-bottom-16 lg:-right-3 lg:-bottom-16"
              src="https://i.ibb.co.com/RvM0dkK/about-2.webp"
              alt="pic"
            />
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="my-36">
        <AboutCard></AboutCard>
      </div>
    </div>
  );
};

export default About;
