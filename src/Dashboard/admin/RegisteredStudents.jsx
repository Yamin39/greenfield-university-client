import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "../DashboardTitle";

const RegisteredStudents = () => {
    const axiosPublic = useAxiosPublic();

    const { data: studentsData = [] } = useQuery({
       queryKey: ['students'],
       queryFn: async () => {
          const res = await axiosPublic.get('/students')
          return res.data;
       }
    })
  return (
    <div>
      <DashboardTitle title="Registered Students" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  justify-between gap-8">
        {studentsData.map((item, i) =>(
            <div key={i} className="shadow-box p-5 bg-white rounded-lg">
            <div className="flex  space-x-3 border-b border-gray-200 pb-5">
              <div className=" ">
                <img className="rounded-full w-[60px] h-[60px]" src={item?.imgURL} alt="pic" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{item?.name}</h2>
                <p className="text-[16px] text-[#b0aeae]">{item?.address ? item?.address : "No address"}</p>
              </div>
            </div>
            <div className=" pt-5">
              <h2 className="text-[16px] font-semibold pb-3">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className=" ">
                      <p className="text-[14px] text-[#b0aeae]">Full Name</p>
                      <p className="text-[14px] font-semibold">{item?.name}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#b0aeae]">Email address</p>
                      <p className="text-[14px] font-semibold">{item?.email ? item?.email : "No email address"}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#E0E0E0]">Phone</p>
                      <p className="text-[14px] font-semibold">{item?.phoneNumber ? item?.phoneNumber : "No phone number "}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#b0aeae]">Bio</p>
                      <p className="text-[14px] font-semibold">{item?.bio ? item?.bio : "No bio"}</p>
                  </div>
              </div>
            </div>
            <div className="pt-2">
              <h2 className="text-[15px] font-semibold py-3">Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className=" ">
                      <p className="text-[14px] text-[#b0aeae]">Department</p>
                      <p className="text-[14px] font-semibold">{item?.department ? item?.department : "No department name"}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#b0aeae]">City/State</p>
                      <p className="text-[14px] font-semibold">{item?.address ? item?.address : "No city/state address"}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#b0aeae]">University ID</p>
                      <p className="text-[14px] font-semibold">{item?.universityId}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#b0aeae]">Programme</p>
                      <p className="text-[14px] font-semibold">{item?.programme}</p>
                  </div>
                  <div className="">
                      <p className="text-[14px] text-[#b0aeae]">Year</p>
                      <p className="text-[14px] font-semibold">{item?.year}</p>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisteredStudents;
