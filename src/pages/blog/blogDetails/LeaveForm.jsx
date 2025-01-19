

const LeaveForm = () => {
    return (
        <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <div className=" ">
          <h2 className="text-3xl md:text-4xl font-semibold">Leave a Reply</h2>
          <p className="text-[16px] text-[#888888]">Your email address will not be published. Required fields are marked *</p>          
          <div className="w-full sm:w-11/12 md:w-3/5 mt-6 md:mt-10">
            <form className="space-y-5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                    <input className="w-full shadow-box py-3 outline-[.5px] outline-primary-800/80 px-3 rounded-[3px]" type="text" name="" id="" placeholder="Name*"/>
                    <input className="w-full shadow-box py-3  px-3 rounded-[3px] outline-primary-800/80" type="email" name="" id="" placeholder="Email*"/>
                </div>
                <input className="w-full shadow-box py-3  px-3 rounded-[3px] outline-primary-800/80" type="text" name="" id="" placeholder="Website"/>
                <textarea name="" id="" className="w-full shadow-box py-2  px-3 rounded-[3px] outline-primary-800/80" placeholder="Comment" cols={50} rows={6}></textarea>
                <input className="rounded-md py-3 px-6 font-semibold hover:bg-primary-800 flex justify-center items-center  text-primary-800 text-lg border hover:border-primary-800 border-primary-800/50  bg-primary-800/5 transition duration-500 hover:text-white" type="submit"  value="Post a comment" />
            </form>
            </div>
        </div>
      </div>
    </div>
    );
};

export default LeaveForm;