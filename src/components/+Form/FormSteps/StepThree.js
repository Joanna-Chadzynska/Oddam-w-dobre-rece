import React, { useState } from "react";
import { FormInfoBanner, ErrorInfoForm } from "../../Layouts";

const StepThree = ({
	currentStep,
	handleChange,
	nextButton,
	previousButton,
	localization,
	helpGroups,
	localizationSpecific
}) => {
	const [isArrowUp, setArrowUp] = useState(false);

	const changeArrow = () => {
		setArrowUp(!isArrowUp);
	};

	if (currentStep !== 3) {
		return null;
	}

	const errorsList = () => {
		if (!localization && !localizationSpecific) {
			return <ErrorInfoForm>Wybierz lub podaj lokalizację!</ErrorInfoForm>;
		} else if (helpGroups.length <= 0) {
			return <ErrorInfoForm>Wybierz komu chcesz pomóc!</ErrorInfoForm>;
		} else {
			return <br />;
		}
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
				<br />
				{errorsList()}
				<div className='form__group'>
					<h1>Lokalizacja</h1>

					<div className='form__step-three'>
						<div className='form__location select'>
							<select
								onClick={changeArrow}
								className={isArrowUp ? "arrowUp" : null}
								name='localization'
								onChange={handleChange}
								value={localization}>
								<option hidden>— wybierz —</option>
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
								value='dzieciom'
								onChange={handleChange}
								checked={helpGroups.includes("dzieciom") ? true : false}
							/>
							<label htmlFor='kids'>dzieciom</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='single-moms'
								value='samotnym matkom'
								onChange={handleChange}
								checked={helpGroups.includes("samotnym matkom") ? true : false}
							/>
							<label htmlFor='single-moms'>samotnym matkom</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='homeless'
								value='bezdomnym'
								onChange={handleChange}
								checked={helpGroups.includes("bezdomnym") ? true : false}
							/>
							<label htmlFor='homeless'>bezdomnym</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='disabled'
								value='niepełnosprawnym'
								onChange={handleChange}
								checked={helpGroups.includes("niepełnosprawnym") ? true : false}
							/>
							<label htmlFor='disabled'>niepełnosprawnym</label>
							<input
								type='checkbox'
								name='helpGroups'
								id='seniors'
								value='osobom starszym'
								onChange={handleChange}
								checked={helpGroups.includes("osobom starszym") ? true : false}
							/>
							<label htmlFor='seniors'>osobom starszym</label>
						</div>
						<div className='form__localizaton-specific'>
							<p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
							<input
								type='text'
								name='localizationSpecific'
								value={localizationSpecific}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
				{previousButton()}
				{nextButton()}
			</div>
		</div>
	);
};

export default StepThree;
