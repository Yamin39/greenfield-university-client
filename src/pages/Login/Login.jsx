import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto pb-12 pt-28">
      <h1 className="text-3xl font-bold text-center">Login</h1>

      <Link to="/registration" className="block text-center mt-4 text-blue-500">
        Registration
      </Link>
    </div>
  );
};

export default Login;
