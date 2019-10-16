import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepTwo = ({ currentStep }) => {
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
						<label>
							Liczba 60l worków:
							<select>
								<option value=''>--wybierz--</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepTwo;
