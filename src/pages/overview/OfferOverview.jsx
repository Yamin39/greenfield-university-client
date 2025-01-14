const OfferOverview = () => {
   return (
      <div className="px-3 pb-12">
         <div className="max-w-7xl mx-auto rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="space-y-2 p-14 shadow-[0_0_7px_0] rounded-lg shadow-gray-300 hover:shadow-green-300">
               <h1 className="text-6xl sm:text-7xl font-semibold italic font-mono text-primary-700">156</h1>
               <p className="text-xl font-light text-gray-500">Degree & diploma programs offered</p>
            </div>
            <div className="space-y-2 p-14 shadow-[0_0_7px_0] rounded-lg shadow-gray-300 hover:shadow-pink-300">
               <h1 className="text-6xl sm:text-7xl font-semibold italic font-mono text-pink-500">87%</h1>
               <p className="text-xl font-light text-gray-500">Of undergraduate students receive financial aid</p>
            </div>
            <div className="space-y-2 p-14 shadow-[0_0_7px_0] rounded-lg shadow-gray-300 hover:shadow-purple-300">
               <h1 className="text-6xl sm:text-7xl font-semibold italic font-mono text-purple-600">79%</h1>
               <p className="text-xl font-light text-gray-500">Of graduates had two or more internships as students</p>
            </div>


         </div>
      </div>
   );
};

export default OfferOverview;