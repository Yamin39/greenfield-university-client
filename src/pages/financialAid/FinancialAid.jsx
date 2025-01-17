import SharedAbout from "../../shared/SharedAbout";
import SharedBanner from "../../shared/SharedBanner";
import AidPercent from "./AidPercent";
import AidProcess from "./AidProcess";
import TypesOfAid from "./TypesOfAid";


const FinancialAid = () => {
    return (
        <div>
            <SharedBanner title={'Financial Aid'}></SharedBanner>
            <SharedAbout title={'At Stanford, we practice holistic admission. This means that each piece in your application is reviewed as part of an integrated and comprehensive whole.'}></SharedAbout>
            <AidPercent></AidPercent>
            <AidProcess></AidProcess>
            <TypesOfAid></TypesOfAid>
        </div>
    );
};

export default FinancialAid;