/* eslint-disable react/prop-types */
import commenter from "../../../assets/icons/commenter.png";
import useFormatTimestamp from "../../../hooks/useFormatTimestamp";

const Comments = ({ data }) => {
  const formatTimestamp = useFormatTimestamp;
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">{data?.comments?.length} Comments</h2>
          <div className="md:w-1/2 mt-8 space-y-3">
            {data?.comments?.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 space-y-6 pb-5 ">
                <div className="flex justify-between gap-6">
                  <div className="basis-1/5 max-w-24 max-h-24">
                    <img className="bg-gray-100 size-full rounded-full" src={commenter} alt="commenter image" />
                  </div>
                  <div className="basis-4/5">
                    <h2 className="text-[18px] md:text-[20px] font-semibold pb-1">{item?.name}</h2>
                    <p className="text-sm text-[#888888] pb-2">{formatTimestamp(item?.timestamp)}</p>
                    <p className="text-[16px] text-[#888888]">{item?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
