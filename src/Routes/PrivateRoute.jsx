import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useAuth()

   if(loading){
      return <div className="w-full h-screen flex items-center justify-center">
         <p className="text-2xl font-semibold text-primary-700 font-serif">Loading...</p>
      </div>
   }
   if (user) {
      return children;
   }
   return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;