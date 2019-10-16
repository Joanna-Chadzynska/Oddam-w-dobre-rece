import React from "react";
import { FormInfoBanner } from "../../Layouts";

const StepOne = () => {
	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>
				Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
				wiedzieć komu najlepiej je przekazać.
			</FormInfoBanner>
			<div className='form__form'>formularz krok 1</div>
		</div>
	);
};

export default StepOne;
