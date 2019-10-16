import React from "react";
import { CustomTitle, StepsDiamonds } from "../Layouts";
const FormHeader = () => {
	return (
		<div className='form__header'>
			<div className='form__hero'></div>
			<br />
			<div className='form__mainPanel'>
				<div className='form__mainBox'>
					<CustomTitle>
						Oddaj rzeczy, których już nie chcesz <br />
						<span>potrzebującym</span>
					</CustomTitle>
					<h1 className='form__mainTitle'>Wystarczą 4 proste kroki:</h1>
					<StepsDiamonds />
				</div>
			</div>
		</div>
	);
};

export default FormHeader;
