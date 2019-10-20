import React from "react";
import { CustomTitle } from "../../Layouts";

const ThankYou = ({ currentStep }) => {
	if (currentStep !== 6) {
		return null;
	}
	return (
		<div className='form__step form__wrapper'>
			<div className='form__form'>
				<div className='form__thank-you'>
					<CustomTitle id='form__thank-you--title'>
						Dziękujemy za przesłanie formularza. <br></br>Na maila prześlemy
						wszelkie <br /> informacje o odbiorze.
					</CustomTitle>
				</div>
			</div>
		</div>
	);
};

export default ThankYou;
