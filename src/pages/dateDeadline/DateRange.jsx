import analytics from '../../assets/icons/analytics.png'
import paintBucket from '../../assets/icons/paint-bucket.png'
import briefcase from '../../assets/icons/briefcase.png'
import computer from '../../assets/icons/computer.png'


const DateRange = () => {

    const allDateRange = [
        {
            icon: briefcase,
            title: 'Business & Administration',
            student: 'Wednesday, 30 January',
            students: 'Thursday, 1 – Thursday 2 January',
            start:'Monday, 5 January',
            end:'Friday 18 March',
            recess:'Monday 20 April – Friday 1 May'
        },
        {
            icon: computer,
            title: 'Computer Science & A.I.',
            student: 'Wednesday, 30 January',
            students: 'Thursday, 1 – Thursday 2 January',
            start:'Monday, 5 January',
            end:'Friday 18 March',
            recess:'Monday 20 April – Friday 1 May'
        },
        {
            icon: paintBucket,
            title: 'Art & Design',
            student: 'Wednesday, 30 January',
            students: 'Thursday, 1 – Thursday 2 January',
            start:'Monday, 5 January',
            end:'Friday 18 March',
            recess:'Monday 20 April – Friday 1 May'
        },
        {
            icon: analytics,
            title: 'Economics',
            student: 'Wednesday, 30 January',
            students: 'Thursday, 1 – Thursday 2 January',
            start:'Monday, 5 January',
            end:'Friday 18 March',
            recess:'Monday 20 April – Friday 1 May'
        },
    ]
  
    return (
        <div className="bg-[#F6F4EE]">
              <div className="max-w-7xl mx-auto px-5 pb-12 pt-12 md:pt-16 lg:pt-24 space-y-10">
                <div className="flex flex-col gap-y-5">
                    {allDateRange.map((item, index) => <div key={index} className=" bg-[#FFFFFF] rounded-md p-6 md:p-10 shadow-box">
                    <p className="flex items-center gap-x-4 text-">
                      <img className="w-[30px] h-[25px] " src={item.icon} alt="" />
                      <span className="text-xl md:text-2xl text-primary-700 font-bold">{item.title}</span>
                    </p>
        
                    <div className="mx-[10px]  md:mx-7 lg:mx-9  py-6">
                      <h2 className="text-lg font-medium  ">Domestic Fees</h2>
                      <ul className="relative transition duration-500 top-0 left-0 w-full space-y-2  mt-4 rounded-md ">
                        <li>
                          <div className=" space-y-3">
                            <h2 className="flex flex-row justify-between px-5 items-center bg-primary-700/30 text-[16px] md:text-lg font-medium py-3 rounded-md">
                              <span className="w-1/2">January</span>
                              <span className="w-1/2">Date</span>
                            </h2>
                            <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                              <span className="w-1/2">New Student Orientation</span>
                              <span className="w-1/2">{item.student}</span>
                            </p>
                            <p className="flex flex-row justify-between px-5 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                              <span className="w-1/2">New Student Orientation</span>
                              <span className="w-1/2">{item.students}</span>
                            </p>
                            <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                              <span className="w-1/2">Term Start</span>
                              <span className="w-1/2">{item.start}</span>
                            </p>
                            <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] border-b border-gray-200">
                              <span className="w-1/2">Term End</span>
                              <span className="w-1/2">{item.end}</span>
                            </p>
                            <p className="flex flex-row justify-between px-5 py-3 items-center text-[16px] md:text-lg font-medium text-[#656561] ">
                              <span className="w-1/2">Recess</span>
                              <span className="w-1/2">{item.recess}</span>
                            </p>
                            
                          </div>
                        </li>
                      </ul>
                    </div>
                </div>)}
                </div>
              </div>
            </div>
    );
};

export default DateRange;