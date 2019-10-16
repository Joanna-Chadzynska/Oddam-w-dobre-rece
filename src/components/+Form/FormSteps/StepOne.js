import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepOne = ({ currentStep }) => {
	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
				wiedzieć komu najlepiej je przekazać.
			</FormInfoBanner>
			<div className='form__form'>
				<p>Krok {currentStep}/4</p>
				<div className='form__group'>
					<h1>Zaznacz co chcesz oddać: </h1>
					<div className='form__step-one'>
						<div className='form__step-one--input'>
							<input type='radio' name='step-one' id='clothes-ok' />
							<label htmlFor='clothes-ok'>
								ubrania, które nadają się do ponownego użycia
							</label>
						</div>
						<div className='form__step-one--input'>
							<input type='radio' name='step-one' id='clothes-trash' />
							<label htmlFor='clothes-trash'>ubrania do wyrzucenia</label>
						</div>
						<div className='form__step-one--input'>
							<input type='radio' name='step-one' id='toys' />
							<label htmlFor='toys'>zabawki</label>
						</div>
						<div className='form__step-one--input'>
							<input type='radio' name='step-one' id='books' />
							<label htmlFor='books'>książki</label>
						</div>
						<div className='form__step-one--input'>
							<input type='radio' name='step-one' id='other' />
							<label htmlFor='other'>inne</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepOne;
