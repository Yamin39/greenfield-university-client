import { useParams } from "react-router-dom";
import DescReview from "./DescReview";
import ShopDetailsPage from "./ShopDetailsPage";
import ShopRelatedProduct from "./ShopRelatedProduct";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ShopDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: product = [], isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <ShopDetailsPage product={product}></ShopDetailsPage>
        <DescReview product={product}></DescReview>
        <ShopRelatedProduct></ShopRelatedProduct>
      </div>
    </div>
  );
};

export default ShopDetails;
