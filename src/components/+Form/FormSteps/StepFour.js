import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepFour = ({ currentStep }) => {
	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>Podaj adres oraz termin odbioru rzeczy.</FormInfoBanner>
			<div className='form__form'>
				<p>Krok {currentStep}</p>
				<div className='form__group'>
					<h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
					<div className='form__step-four'>
						<div className='container'>
							<div className='form__address'>
								<p>Adres odbioru</p>

								<div className='form__inputBox'>
									<label htmlFor='street'>Ulica</label>
									<input type='text' name='street' id='street' />
								</div>

								<div className='form__inputBox'>
									<label htmlFor='city'>Miasto</label>
									<input type='text' name='city' id='city' />
								</div>

								<div className='form__inputBox'>
									<label htmlFor='postcode'>Kod pocztowy</label>
									<input type='text' name='postcode' id='postcode' />
								</div>

								<div className='form__inputBox'>
									<label htmlFor='phone'>Numer telefonu</label>
									<input type='text' name='phone' id='phone' />
								</div>
							</div>

							<div className='form__collection-date'>
								<p>Termin odbioru</p>

								<div className='form__inputBox'>
									<label htmlFor='date'>Data</label>
									<input type='text' name='date' id='date' />
								</div>

								<div className='form__inputBox'>
									<label htmlFor='hour'>Godzina</label>
									<input type='text' name='hour' id='hour' />
								</div>

								<div className='form__inputBox'>
									<label htmlFor='suggestions'>Uwagi do kuriera</label>
									<textarea
										name='suggestions'
										id='suggestions'
										cols='22'
										rows='5'></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepFour;
