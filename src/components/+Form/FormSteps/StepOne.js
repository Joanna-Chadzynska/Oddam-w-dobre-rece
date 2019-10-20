import React from "react";
import { FormInfoBanner, ErrorInfoForm } from "../../Layouts";

const StepOne = ({ currentStep, handleChange, nextButton, type }) => {
	if (currentStep !== 1) {
		return null;
	}

	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
				wiedzieć komu najlepiej je przekazać.
			</FormInfoBanner>

			<div className='form__form'>
				<p>Krok {currentStep}/4</p>
				<br />
				{!type ? <ErrorInfoForm>Zaznacz jedno pole!</ErrorInfoForm> : <br />}
				<div className='form__group'>
					<h1>Zaznacz co chcesz oddać: </h1>

					<div className='form__step-one'>
						<div className='form__step-one--input'>
							<input
								type='radio'
								name='step-one'
								id='clothes-ok'
								value='ubrania w dobrym stanie'
								onChange={handleChange}
								checked={type === "ubrania w dobrym stanie" ? true : false}
							/>
							<label htmlFor='clothes-ok'>
								ubrania, które nadają się do ponownego użycia
							</label>
						</div>
						<div className='form__step-one--input'>
							<input
								type='radio'
								name='step-one'
								id='clothes-trash'
								value='ubrania w złym stanie'
								onChange={handleChange}
								checked={type === "ubrania w złym stanie" ? true : false}
							/>
							<label htmlFor='clothes-trash'>ubrania do wyrzucenia</label>
						</div>
						<div className='form__step-one--input'>
							<input
								type='radio'
								name='step-one'
								id='toys'
								value='zabawki'
								onChange={handleChange}
								checked={type === "zabawki" ? true : false}
							/>
							<label htmlFor='toys'>zabawki</label>
						</div>
						<div className='form__step-one--input'>
							<input
								type='radio'
								name='step-one'
								id='books'
								value='książki'
								onChange={handleChange}
								checked={type === "książki" ? true : false}
							/>
							<label htmlFor='books'>książki</label>
						</div>
						<div className='form__step-one--input'>
							<input
								type='radio'
								name='step-one'
								id='other'
								value='inne'
								onChange={handleChange}
								checked={type === "inne" ? true : false}
							/>
							<label htmlFor='other'>inne</label>
						</div>
					</div>
				</div>

				{nextButton()}
			</div>
		</div>
	);
};

export default StepOne;
