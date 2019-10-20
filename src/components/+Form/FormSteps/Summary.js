import React from "react";
import tshirt from "../../../assets/Icon-1.svg";
import arrows from "../../../assets/Icon-4.svg";

const Summary = ({
	currentStep,
	previousButton,
	type,
	bags,
	localization,
	helpGroups,
	localizationSpecific,
	address,
	collectionDate,
	isFormValid,
	next
}) => {
	if (currentStep !== 5) {
		return null;
	}

	return (
		<div className='form__step form__wrapper'>
			<div className='form__form'>
				<div className='form__summary form__group'>
					<h1>Podsumowanie Twojej darowizny</h1>

					<div className='form__summary-donate'>
						<p>Oddajesz</p>
						<br />
						<div className='form__summary-donate--icon'>
							<img src={tshirt} alt='tshirt icon' />
							<span>
								{bags} worki, {type}, {helpGroups.join(", ")}
							</span>
						</div>
						<div className='form__summary-donate--icon'>
							<img src={arrows} alt='' />
							<span>
								dla lokalizacji:&nbsp;
								{localizationSpecific ? localizationSpecific : localization}
							</span>
						</div>
					</div>

					<div className='form__summary-container'>
						<div className='form__address'>
							<p>Adres odbioru:</p>
							<br />
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
							<br />
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
				</div>
				<div className='form__summary-btns'>
					{previousButton()}
					<button
						type='submit'
						className='btn-confirm'
						onClick={isFormValid ? next : null}>
						Potwierdzam
					</button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
