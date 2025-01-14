import SharedBanner from "../../shared/SharedBanner";
import AboutOverview from "./AboutOverview";
import AboutUniversity from "./AboutUniversity";
import Apply from "./Apply";
import OfferOverview from "./OfferOverview";
import TuitionFees from "./TuitionFees";

const Overview = () => {
   return (
      <div>
         <SharedBanner title="Overview" />
         <AboutOverview />
         <OfferOverview />
         <AboutUniversity />
         <TuitionFees />
         <Apply />
      </div>
   );
};

export default Overview;