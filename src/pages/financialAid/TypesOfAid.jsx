const TypesOfAid = () => {

   const aids= [
    {
      title: 'Scholarships',
      photo: 'https://wp.themepure.net/acadia/wp-content/uploads/2024/08/financial-thumb-1.jpg.webp',
      desc:'Acadias commitment to student success important scholarship and creative activity apart from other colleges.'
    },
    {
      title: 'Grants',
      photo: 'https://wp.themepure.net/acadia/wp-content/uploads/2024/08/financial-thumb-2.jpg.webp',
      desc:'Your FAFSA will determine what grants you qualify for—both from The Acadia University & from federal and state government.'
    },
    {
      title: 'Loans',
      photo: 'https://wp.themepure.net/acadia/wp-content/uploads/2024/08/financial-thumb-3.jpg.webp',
      desc:'Many students have used federal and private loans to fund a quality education that would otherwise be out of reach.'
    },
   ]

  return (
    <div className="bg-[#EFEDE7]">
      <div className="max-w-7xl mx-auto   px-5  py-16">
        <h2 className="text-4xl text-[#181818] font-semibold py-10">
          Types of Aid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 items-center  justify-center md:justify-between">
          {aids.map((item, i) => <div key={i} className="  bg-[#F7F5F2]  rounded-xl border  border-gray-200   shadow-box ">
            <div className="overflow-hidden  group  rounded-t-xl">
            <img
              className="w-full object-cover transition-transform duration-300  group-hover:scale-110"
              src={item?.photo}
              alt=""
            />
            </div>
            <div className=" bg-[#EFEDE7] p-8 ">
              <h2 className=" font-semibold text-xl md:text-2xl ">
              {item.title}
              </h2>
              <p className="text-[#5F6167] text-[16px]">
              {item.desc}
              </p>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default TypesOfAid;
