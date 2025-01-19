
import coach1 from "../../../assets/images/Coach1.png";
import coach2 from "../../../assets/images/Coach2.png";
const Comments = () => {
  const blogData = [
    {
      name: "Adword Norton",
      pic: coach1,
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam.",
    },
    {
      name: "Stave Martine",
      pic: coach2,
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam.",
    },
  ];
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div className=" ">
          <h2 className="text-xl md:text-2xl font-bold">3 Comments</h2>
          <div className="md:w-1/2 mt-8 space-y-3">
            {blogData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 space-y-6 pb-5 ">
                <div className="flex justify-between gap-6">
                  <span className="w-24 h-24  ">
                    <img className="bg-gray-100  rounded-full " src={item.pic} alt="" />
                  </span>
                  <div>
                    <h2 className="text-[18px] md:text-[20px] font-semibold pb-1 ">
                      {item.name}
                    </h2>
                    <p className="text-sm text-[#888888] pb-2">{new Date().toLocaleString()}</p>
                    <p className="text-[16px] text-[#888888]">{item.desc}</p>
                    
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
