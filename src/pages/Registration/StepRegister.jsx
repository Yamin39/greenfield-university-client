import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

/* eslint-disable react/prop-types */
const StepRegister = ({ props }) => {
  const { role, id, setCurrentStep } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const { user, setUser, createUser, updateUserNameAndPhoto } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    let errorMessage = "";

    if (password.length < 6) {
      errorMessage = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(password)) {
      errorMessage = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      errorMessage = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      errorMessage = "Password must contain at least one number";
    } else if (password !== confirmPassword) {
      errorMessage = "Password does not match";
    }

    if (errorMessage) {
      toast.error(errorMessage);
      setIsLoading(false);
      return;
    }

    console.log({ name, email, password, confirmPassword, role, id });

    createUser(email, password)
      .then((res) => {
        updateUserNameAndPhoto(res.user, name, null);
        setUser({ ...user, displayName: name });
        const info = {
          id,
          name,
          email,
          role,
        };

        axiosPublic
          .patch("/auth/register", info)
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              toast.success(res.data?.message);
              setCurrentStep(4);
              setIsLoading(false);
              navigate("/");
            } else {
              toast.error(res.data?.message);
              setIsLoading(false);
            }
          })
          .catch((err) => {
            console.error(err);
            toast.error("Something went wrong! Please try again.");
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg">
        <div className="bg-white p-10 rounded-xl border w-fit">
          <div className="text-center mb-7">
            <h2 className="text-3xl font-bold text-gray-900">Create account</h2>
            <p className="mt-2 text-sm text-gray-500">Fill up the form to create your account</p>
          </div>

          <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
            <input
              className="w-full p-4 border rounded-xl text-lg font-medium border-gray-300 outline-none"
              type="text"
              required
              name="name"
              placeholder="Enter Name here"
            />

            <input
              className="w-full p-4 border rounded-xl text-lg font-medium border-gray-300 outline-none"
              type="email"
              required
              placeholder="Enter Your Email"
              name="email"
            />

            <div className="flex gap-3 items-center size-full p-4 border rounded-xl text-lg font-medium border-gray-300">
              <input type={togglePassword ? "text" : "password"} required name="password" placeholder="Enter Password" className="w-full outline-none" />
              <button type="button" onClick={() => setTogglePassword(!togglePassword)} className="block text-xl">
                {togglePassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            <div className="flex gap-3 items-center size-full p-4 border rounded-xl text-lg font-medium border-gray-300">
              <input
                type={togglePassword ? "text" : "password"}
                required
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full outline-none"
              />
              <button type="button" onClick={() => setTogglePassword(!togglePassword)} className="block text-xl">
                {togglePassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            <button
              className="w-full p-3 text-lg font-medium text-white rounded-xl bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <FaSpinner className="animate-spin" /> Loading...
                </span>
              ) : (
                <span>Register</span>
              )}
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-primary-700">Terms & Conditions</span> and{" "}
            <span className="text-primary-700">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepRegister;
