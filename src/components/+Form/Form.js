import React from "react";
import FormHeader from "./FormHeader";
import { FormSteps } from "./FormSteps";
import HomeContact from "../+Home/HomeContact";

const Form = ({ history }) => (
	<div className='form'>
		<FormHeader />
		<FormSteps history={history} />
		<HomeContact />
	</div>
);

export default Form;
