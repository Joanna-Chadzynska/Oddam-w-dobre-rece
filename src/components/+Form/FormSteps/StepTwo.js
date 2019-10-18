import React, { useState } from "react";
import { FormInfoBanner } from "../../Layouts";

const StepTwo = ({
	bags,
	currentStep,
	handleChange,
	previousButton,
	nextButton
}) => {
	const [isArrowUp, setArrowUp] = useState(false);

	const changeArrow = () => {
		setArrowUp(!isArrowUp);
	};

	if (currentStep !== 2) {
		return null;
	}

	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak
				poprawnie spakować rzeczy znajdziesz TUTAJ.
			</FormInfoBanner>
			<div className='form__form'>
				<p>Krok {currentStep}</p>
				<div className='form__group'>
					<h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
					<div className='form__step-two'>
						<label>Liczba 60l worków:</label>
						<select
							onClick={changeArrow}
							className={isArrowUp ? "arrowUp" : null}
							onChange={handleChange}
							name='step-two'
							value={bags}>
							<option hidden>— wybierz —</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
				</div>

				{previousButton()}
				{nextButton()}
			</div>
		</div>
	);
};

export default StepTwo;
