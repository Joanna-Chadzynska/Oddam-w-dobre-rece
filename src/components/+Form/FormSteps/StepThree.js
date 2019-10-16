import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepThree = ({ currentStep }) => {
	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
				wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
				celu ich pomocy.
			</FormInfoBanner>
			<div className='form__form'>
				<p>Krok {currentStep}</p>
				<div className='form__group'>
					<h1>Lokalizacja</h1>
					<div className='form__step-three'>
						<div className='form__location'>
							<select>
								<option value=''>--wybierz--</option>
								<option value='poznan'>Poznań</option>
								<option value='warszawa'>Warszawa</option>
								<option value='krakow'>Kraków</option>
								<option value='wroclaw'>Wrocław</option>
								<option value='katowice'>Katowice</option>
							</select>
						</div>
						<div className='form__help-groups'>
							<p>Komu chcesz pomóc?</p>
							<input type='checkbox' name='kids' id='kids' />
							<label htmlFor='kids'>dzieciom</label>
							<input type='checkbox' name='single-moms' id='single-moms' />
							<label htmlFor='single-moms'>samotnym matkom</label>
							<input type='checkbox' name='homeless' id='homeless' />
							<label htmlFor='homeless'>bezdomnym</label>
							<input type='checkbox' name='disabled' id='disabled' />
							<label htmlFor='disabled'>niepełnosprawnym</label>
							<input type='checkbox' name='seniors' id='seniors' />
							<label htmlFor='seniors'>osobom starszym</label>
						</div>
						<div className='form__localizaton-specific'>
							<p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
							<input type='text' name='localizationSpecific' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepThree;
