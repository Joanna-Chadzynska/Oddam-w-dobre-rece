import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
// import { FormInfoBanner } from "../../Layouts";

const FormSteps = () => {
	return (
		<div className='form__steps-main '>
			<StepOne />
			<StepTwo />
			<StepThree />
			<StepFour />
			<Summary />
			<ThankYou />
		</div>
	);
};

export default FormSteps;
