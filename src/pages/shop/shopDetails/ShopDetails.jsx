import DescReview from "./DescReview";
import ShopDetailsPage from "./ShopDetailsPage";
import ShopRelatedProduct from "./ShopRelatedProduct";

const ShopDetails = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto pb-12 px-3 mt-24">
        <ShopDetailsPage></ShopDetailsPage>
        <DescReview></DescReview>
        <ShopRelatedProduct></ShopRelatedProduct>
      </div>
    </div>
  );
};

export default ShopDetails;
