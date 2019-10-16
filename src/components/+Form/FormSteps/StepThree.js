import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepThree = () => {
	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
				wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
				celu ich pomocy.
			</FormInfoBanner>
			<div className='form__form'>formularz krok 3</div>
		</div>
	);
};

export default StepThree;
