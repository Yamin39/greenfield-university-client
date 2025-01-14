import SharedBanner from "../../shared/SharedBanner";
import AboutUniversity from "./AboutUniversity";
import Apply from "./Apply";
import OfferOverview from "./OfferOverview";
import TuitionFees from "./TuitionFees";
import SharedAbout from "../../shared/SharedAbout";

const Overview = () => {
   return (
      <div>
         <SharedBanner title="Overview" />
         <SharedAbout title="At Stanford, we practice holistic admission. This means that each piece in your application is reviewed as part of an integrated and comprehensive whole."/>
         <OfferOverview />
         <AboutUniversity />
         <TuitionFees />
         <Apply />
      </div>
   );
};

export default Overview;