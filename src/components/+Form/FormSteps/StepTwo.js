import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepTwo = () => {
	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak
				poprawnie spakować rzeczy znajdziesz TUTAJ.
			</FormInfoBanner>
			<div className='form__form'>formularz krok 2</div>
		</div>
	);
};

export default StepTwo;
