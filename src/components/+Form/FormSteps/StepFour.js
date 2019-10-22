import React from "react";
import { FormInfoBanner, ErrorInfoForm, ErrorInfo } from "../../Layouts";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();

	if (currentStep !== 4) {
		return null;
	}

	const errorsList = () => {
		if (!address.street) {
			return (
				<ErrorInfoForm>{t("form.stepFour.errors.street-1")}</ErrorInfoForm>
			);
		} else if (!address.city) {
			return <ErrorInfoForm>{t("form.stepFour.errors.city-1")}</ErrorInfoForm>;
		} else if (!address.postCode) {
			return (
				<ErrorInfoForm>{t("form.stepFour.errors.postcode-1")}</ErrorInfoForm>
			);
		} else if (!address.phone) {
			return <ErrorInfoForm>{t("form.stepFour.errors.phone-1")}</ErrorInfoForm>;
		} else if (!collectionDate.date) {
			return <ErrorInfoForm>{t("form.stepFour.errors.date-1")}</ErrorInfoForm>;
		} else if (!collectionDate.time) {
			return <ErrorInfoForm>{t("form.stepFour.time-1")}</ErrorInfoForm>;
		} else if (!isFormValid) {
			return (
				<ErrorInfoForm>{t("form.stepFour.errors.postcode-2")}</ErrorInfoForm>
			);
		} else {
			return <br />;
		}
	};

	return (
		<div className='form__step form__wrapper'>
			<FormInfoBanner>{t("form.info.stepFour")}</FormInfoBanner>
			<div className='form__form'>
				<p>
					{t("form.info.step")} {currentStep}/4
				</p>
				<br />
				{errorsList()}
				<div className='form__group'>
					<h1>{t("form.stepFour.mainTitle")}</h1>
					<div className='form__step-four'>
						<div className='container'>
							<div className='form__address'>
								<p>{t("form.stepFour.addressTitle")}:</p>

								<div className='form__inputBox'>
									<label htmlFor='street'>
										{t("form.stepFour.address.street")}
									</label>
									<input
										type='text'
										name='address'
										id='street'
										value={address.street}
										onChange={handleChange}
									/>
									{address.street.length < 2 && (
										<ErrorInfo>{t("form.stepFour.errors.street-2")}</ErrorInfo>
									)}
								</div>

								<div className='form__inputBox'>
									<label htmlFor='city'>
										{t("form.stepFour.address.city")}
									</label>
									<input
										type='text'
										name='address'
										id='city'
										value={address.city}
										onChange={handleChange}
									/>
									{address.city.length < 2 && (
										<ErrorInfo>{t("form.stepFour.errors.city-2")}</ErrorInfo>
									)}
								</div>

								<div className='form__inputBox'>
									<label htmlFor='postcode'>
										{t("form.stepFour.address.postcode")}
									</label>
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
									<label htmlFor='phone'>
										{t("form.stepFour.address.phone")}
									</label>
									<input
										type='number'
										name='address'
										id='phone'
										value={address.phone}
										onChange={handleChange}
									/>
									{address.phone.length < 9 && (
										<ErrorInfo>{t("form.stepFour.errors.phone-2")}</ErrorInfo>
									)}
								</div>
							</div>

							<div className='form__collection-date'>
								<p>{t("form.stepFour.pickupTitle")}:</p>

								<div className='form__inputBox'>
									<label htmlFor='date'>{t("form.stepFour.pickup.date")}</label>
									<input
										type='date'
										name='collectionDate'
										id='date'
										value={collectionDate.date}
										onChange={handleChange}
									/>
								</div>

								<div className='form__inputBox'>
									<label htmlFor='hour'>{t("form.stepFour.pickup.time")}</label>
									<input
										type='time'
										name='collectionDate'
										id='hour'
										value={collectionDate.time}
										onChange={handleChange}
									/>
								</div>

								<div className='form__inputBox'>
									<label htmlFor='suggestions'>
										{t("form.stepFour.pickup.note")}
									</label>
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
