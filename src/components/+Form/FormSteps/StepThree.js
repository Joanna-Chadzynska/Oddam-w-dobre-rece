import React, { useState } from "react";
import { FormInfoBanner } from "../../Layouts";

const StepThree = ({
	currentStep,
	handleChange,
	localization,
	helpGroups,
	localizationSpecific
}) => {
	const [isArrowUp, setArrowUp] = useState(false);
	// const [isChecked, setChecked] = useState(false);

	const changeArrow = () => {
		setArrowUp(!isArrowUp);
	};
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
							<select
								onClick={changeArrow}
								className={isArrowUp ? "arrowUp" : null}
								name='localization'
								onChange={handleChange}>
								<option style={{ display: "none" }}>--wybierz--</option>
								<option value='Poznań'>Poznań</option>
								<option value='Warszawa'>Warszawa</option>
								<option value='Kraków'>Kraków</option>
								<option value='Wrocław'>Wrocław</option>
								<option value='Katowice'>Katowice</option>
							</select>
						</div>
						<div className='form__help-groups'>
							<p>Komu chcesz pomóc?</p>
							<input
								type='checkbox'
								name='helpGroups'
								id='kids'
								value='kids'
								onChange={handleChange}
							/>
							<label htmlFor='kids'>dzieciom</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='single-moms'
								value='single moms'
								onChange={handleChange}
							/>
							<label htmlFor='single-moms'>samotnym matkom</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='homeless'
								value='homeless'
								onChange={handleChange}
							/>
							<label htmlFor='homeless'>bezdomnym</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='disabled'
								value='disabled people'
								onChange={handleChange}
							/>
							<label htmlFor='disabled'>niepełnosprawnym</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='seniors'
								value='seniors'
								onChange={handleChange}
							/>
							<label htmlFor='seniors'>osobom starszym</label>
						</div>
						<div className='form__localizaton-specific'>
							<p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
							<input
								type='text'
								name='localizationSpecific'
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StepThree;
