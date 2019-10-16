import React from "react";
import FormHeader from "./FormHeader";
import { FormSteps } from "./FormSteps";
// import HomeContact from "../+Home/HomeContact";

const Form = () => {
	return (
		<div className='form'>
			<FormHeader />
			<FormSteps />
			{/* <HomeContact /> */}
		</div>
	);
};

export default Form;
