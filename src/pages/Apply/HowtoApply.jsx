import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import SharedBanner from "../../shared/SharedBanner";

const HowtoApply = () => {
  return (
    <div>
      <SharedBanner title="How To Apply" />

      {/* Original Steps Section */}
      <div className="container mx-auto bg-primary-700/5 w-full flex justify-center items-center">
        <div className="rounded-lg">
          <p className="text-4xl font-semibold">The Application Process</p>
          
          {/* Step 1 */}
          <div className="mb-8">
            <div className="flex gap-4 items-center">
              <p className="p-1 border-2 h-9 font-semibold text-center w-9 border-primary-700 rounded-full">
                1
              </p>
              <h4 className="font-semibold">Complete Application Form</h4>
            </div>
            <div className="max-w-xl mt-4">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, ad? Fugiat iure nobis iusto nesciunt ullam ut minima
                excepturi magnam, dolor, ea voluptatibus atque provident.
              </p>
              <Link
                to="/"
                className="bg-primary-700 flex items-center justify-center w-36 text-white py-2 hover:bg-primary-800 rounded-md group transition-all duration-300 relative mt-2"
              >
                <span className="text-xs">Application Form</span>
                <IoIosArrowRoundForward className="text-2xl group-hover:right-4 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <div className="flex gap-4 items-center">
              <p className="p-1 border-2 h-9 font-semibold text-center w-9 border-primary-700 rounded-full">
                2
              </p>
              <h4 className="font-semibold">Confirmation of Application</h4>
            </div>
            <div className="max-w-xl mt-4">
              <p className="font-light">
                Once your application is submitted, you will receive a confirmation 
                email acknowledging receipt of your application. Please ensure to check 
                your spam folder if you don't receive it in your inbox.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="flex gap-4 items-center">
              <p className="p-1 border-2 h-9 font-semibold text-center w-9 border-primary-700 rounded-full">
                3
              </p>
              <h4 className="font-semibold">Initial Application Review</h4>
            </div>
            <div className="max-w-xl mt-4">
              <p className="font-light">
                Our admissions team will conduct an initial review of your application
                to ensure all required documents have been submitted and meet our basic
                eligibility criteria. This process typically takes 5-7 business days.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
            <div className="flex gap-4 items-center">
              <p className="p-1 border-2 h-9 font-semibold text-center w-9 border-primary-700 rounded-full">
                4
              </p>
              <h4 className="font-semibold">Detailed Application Review</h4>
            </div>
            <div className="max-w-xl mt-4">
              <p className="font-light">
                A thorough evaluation of your application will be conducted by our
                academic committee. This includes review of your academic records,
                personal statement, and other submitted materials.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8">
            <div className="flex gap-4 items-center">
              <p className="p-1 border-2 h-9 font-semibold text-center w-9 border-primary-700 rounded-full">
                5
              </p>
              <h4 className="font-semibold">Payment of Fees</h4>
            </div>
            <div className="max-w-xl mt-4">
              <p className="font-light">
                Upon successful acceptance, you will be required to pay the necessary
                fees to secure your place. Detailed payment instructions will be
                provided in your acceptance letter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements and Deadlines Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-7xl mx-auto lg:flex lg:gap-8 lg:items-start">
          {/* Left Side - Requirements */}
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-semibold text-navy-800 mb-8">The Application Process</h2>
            
            <div className="mb-12">
              <h3 className="text-xl mb-4 font-medium">You will need:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary-700 mt-1">✓</span>
                  <p>You can be admitted at any time during the academic year.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary-700 mt-1">✓</span>
                  <p>If English is not your first language, you will need to demonstrate English language proficiency equivalent to with a minimum of 5.5 in each band and 6.0 in speaking.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary-700 mt-1">✓</span>
                  <p>Contact information for one teacher (or two, maximum) who will complete the Teacher Evaluation form.</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary-700 mt-1">✓</span>
                  <p>Open to students 18 years and over at course commencement</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary-700 mt-1">✓</span>
                  <p>Spiritual Formation Program Requirements</p>
                </div>
              </div>

              <Link
                to="/request-tour"
                className="inline-block bg-primary-700 text-white px-8 py-3 rounded-md mt-8 hover:bg-primary-800 transition-colors duration-300"
              >
                Request a campus tour
              </Link>
            </div>
          </div>

          {/* Right Side - Deadlines Card */}
          <div className="lg:w-1/3 mt-12 px-6 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">Application Deadlines</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <span className="text-primary-700 text-sm">GENERAL</span>
                    <p className="font-medium">October 15</p>
                  </div>
                  <span className="text-gray-600">Early decision I</span>
                </div>

                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <span className="text-primary-700 text-sm">ON CAMPUS</span>
                    <p className="font-medium">November 1</p>
                  </div>
                  <span className="text-gray-600">Early decision II</span>
                </div>

                <div className="flex justify-between items-center border-b pb-4">
                  <div>
                    <span className="text-primary-700 text-sm">ONLINE/HYBRID</span>
                    <p className="font-medium">January 15</p>
                  </div>
                  <span className="text-gray-600">Regular Decision</span>
                </div>

                <div className="flex justify-between items-center pb-4">
                  <div>
                    <span className="text-primary-700 text-sm">CURRENT CONTINUING</span>
                    <p className="font-medium">March 1</p>
                  </div>
                  <span className="text-gray-600">All continuing</span>
                </div>
              </div>

              <Link
                to="/financial-aid"
                className="text-primary-700 font-medium hover:text-primary-800 mt-6 inline-block"
              >
                Visit Financial Aid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoApply;