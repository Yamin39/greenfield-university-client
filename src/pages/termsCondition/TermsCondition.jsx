import SharedBanner from "../../shared/SharedBanner";
import ConditionDescribe from "./ConditionDescribe";


const TermsCondition = () => {
    return (
        <div>
            <SharedBanner title={'Terms & Conditions'}></SharedBanner>
            <ConditionDescribe></ConditionDescribe>
        </div>
    );
};

export default TermsCondition;