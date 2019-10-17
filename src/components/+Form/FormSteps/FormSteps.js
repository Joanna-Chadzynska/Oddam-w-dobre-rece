import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
// import { FormInfoBanner } from "../../Layouts";

const FormSteps = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [step1, setStepOne] = useState("");
	const [step2, setStepTwo] = useState("");
	const [step3, setStepThree] = useState("");
	const [step4, setStepFour] = useState("");

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			`szczegóły formularza krok1: ${step1} \n krok2: ${step2} \n krok3: ${step3} \n krok4: ${step4}`
		);
	};

	const _next = () => {
		let nextStep = currentStep;
		nextStep = currentStep >= 2 ? 3 : nextStep + 1;

		setCurrentStep(nextStep);
	};

	const _prev = () => {
		let prevStep = currentStep;
		prevStep = prevStep <= 1 ? 1 : prevStep;
		setCurrentStep(prevStep);
	};

	return (
		<div className='form__steps-main '>
			<form onSubmit={handleSubmit}>
				<StepOne
					currentStep={currentStep}
					handleChange={handleChange}
					step1={step1}
				/>
				<StepTwo
					currentStep={currentStep}
					handleChange={handleChange}
					step2={step2}
				/>
				<StepThree
					currentStep={currentStep}
					handleChange={handleChange}
					step3={step3}
				/>
				<StepFour
					currentStep={currentStep}
					handleChange={handleChange}
					step4={step4}
				/>
				<Summary currentStep={currentStep} handleChange={handleChange} />

				<ThankYou currentStep={currentStep} handleChange={handleChange} />
			</form>
		</div>
	);
};

export default FormSteps;
