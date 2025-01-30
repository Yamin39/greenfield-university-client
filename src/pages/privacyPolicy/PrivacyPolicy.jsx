import SharedBanner from "../../shared/SharedBanner";
import PrivacyPolicyDoc from "./PrivacyPolicyDoc";


const PrivacyPolicy = () => {
    return (
        <div>
            <SharedBanner title={'Privacy Policy'}></SharedBanner>
            <div className="bg-[#EAECF3]">
            <PrivacyPolicyDoc></PrivacyPolicyDoc>
            </div>
        </div>
    );
};

export default PrivacyPolicy;