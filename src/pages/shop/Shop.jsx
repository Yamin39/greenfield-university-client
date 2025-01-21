import ShopContent from "./ShopContent";
import ShopSideBar from "./ShopSideBar";

const Shop = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto py-12 px-3 mt-24">
        {/* flex flex-col  lg:justify-between gap-10 lg:flex-row-reverse lg:max-w-[22rem] xl:max-w-sm shadow-box rounded-xl*/}
        <div className="  grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 lg:justify-between  gap-5">
          <div className="lg:col-span-1 h-auto w-full order-2 lg:order-1  bg-white p-3  ">
            <ShopSideBar></ShopSideBar>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2 bg-white p-3 ">
            <ShopContent></ShopContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
