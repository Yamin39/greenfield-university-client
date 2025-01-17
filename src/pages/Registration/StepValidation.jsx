import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const StepValidation = ({ props }) => {
  const { role, setId, setCurrentStep } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();
    const id = e.target.id.value;

    axios
      .post("http://localhost:5000/auth/validate", { id, role })
      .then((res) => {
        if (res.data.success) {
          setId(id);
          setCurrentStep(3);
          toast.success(res.data?.message);
        } else {
          setError(res.data?.message);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
        setIsLoading(false);
      });
  };
  return (
    <div className="w-full text-center pt-6 pb-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Validation</h2>
        <p className="mt-2 text-sm text-gray-500">Enter your {role} ID given by university</p>
      </div>

      <form onSubmit={handleSubmit} className="my-8 flex w-full max-w-xs mx-auto flex-col items-center justify-center gap-4 sm:gap-6">
        <div className="w-full">
          <input type="text" name="id" placeholder={`${role} ID`} className="w-full p-4 border rounded-xl text-lg font-medium border-gray-300" required />
          {error && <span className="inline-block mt-2 text-sm text-red-500">{error}</span>}
        </div>

        <button className={`w-full p-3 text-lg font-medium text-white rounded-xl bg-primary-700 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}>
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <FaSpinner className="animate-spin" /> Loading...
            </span>
          ) : (
            <span>Next</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default StepValidation;
