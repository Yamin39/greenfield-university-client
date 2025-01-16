import { useState } from "react";
import SharedBanner from "../../shared/SharedBanner";
import Steps from "./Steps";

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      <SharedBanner title={"Registration"}></SharedBanner>
      <div className="mt-12">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Steps currentStep={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
