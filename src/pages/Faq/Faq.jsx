import SharedBanner from "../../shared/SharedBanner";
import Certificate from "./Certificate";
import Questions from "./Questions";

const Faq = () => {
   return (
      <div>
         <SharedBanner title="Faq’s" />
         <Questions />
         <Certificate />

      </div>
   );
};

export default Faq;