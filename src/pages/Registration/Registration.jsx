import { useState } from "react";
import SharedBanner from "../../shared/SharedBanner";
import StepRole from "./StepRole";
import Steps from "./Steps";

const Registration = () => {
  const [role, setRole] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const props = {
    role,
    setRole,
    currentStep,
    setCurrentStep,
  };
  return (
    <div>
      <SharedBanner title={"Registration"}></SharedBanner>
      <div className="mt-12">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Steps props={props} />

          <div className="pb-12">
            {
              {
                1: <StepRole props={props} />,
                2: <div>Validate</div>,
                3: <div>Details</div>,
              }[currentStep]
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
