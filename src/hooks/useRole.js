import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useRole = (email) => {
  const axiosPublic = useAxiosPublic();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (email) {
      axiosPublic.get(`/auth/role?email=${email}`).then((res) => {
        // console.log(res.data);
        setUserRole(res.data.role);
      });
    }
  }, [email]);

  return userRole;
};

export default useRole;
