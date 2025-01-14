import SharedBanner from "../../shared/SharedBanner";
import ContactCard from "./ContactCard";
import GetInTouch from "./GetInTouch";
import GoogleMap from "./GoogleMap";

const Contact = () => {
   return (
      <div>
         <SharedBanner title="Contact Us" />
         <GetInTouch />
         <ContactCard />
         <GoogleMap />
      </div>
   );
};

export default Contact;