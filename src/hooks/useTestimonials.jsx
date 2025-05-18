import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useTestimonials = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: testimonials = [],

    refetch,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/testimonials");
      return data;
    },
  });

  return {
    testimonials,

    refetch,
  };
};
