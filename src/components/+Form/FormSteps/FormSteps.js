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
	const [type, setType] = useState("");
	const [bags, setBags] = useState("");
	const [localization, setLocalization] = useState("");
	const [helpGroups, setHelpGroups] = useState([]);
	const [localizationSpecific, setLocalSpecific] = useState("");
	const [step4, setStepFour] = useState("");
	const [form, setForm] = useState({
		type: "",
		bags: "",
		localization: "",
		helpGroups: [],
		localizationSpecific: ""
	});

	const handleChange = (e) => {
		if (e.target.name === "step-one") {
			setType(e.target.value);
		} else if (e.target.name === "step-two") {
			setBags(e.target.value);
		} else if (e.target.name === "localization") {
			setLocalization(e.target.value);
		} else if (e.target.name === "helpGroups") {
			if (!helpGroups.includes(e.target.value)) {
				setHelpGroups([...helpGroups, e.target.value]);
			} else {
				const filtered = helpGroups.filter((value) => value !== e.target.value);
				setHelpGroups([...filtered]);
			}
		} else if (e.target.name === "localizationSpecific") {
			setLocalSpecific(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(
			`szczegóły formularza krok1: ${type} \n krok2: ${bags} \n krok3: ${localization} ${helpGroups} ${localizationSpecific} \n krok4: ${step4}`
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
					type={type}
				/>
				<StepTwo
					currentStep={currentStep}
					handleChange={handleChange}
					bags={bags}
				/>
				<StepThree
					currentStep={currentStep}
					handleChange={handleChange}
					localization={localization}
					helpGroups={helpGroups}
					localizationSpecific={localizationSpecific}
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
