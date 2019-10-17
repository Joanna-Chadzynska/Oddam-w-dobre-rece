import React, { useState } from "react";
import { FormInfoBanner } from "../../Layouts";

const StepTwo = ({ currentStep, handleChange, bags }) => {
	const [isArrowUp, setArrowUp] = useState(false);

	const changeArrow = () => {
		setArrowUp(!isArrowUp);
	};

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
							name='step-two'>
							<option style={{ display: "none" }}>— wybierz —</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepTwo;
