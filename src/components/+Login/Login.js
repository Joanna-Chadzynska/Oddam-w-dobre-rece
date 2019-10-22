import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomTitle, ErrorInfo } from "../Layouts";
import { auth } from "../../firebase/firebase.utils";
import { useTranslation } from "react-i18next";

const Login = ({ history }) => {
	const { t } = useTranslation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") setPassword(e.target.value);
	};

	const validate = () => {
		let isValid = true;
		let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!emailRegex.test(email)) {
			isValid = false;
			errors.email = "Podany email jest nieprawidłowy!";
		} else {
			isValid = true;
			errors.email = "";
		}

		if (password.length < 6) {
			isValid = false;
			errors.password = "Podane hasło jest za krótkie!";
		} else {
			isValid = true;
			errors.password = "";
		}

		setErrors({ ...errors });

		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			try {
				await auth.signInWithEmailAndPassword(email, password);
				setEmail("");
				setPassword("");
			} catch (error) {
				console.log(error);
			}

			setEmail("");
			setPassword("");
			history.push("/");
		} else {
			return errors;
		}
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<CustomTitle>{t("login.mainTitle")}</CustomTitle>
				<form className='form-box' onSubmit={handleSubmit} noValidate>
					<div className='inputs-box'>
						<label htmlFor='email'>{t("login.email")}</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={handleChange}
							className={errors.email ? "error" : null}
						/>
						{errors.email && (
							<ErrorInfo>{t("home.contactUs.msgErr-email")}</ErrorInfo>
						)}
						<br />
						<br />
						<label htmlFor='password'>{t("login.haslo")}</label>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={handleChange}
						/>
						{errors.password && (
							<ErrorInfo>{t("login.msgErr-password")}</ErrorInfo>
						)}
					</div>
					<div className='buttons-box'>
						<Link to='/rejestracja'>{t("userbar.konto")}</Link>
						<button type='submit'>{t("userbar.login")}</button>
						{/* <button onClick={signInWithGoogle}>login with google</button> */}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
