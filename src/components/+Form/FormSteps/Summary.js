import React from "react";
import { ErrorInfoForm } from "../../Layouts";
import tshirt from "../../../assets/Icon-1.svg";
import arrows from "../../../assets/Icon-4.svg";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();

	if (currentStep !== 5) {
		return null;
	}

	return (
		<div className='form__step form__wrapper'>
			<div className='form__form'>
				<div className='form__summary form__group'>
					<h1>{t("form.summary.mainTitle")}</h1>

					<div className='form__summary-donate'>
						<p>{t("form.summary.giveTitle")}</p>
						<br />
						<div className='form__summary-donate--icon'>
							<img src={tshirt} alt='tshirt icon' />
							<span>
								{bags} {t("form.summary.bags")}, {type}, {helpGroups.join(", ")}
							</span>
						</div>
						<div className='form__summary-donate--icon'>
							<img src={arrows} alt='' />
							<span>
								{t("form.summary.location")}:&nbsp;
								{localizationSpecific ? localizationSpecific : localization}
							</span>
						</div>
					</div>

					<div className='form__summary-container'>
						<div className='form__address'>
							<p>{t("form.stepFour.addressTitle")}:</p>
							<br />
							<div className='form__inputBox'>
								<span>{t("form.stepFour.address.street")}</span>
								<span>{address.street}</span>
							</div>
							<div className='form__inputBox'>
								<span>{t("form.stepFour.address.city")}</span>
								<span>{address.city}</span>
							</div>
							<div className='form__inputBox'>
								<span>{t("form.stepFour.address.postcode")}</span>
								<span>{address.postCode}</span>
							</div>
							<div className='form__inputBox'>
								<span>{t("form.stepFour.address.phone")}</span>
								<span>{address.phone}</span>
							</div>
						</div>
						<div className='form__summary-collectionDate'></div>

						<div className='form__collection-date'>
							<p>{t("form.stepFour.pickupTitle")}:</p>
							<br />
							<div className='form__inputBox'>
								<span>{t("form.stepFour.pickup.date")}</span>
								<span>{collectionDate.date}</span>
							</div>
							<div className='form__inputBox'>
								<span>{t("form.stepFour.pickup.time")}</span>
								<span>{collectionDate.time}</span>
							</div>
							<div className='form__inputBox'>
								<span>{t("form.stepFour.pickup.note")}</span>
								<span>{collectionDate.note}</span>
							</div>
						</div>
					</div>

					{!isFormValid && (
						<ErrorInfoForm>{t("form.summary.errors")}</ErrorInfoForm>
					)}
				</div>
				<div className='form__summary-btns'>
					{previousButton()}
					<button
						type='submit'
						className='btn-confirm'
						onClick={isFormValid ? next() : null}>
						{t("form.buttons.confirm")}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Summary;
