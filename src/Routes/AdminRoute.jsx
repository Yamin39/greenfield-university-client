import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const role = useRole(user?.email);
   console.log(role);

   if (loading) {
      return <div className="w-full h-screen flex items-center justify-center">
         <p className="text-2xl font-semibold text-primary-700 font-serif">Loading...</p>
      </div>
   }
   if (user && role === 'admin') {
      return children;
   }
   return <Navigate to='/'></Navigate>
};

export default AdminRoute;