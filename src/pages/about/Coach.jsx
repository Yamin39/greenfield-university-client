import coach1 from '../../assets/images/Coach5.png'
import coach2 from '../../assets/images/Coach6.png'
import coach3 from '../../assets/images/Coach7.png'
import coach4 from '../../assets/images/Coach9.png'

const Coach = () => {
    return (
        <div className="bg-[#F6F4EE]">
              <div className="max-w-7xl mx-auto px-5  py-12 md:py-16 lg:py-24 ">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 items-center justify-between gap-10 ">                  
                    <div className=' group rounded-lg relative overflow-hidden flex flex-col justify-end bg-[#9C9691] '>
                        <img className='transition duration-500   group-hover:scale-125 w-full' src={coach1} alt="pic" />
                        <div className='absolute top-5 left-10'>
                        <h2 className='text-xl md:text-2xl font-semibold text-white'>Rhidiat Gomes</h2>
                        <p className="text-[16px]  text-white">Head Coach</p>
                        </div>
                    </div>
                    <div className=' group rounded-lg relative overflow-hidden flex flex-col justify-end bg-[#89A0AD] '>
                        <img className='transition duration-500   group-hover:scale-125 w-full' src={coach2} alt="pic" />
                        <div className='absolute top-5 left-10'>
                        <h2 className='text-xl md:text-2xl font-semibold text-white'>D. Robin Trakys</h2>
                        <p className="text-[16px]  text-white">Head Coach</p>
                        </div>
                    </div>
                    <div className=' group rounded-lg relative overflow-hidden flex flex-col justify-end bg-[#B4AB9C] '>
                        <img className='transition duration-500   group-hover:scale-125 w-full' src={coach3} alt="pic" />
                        <div className='absolute top-5 left-10'>
                        <h2 className='text-xl md:text-2xl font-semibold text-white'>Palashi Trup</h2>
                        <p className="text-[16px]  text-white">Head Coach</p>
                        </div>
                    </div>
                    <div className=' group rounded-lg  relative overflow-hidden flex flex-col justify-end bg-[#7A7066] '>
                        <img className='transition duration-500  group-hover:scale-125 w-full' src={coach4} alt="pic" />
                        <div className='absolute top-5 left-10'>
                        <h2 className='text-xl md:text-2xl font-semibold text-white'>Debit Fosker</h2>
                        <p className="text-[16px]  text-white">Head Coach</p>
                        </div>
                    </div>
                    
                </div>
              </div>
            </div>
    );
};

export default Coach;