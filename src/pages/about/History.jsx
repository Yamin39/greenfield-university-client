import history from '../../assets/images/history.webp'
import library from '../../assets/images/library.webp'
import student5 from '../../assets/images/student5.png'
import university from '../../assets/images/university.png'


const History = () => {
  return (
    <div className="bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-5  py-12 md:py-16 lg:py-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-x-10 gap-y-20">
            
            <img src={history} alt="pic" />
            <div>
                <h2 className='text-4xl md:text-7xl  text-primary-800'>1889</h2>
                <p className="text-xl py-5 lg:w-4/5 text-[#57585E]">Dr. Wright opens a new campus on thirty-two acres on University Boulevard donated by Cabell Outlaw, Jr. (Class of 1937).</p>
            </div>
            <div>
                <h2 className='text-4xl md:text-7xl  text-primary-800'>1889</h2>
                <p className="text-xl py-5 lg:w-4/5 text-[#57585E]">Dr. Wright opens a new campus on thirty-two acres on University Boulevard donated by Cabell Outlaw, Jr. (Class of 1937).</p>
            </div>
            <img src={library} alt="pic" />
            <img className='w-[470px] h-[320px]' src={student5} alt="pic" />
            <div>
                <h2 className='text-4xl md:text-7xl  text-primary-800'>1889</h2>
                <p className="text-xl py-5 lg:w-4/5 text-[#57585E]">Dr. Wright opens a new campus on thirty-two acres on University Boulevard donated by Cabell Outlaw, Jr. (Class of 1937).</p>
            </div>
            <div>
                <h2 className='text-4xl md:text-7xl  text-primary-800'>1889</h2>
                <p className="text-xl py-5 lg:w-4/5 text-[#57585E]">Dr. Wright opens a new campus on thirty-two acres on University Boulevard donated by Cabell Outlaw, Jr. (Class of 1937).</p>
            </div>
            <img src={university} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default History;
