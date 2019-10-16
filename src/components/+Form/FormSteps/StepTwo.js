import React, { useState } from "react";
import { FormInfoBanner } from "../../Layouts";

const StepTwo = ({ currentStep }) => {
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
							className={isArrowUp ? "arrowUp" : null}>
							<option className={isArrowUp ? "arrowUp" : null}>
								— wybierz —
							</option>
							<option className={isArrowUp ? "arrowUp" : null} value='1'>
								1
							</option>
							<option className={isArrowUp ? "arrowUp" : null} value='2'>
								2
							</option>
							<option className={isArrowUp ? "arrowUp" : null} value='3'>
								3
							</option>
							<option className={isArrowUp ? "arrowUp" : null} value='4'>
								4
							</option>
							<option className={isArrowUp ? "arrowUp" : null} value='5'>
								5
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepTwo;
