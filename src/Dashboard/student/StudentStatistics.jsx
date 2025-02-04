import { useQuery } from "@tanstack/react-query";
import { NotebookPen } from "lucide-react";
import { FaQuestion } from "react-icons/fa";
import { FaCircleCheck, FaGraduationCap } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { PiBookOpenTextFill } from "react-icons/pi";
import LoadingModal from "../../components/LoadingModal";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const StudentStatistics = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: studentStatistics = {}, isLoading } = useQuery({
    queryKey: ["studentStatistics"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/studentStatistics?email=${user.email}`);
      return res.data;
    },
  });

  console.log(studentStatistics);

  // const shades = [
  //     {
  //       primary: '#5248B5',
  //       secondary: '#F0EEFD',
  //       name: 'Purple'
  //     },
  //     {
  //       primary: '#2563EB',
  //       secondary: '#EFF6FF',
  //       name: 'Blue'
  //     },
  //     {
  //       primary: '#16A34A',
  //       secondary: '#F0FDF4',
  //       name: 'Green'
  //     },
  //     {
  //       primary: '#DC2626',
  //       secondary: '#FEF2F2',
  //       name: 'Red'
  //     },
  //     {
  //       primary: '#EA580C',
  //       secondary: '#FFF7ED',
  //       name: 'Orange'
  //     },
  //     {
  //       primary: '#7C3AED',
  //       secondary: '#F5F3FF',
  //       name: 'Violet'
  //     }
  //   ];

  if (isLoading) return <LoadingModal text={"Loading..."} />;
  return (
    <div className="max-w-7xl mx-auto pb-12 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Enrolled Courses */}
        <div className="flex justify-between items-center relative border border-[#f0f0f0af] shadow py-[25px] px-[30px] rounded-[14px]">
          <div>
            <h4 className="text-[#1E1E2F] text-3xl font-semibold leading-[1.1]">{studentStatistics?.enrolledCourses || 0}</h4>
            <p className="text-[#6C7275] text-[15px]">Enrolled Courses</p>
          </div>
          <div className="size-[60px] flex-col justify-center items-center bg-[#F0EEFD] leading-[58px] text-center inline-flex rounded-[50%]">
            <FaGraduationCap className="size-[22px] text-[#5248B5]" />
          </div>
        </div>

        {/* Books Purchased */}
        <div className="flex justify-between items-center relative border border-[#f0f0f0af] shadow py-[25px] px-[30px] rounded-[14px]">
          <div>
            <h4 className="text-[#1E1E2F] text-3xl font-semibold leading-[1.1]">{studentStatistics?.purchasedBooks || 0}</h4>
            <p className="text-[#6C7275] text-[15px]">Books Purchased</p>
          </div>
          <div className="size-[60px] flex-col justify-center items-center bg-[#EFF6FF] leading-[58px] text-center inline-flex rounded-[50%]">
            <PiBookOpenTextFill className="size-[22px] text-[#2563EB]" />
          </div>
        </div>

        {/* Queries Submitted */}
        <div className="flex justify-between items-center relative border border-[#f0f0f0af] shadow py-[25px] px-[30px] rounded-[14px]">
          <div>
            <h4 className="text-[#1E1E2F] text-3xl font-semibold leading-[1.1]">{studentStatistics?.queries || 0}</h4>
            <p className="text-[#6C7275] text-[15px]">Queries Submitted</p>
          </div>
          <div className="size-[60px] flex-col justify-center items-center bg-[#F5F3FF] leading-[58px] text-center inline-flex rounded-[50%]">
            <FaQuestion className="size-[22px] text-[#7C3AED]" />
          </div>
        </div>

        {/* Blogs Written */}
        <div className="flex justify-between items-center relative border border-[#f0f0f0af] shadow py-[25px] px-[30px] rounded-[14px]">
          <div>
            <h4 className="text-[#1E1E2F] text-3xl font-semibold leading-[1.1]">{studentStatistics?.blogs || 0}</h4>
            <p className="text-[#6C7275] text-[15px]">Blogs Written</p>
          </div>
          <div className="size-[60px] flex-col justify-center items-center bg-[#FEF2F2] leading-[58px] text-center inline-flex rounded-[50%]">
            <NotebookPen className="size-[22px] text-[#DC2626]" />
          </div>
        </div>

        {/* Blogs Approved */}
        <div className="flex justify-between items-center relative border border-[#f0f0f0af] shadow py-[25px] px-[30px] rounded-[14px]">
          <div>
            <h4 className="text-[#1E1E2F] text-3xl font-semibold leading-[1.1]">{studentStatistics?.approvedBlogs || 0}</h4>
            <p className="text-[#6C7275] text-[15px]">Blogs Approved</p>
          </div>
          <div className="size-[60px] flex-col justify-center items-center bg-[#F0FDF4] leading-[58px] text-center inline-flex rounded-[50%]">
            <FaCircleCheck className="size-[22px] text-[#16A34A]" />
          </div>
        </div>

        {/* Blogs Rejected */}
        <div className="flex justify-between items-center relative border border-[#f0f0f0af] shadow py-[25px] px-[30px] rounded-[14px]">
          <div>
            <h4 className="text-[#1E1E2F] text-3xl font-semibold leading-[1.1]">{studentStatistics?.rejectedBlogs || 0}</h4>
            <p className="text-[#6C7275] text-[15px]">Blogs Rejected</p>
          </div>
          <div className="size-[60px] flex-col justify-center items-center bg-[#FFF7ED] leading-[58px] text-center inline-flex rounded-[50%]">
            <IoIosCloseCircle className="size-[22px] text-[#EA580C]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentStatistics;
