import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import StepRegister from "./StepRegister";
import StepRole from "./StepRole";
import Steps from "./Steps";
import StepValidation from "./StepValidation";

const Registration = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const props = {
    id,
    setId,
    role,
    setRole,
    currentStep,
    setCurrentStep,
  };
  return (
    <div className="pt-14 sm:pt-28">
      <div className="mt-12">
        <div className="w-11/12 max-w-7xl mx-auto">
          <Steps props={props} />

          <div className="pb-12">
            {
              {
                1: <StepRole props={props} />,
                2: <StepValidation props={props} />,
                3: <StepRegister props={props} />,
              }[currentStep]
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
