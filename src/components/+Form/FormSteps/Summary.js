import React from "react";

const Summary = ({
	currentStep,
	previousButton,
	type,
	bags,
	localization,
	helpGroups,
	localizationSpecific,
	address,
	collectionDate
}) => {
	if (currentStep !== 5) {
		return null;
	}

	return (
		<div className='form__step form__wrapper'>
			<div className='form__form'>
				<div className='form__summary'>
					<h1>Podsumowanie Twojej darowizny</h1>

					<div className='form__summary-donate'>
						<p>Oddajesz</p>
						<span>
							{bags} worki, {type}, {helpGroups.join(", ")}
						</span>
						<span>
							dla lokalizacji:&nbsp;
							{localizationSpecific ? localizationSpecific : localization}
						</span>
					</div>
				</div>

				<div className='form__summary-container container'>
					<div className='form__address'>
						<p>Adres odbioru:</p>
						<div className='form__inputBox'>
							<span>Ulica</span>
							<span>{address.street}</span>
						</div>
						<div className='form__inputBox'>
							<span>Miasto</span>
							<span>{address.city}</span>
						</div>
						<div className='form__inputBox'>
							<span>Kod pocztowy</span>
							<span>{address.postCode}</span>
						</div>
						<div className='form__inputBox'>
							<span>Numer telefonu</span>
							<span>{address.phone}</span>
						</div>
					</div>
					<div className='form__summary-collectionDate'></div>

					<div className='form__collection-date'>
						<p>Termin odbioru:</p>

						<div className='form__inputBox'>
							<span>Data</span>
							<span>{collectionDate.date}</span>
						</div>
						<div className='form__inputBox'>
							<span>Godzina</span>
							<span>{collectionDate.time}</span>
						</div>
						<div className='form__inputBox'>
							<span>Uwagi do kuriera</span>
							<span>{collectionDate.note}</span>
						</div>
					</div>
				</div>

				{previousButton()}
				<button type='submit'>Potwierdzam</button>
			</div>
		</div>
	);
};

export default Summary;
