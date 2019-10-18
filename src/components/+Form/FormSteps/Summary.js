import React from "react";

const Summary = ({ currentStep, previousButton, form }) => {
	if (currentStep !== 5) {
		return null;
	}
	return (
		<div className='form__step form__wrapper'>
			<div className='form__form'>
				<h1>Podsumowanie Twojej darowizny</h1>
				{previousButton()}
				<button type='submit'>Potwierdzam</button>
			</div>
		</div>
	);
};

export default Summary;
