/* eslint-disable react/prop-types */
const Steps = ({ currentStep }) => {
  return (
    <div>
      <div className="w-11/12 max-w-7xl mx-auto py-12">
        <ol className="flex items-center justify-center">
          <li className="relative w-full mb-6">
            <div className="flex items-center">
              {currentStep > 1 ? (
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-primary-700/85 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <svg className="w-2.5 h-2.5 text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                </div>
              ) : (
                <div className="z-10 flex items-center relative justify-center w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <span
                    className={`size-full absolute top-0 left-0 bg-gray-200 rounded-full ${currentStep === 1 && "animate-ping"}`}
                    style={{ animationDuration: "2s" }}
                  ></span>
                  <span className="flex w-3 h-3 bg-gray-900 rounded-full relative" />
                </div>
              )}

              <div className="flex w-full bg-gray-200 h-0.5" />
            </div>
            <div className="mt-3">
              <h3 className="relative -left-1 font-medium text-gray-900">Role</h3>
            </div>
          </li>

          <li className="relative w-full mb-6">
            <div className="flex items-center">
              <div className="flex items-center">
                {currentStep > 2 ? (
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-primary-700/85 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                    <svg className="w-2.5 h-2.5 text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5.917 5.724 10.5 15 1.5" />
                    </svg>
                  </div>
                ) : (
                  <div className="z-10 flex items-center relative justify-center w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                    <span
                      className={`size-full absolute top-0 left-0 bg-gray-200 rounded-full ${currentStep === 2 && "animate-ping"}`}
                      style={{ animationDuration: "2s" }}
                    ></span>
                    <span className="flex w-3 h-3 bg-gray-900 rounded-full relative" />
                  </div>
                )}
              </div>
              <div className="flex w-full bg-gray-200 h-0.5" />
            </div>
            <div className="mt-3">
              <h3 className="relative -left-5 font-medium text-gray-900">Validation</h3>
            </div>
          </li>

          <li className="relative w-max mb-6 flex flex-col items-center">
            <div className="flex items-center">
              {currentStep > 3 ? (
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-primary-700/85 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <svg className="w-2.5 h-2.5 text-green-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                </div>
              ) : (
                <div className="z-10 flex items-center relative justify-center w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                  <span
                    className={`size-full absolute top-0 left-0 bg-gray-200 rounded-full ${currentStep === 3 && "animate-ping"}`}
                    style={{ animationDuration: "2s" }}
                  ></span>
                  <span className="flex w-3 h-3 bg-gray-900 rounded-full relative" />
                </div>
              )}
            </div>
            <div className="mt-3">
              <h3 className="font-medium text-gray-900 w-max">Details</h3>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Steps;
