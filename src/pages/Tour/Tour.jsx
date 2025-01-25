import SharedBanner from "../../shared/SharedBanner";
import AboutTour from "./AboutTour";
import TourBanner from "./TourBanner";
import TourForm from "./TourForm";

const Tour = () => {
   return (
      <div>
         <SharedBanner title="Schedule A Tour" />
         <TourForm />
         <TourBanner />
         <AboutTour />

      </div>
   );
};

export default Tour;