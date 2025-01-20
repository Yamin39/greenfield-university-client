import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

/* eslint-disable react/prop-types */
const StepValidation = ({ props }) => {
  const axiosPublic = useAxiosPublic();
  const { role, setId, setCurrentStep } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();
    const id = e.target.id.value;
    console.log(id);

    axiosPublic
      .post("/auth/validate", { id, role })
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
    <div className="md:w-fit text-center p-10 rounded-xl mx-auto border">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Validation</h2>
        <p className="mt-2 text-sm text-gray-500">Enter your {role} ID given by university</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-xs mx-auto flex-col items-center justify-center gap-4 sm:gap-6">
        <div className="w-full">
          <input
            type="text"
            name="id"
            placeholder={`${role} ID`}
            className="w-full p-4 border rounded-xl text-lg font-medium border-gray-300 outline-none"
            required
          />
          {error && <span className="inline-block mt-2 text-sm text-red-500">{error}</span>}
        </div>

        <div className="w-full">
          <button
            className="w-full p-3 text-lg font-medium text-white rounded-xl bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-3">
                <FaSpinner className="animate-spin" /> Loading...
              </span>
            ) : (
              <span>Next</span>
            )}
          </button>

          <p className="text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-700">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default StepValidation;
