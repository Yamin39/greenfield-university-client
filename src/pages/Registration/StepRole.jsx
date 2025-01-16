/* eslint-disable react/prop-types */
const StepRole = ({ props }) => {
  const { setCurrentStep, setRole, role } = props;
  return (
    <div className="w-full text-center pt-6 pb-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Role</h2>
        <p className="mt-2 text-sm text-gray-500">What is your role at the university?</p>
      </div>

      <div className="my-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <button
            onClick={() => setRole("Student")}
            className={`w-full sm:w-[200px] p-4 border rounded-xl text-lg font-medium ${
              role === "Student" ? "bg-primary-700/5 border-primary-700 text-primary-700" : "border-gray-300 text-gray-900"
            }`}
          >
            Student
          </button>

          <p className="text-gray-500">Or</p>

          <button
            onClick={() => setRole("Instructor")}
            className={`w-full sm:w-[200px] p-4 border rounded-xl text-lg font-medium ${
              role === "Instructor" ? "bg-primary-700/5 border-primary-700 text-primary-700" : "border-gray-300 text-gray-900"
            }`}
          >
            Instructor
          </button>
        </div>
      </div>

      <button onClick={() => setCurrentStep(2)} className="w-full sm:w-[200px] p-3 text-lg font-medium text-white bg-primary-700 rounded-xl">
        Next
      </button>
    </div>
  );
};

export default StepRole;
