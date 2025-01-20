import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SharedBanner from "../../shared/SharedBanner";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { logIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        if (/invalid-credential/.test(err.message)) {
          toast.error("Email or Password is wrong");
        } else {
          toast.error(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <SharedBanner title={"Login"}></SharedBanner>
      <div className="mt-12">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg">
              <div className="bg-white p-10 rounded-xl border w-fit">
                <div className="text-center mb-7">
                  <h2 className="text-3xl font-bold text-gray-900">Login</h2>
                  <p className="mt-2 text-sm text-gray-500">Fill up the form to Login to your account</p>
                </div>

                <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
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

                  <button
                    className="w-full p-3 text-lg font-medium text-white rounded-xl bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-3">
                        <FaSpinner className="animate-spin" /> Loading...
                      </span>
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </form>

                <p className="text-gray-600 mt-4 text-center">
                  Don&apos;t have an account?{" "}
                  <Link to="/registration" className="text-primary-700">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
