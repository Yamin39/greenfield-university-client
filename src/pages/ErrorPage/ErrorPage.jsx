import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
   const navigate = useNavigate();

   return (
      <div className="w-full h-screen flex items-center justify-center flex-col space-y-6">
         <h2 className="text-4xl font-semibold text-red-500">404 page is not found!</h2>
         <div className="space-x-6 *:border-2  *:border-primary-700 *:p-2.5 *:inline-block *:px-6 hover:*:bg-primary-700 *:cursor-pointer hover:*:text-white *:duration-300">
            <span onClick={() => navigate(-1)}>Go Back</span>
            <Link to='/'>Go Home</Link>
         </div>
         
      </div>
   );
};

export default ErrorPage;