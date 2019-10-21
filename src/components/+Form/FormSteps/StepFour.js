import React from "react";
import { FormInfoBanner, ErrorInfoForm, ErrorInfo } from "../../Layouts";

const StepFour = ({
	address,
	collectionDate,
	errors,
	currentStep,
	handleChange,
	nextButton,
	previousButton,
	isFormValid
}) => {
	if (currentStep !== 4) {
		return null;
	}

	const errorsList = () => {
		if (!address.street) {
			return <ErrorInfoForm>Podaj nazwę ulicy!</ErrorInfoForm>;
		} else if (!address.city) {
			return <ErrorInfoForm>Podaj nazwę miasta!</ErrorInfoForm>;
		} else if (!address.postCode) {
			return <ErrorInfoForm>Podaj kod pocztowy!</ErrorInfoForm>;
		} else if (!address.phone) {
			return <ErrorInfoForm>Podaj numer telefonu!</ErrorInfoForm>;
		} else if (!collectionDate.date) {
			return <ErrorInfoForm>Podaj datę odbioru!</ErrorInfoForm>;
		} else if (!collectionDate.time) {
			return <ErrorInfoForm>Podaj godzinę odbioru!</ErrorInfoForm>;
		} else if (!isFormValid) {
			return (
				<ErrorInfoForm>Nieprawidłowy format kodu pocztowego!</ErrorInfoForm>
			);
		} else {
			return <br />;
		}
	};

	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>Podaj adres oraz termin odbioru rzeczy.</FormInfoBanner>
			<div className='form__form'>
				<p>Krok {currentStep}</p>
				<br />
				{errorsList()}
				<div className='form__group'>
					<h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
					<div className='form__step-four'>
						<div className='container'>
							<div className='form__address'>
								<p>Adres odbioru:</p>

								<div className='form__inputBox'>
									<label htmlFor='street'>Ulica</label>
									<input
										type='text'
										name='address'
										id='street'
										value={address.street}
										onChange={handleChange}
									/>
									{address.street.length < 2 && (
										<ErrorInfo>Podana nazwa jest za krótka!</ErrorInfo>
									)}
								</div>

								<div className='form__inputBox'>
									<label htmlFor='city'>Miasto</label>
									<input
										type='text'
										name='address'
										id='city'
										value={address.city}
										onChange={handleChange}
									/>
									{address.city.length < 2 && (
										<ErrorInfo>Podana nazwa jest za krótka!</ErrorInfo>
									)}
								</div>

								<div className='form__inputBox'>
									<label htmlFor='postcode'>Kod pocztowy</label>
									<input
										type='text'
										pattern='[0-9]{2}-[0-9]{3}'
										name='address'
										id='postcode'
										minLength='6'
										maxLength='6'
										value={address.postCode}
										onChange={handleChange}
									/>
									{}
								</div>

								<div className='form__inputBox'>
									<label htmlFor='phone'>Numer telefonu</label>
									<input
										type='number'
										name='address'
										id='phone'
										value={address.phone}
										onChange={handleChange}
									/>
									{address.phone.length < 9 && (
										<ErrorInfo>Podany numer telefonu jest za krótki!</ErrorInfo>
									)}
								</div>
							</div>

							<div className='form__collection-date'>
								<p>Termin odbioru:</p>

								<div className='form__inputBox'>
									<label htmlFor='date'>Data</label>
									<input
										type='date'
										name='collectionDate'
										id='date'
										value={collectionDate.date}
										onChange={handleChange}
									/>
								</div>

								<div className='form__inputBox'>
									<label htmlFor='hour'>Godzina</label>
									<input
										type='time'
										name='collectionDate'
										id='hour'
										value={collectionDate.time}
										onChange={handleChange}
									/>
								</div>

								<div className='form__inputBox'>
									<label htmlFor='suggestions'>Uwagi do kuriera</label>
									<textarea
										name='collectionDate'
										id='note'
										cols='30'
										rows='5'
										value={collectionDate.note}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{previousButton()}
				{nextButton()}
			</div>
		</div>
	);
};

export default StepFour;
