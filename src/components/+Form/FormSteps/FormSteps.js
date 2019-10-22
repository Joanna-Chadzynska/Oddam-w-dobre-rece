import React, { useState } from "react";
import { connect } from "react-redux";
import { addForm } from "../../../redux/forms/actions";
import {
	addCollectionsAndDocuments,
	auth
} from "../../../firebase/firebase.utils";
import { useTranslation } from "react-i18next";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

const FormSteps = ({ addForm, currentUser, history }) => {
	const { t } = useTranslation();

	const [isFormValid, setFormValid] = useState(false);
	const [currentStep, setCurrentStep] = useState(1);
	const [type, setType] = useState("");
	const [bags, setBags] = useState("");
	const [localization, setLocalization] = useState("");
	const [helpGroups, setHelpGroups] = useState([]);
	const [localizationSpecific, setLocalSpecific] = useState("");
	const [address, setAddress] = useState({
		street: "",
		city: "",
		postCode: "",
		phone: ""
	});
	const [collectionDate, setCollectionDate] = useState({
		date: "",
		time: "",
		note: ""
	});

	const [errors, setErrors] = useState({
		type: "",
		bags: "",
		localization: "",
		helpGroups: "",
		address: {
			street: "",
			city: "",
			postCode: "",
			phone: ""
		},
		collectionDate: {
			date: "",
			time: "",
			note: ""
		}
	});

	const [form, setForm] = useState({
		type: "",
		bags: "",
		localization: "",
		helpGroups: [],
		localizationSpecific: "",
		address: {
			street: "",
			city: "",
			postCode: "",
			phone: ""
		},
		collectionDate: {
			date: "",
			time: "",
			note: ""
		},
		user: "",
		createdAt: new Date()
	});

	const handleChange = (e) => {
		if (e.target.name === "step-one") {
			if (e.target.checked) {
				setType(e.target.value);
			}
		} else if (e.target.name === "step-two") {
			setBags(e.target.value);
		} else if (e.target.name === "localization") {
			setLocalization(e.target.value);
		} else if (e.target.name === "helpGroups") {
			if (!helpGroups.includes(e.target.value)) {
				setHelpGroups([...helpGroups, e.target.value]);
			} else {
				const filtered = helpGroups.filter((value) => value !== e.target.value);
				setHelpGroups([...filtered]);
			}
		} else if (e.target.name === "localizationSpecific") {
			setLocalSpecific(e.target.value);
		} else if (e.target.name === "address") {
			if (e.target.id === "street") {
				address.street = e.target.value;
			} else if (e.target.id === "city") {
				address.city = e.target.value;
			} else if (e.target.id === "postcode") {
				address.postCode = e.target.value;
			} else if (e.target.id === "phone") {
				if (e.target.value.length <= 9) {
					address.phone = e.target.value;
				}
			}
			setAddress({ ...address });
		} else if (e.target.name === "collectionDate") {
			if (e.target.id === "date") {
				collectionDate.date = e.target.value;
			} else if (e.target.id === "hour") {
				collectionDate.time = e.target.value;
			} else if (e.target.id === "note") {
				collectionDate.note = e.target.value;
			}
			setCollectionDate({ ...collectionDate });
		}
	};

	const validate = () => {
		let isValid = true;
		let regexPostalCode = /^([0-9]{2})(-[0-9]{3})?$/;

		if (!type) {
			isValid = false;
			errors.type = "Zaznacz co chcesz oddać!";
		} else {
			errors.type = "";
			form.type = type;
		}

		if (!bags) {
			isValid = false;
			errors.bags = "Podaj liczbę worków do oddania!";
		} else {
			errors.bags = "";
			form.bags = bags;
		}

		if (!localization) {
			isValid = false;
			errors.localization = "Wybierz lub podaj lokalizację!";
		} else {
			errors.localization = "";
			form.localization = localization;
			form.localizationSpecific = localizationSpecific;
		}

		if (helpGroups.length <= 0) {
			isValid = false;
			errors.helpGroups = "Wybierz komu chcesz oddać rzeczy!";
		} else {
			errors.helpGroups = "";
			form.helpGroups = helpGroups;
		}

		if (address.street.length < 2) {
			isValid = false;
			errors.address.street = "Nazwa ulicy musi mieć conajmniej 2 znaki!";
		} else {
			errors.address.street = "";
			form.address.street = address.street;
		}

		if (address.city.length < 2) {
			isValid = false;
			errors.address.city = "Nazwa miasta musi mieć conajmniej 2 znaki!";
		} else {
			errors.address.city = "";
			form.address.city = address.city;
		}

		if (!regexPostalCode.test(address.postCode)) {
			isValid = false;
			errors.address.postCode = "Nieprawidłowy format kodu pocztowego!";
		} else {
			errors.address.postCode = "";
			form.address.postCode = address.postCode;
		}

		if (address.phone.length < 9) {
			isValid = false;
			errors.address.phone = "Numer telefonu jest za krótki i nie jest liczbą";
		} else {
			errors.address.phone = "";
			form.address.phone = address.phone;
		}

		if (!collectionDate.date) {
			isValid = false;
			errors.collectionDate.date = "Wybierz datę odbioru rzeczy przez kuriera!";
		} else {
			errors.collectionDate.date = "";
			form.collectionDate.date = collectionDate.date;
		}

		if (!collectionDate.time) {
			isValid = false;
			errors.collectionDate.time =
				"Wybierz godzinę odbioru rzeczy przez kuriera!";
		} else {
			errors.collectionDate.time = "";
			form.collectionDate.time = collectionDate.time;
		}

		if (!collectionDate.note) {
		} else {
			form.collectionDate.note = collectionDate.note;
		}

		form.user = currentUser;

		setErrors({ ...errors });
		setForm({ ...form });

		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			addForm(form);
			setFormValid(true);
			auth.onAuthStateChanged(async (userAuth) => {
				if (userAuth) {
					addCollectionsAndDocuments("forms", [form]);
				}
			});
		} else {
			return errors;
		}
	};

	const _next = () => {
		let nextStep = currentStep;
		nextStep = nextStep >= 2 ? nextStep + 1 : nextStep + 1;

		setCurrentStep(nextStep);
	};

	const _prev = () => {
		let prevStep = currentStep;
		prevStep = prevStep <= 1 ? 1 : prevStep - 1;

		setCurrentStep(prevStep);
	};

	const previousButton = () => {
		if (currentStep !== 1) {
			return (
				<button onClick={_prev} className='btn-prev'>
					{t("form.buttons.prev")}
				</button>
			);
		}

		return null;
	};

	const nextButton = () => {
		if (currentStep < 6) {
			return (
				<button onClick={_next} className='btn-next'>
					{t("form.buttons.next")}
				</button>
			);
		}

		return null;
	};

	return (
		<div className='form__steps-main '>
			<form onSubmit={handleSubmit}>
				<StepOne
					currentStep={currentStep}
					handleChange={handleChange}
					type={type}
					nextButton={nextButton}
					previousButton={previousButton}
				/>
				<StepTwo
					bags={bags}
					currentStep={currentStep}
					handleChange={handleChange}
					nextButton={nextButton}
					previousButton={previousButton}
				/>
				<StepThree
					currentStep={currentStep}
					handleChange={handleChange}
					nextButton={nextButton}
					previousButton={previousButton}
					localization={localization}
					localizationSpecific={localizationSpecific}
					helpGroups={helpGroups}
				/>
				<StepFour
					currentStep={currentStep}
					errors={errors.address.postCode}
					handleChange={handleChange}
					nextButton={nextButton}
					previousButton={previousButton}
					address={address}
					collectionDate={collectionDate}
					isFormValid={isFormValid}
				/>
				<Summary
					currentStep={currentStep}
					previousButton={previousButton}
					next={_next}
					type={type}
					bags={bags}
					localization={localization}
					localizationSpecific={localizationSpecific}
					helpGroups={helpGroups}
					address={address}
					collectionDate={collectionDate}
					isFormValid={isFormValid}
				/>

				<ThankYou currentStep={currentStep} />
			</form>
		</div>
	);
};

const mapState = (state) => {
	return {
		currentUser: state.userReducer.currentUser
	};
};

const mapDispatch = (dispatch) => {
	return {
		addForm: (item) => dispatch(addForm(item))
	};
};
export default connect(
	mapState,
	mapDispatch
)(FormSteps);
