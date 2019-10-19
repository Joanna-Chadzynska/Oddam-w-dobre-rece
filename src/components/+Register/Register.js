import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomTitle, ErrorInfo } from "../Layouts";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const Register = ({ history }) => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const validate = () => {
		let isValid = true;
		let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!displayName) {
			isValid = false;
			errors.displayName = "Podane imię jest nieprawidłowe!";
		} else {
			isValid = true;
			errors.displayName = "";
		}

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

		if (confirmPassword !== password) {
			isValid = false;
			errors.confirmPassword = "Podane hasła muszą być identyczne!";
		} else {
			isValid = true;
			errors.confirmPassword = "";
		}

		setErrors({ ...errors });

		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			if (password !== confirmPassword) {
				alert("passwords dont match");
				return;
			}

			try {
				const { user } = await auth.createUserWithEmailAndPassword(
					email,
					password
				);

				await createUserProfileDocument(user, { displayName });

				setDisplayName("");
				setEmail("");
				setPassword("");
				setConfirmPassword("");
			} catch (error) {
				// console.log("err");
			}

			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
			history.push("/");
		} else {
			return errors;
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "name") {
			setDisplayName(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		} else if (e.target.name === "password2") {
			setConfirmPassword(e.target.value);
		}
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<CustomTitle>Załóż konto</CustomTitle>
				<form className='form-box' onSubmit={handleSubmit}>
					<div className='inputs-box'>
						<label htmlFor='name'>Imię</label>
						<input
							type='text'
							name='name'
							id='name'
							value={displayName}
							onChange={handleChange}
						/>
						{errors.displayName && <ErrorInfo>{errors.displayName}</ErrorInfo>}
						<br />
						<br />
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={handleChange}
						/>
						{errors.email && <ErrorInfo>{errors.email}</ErrorInfo>}
						<br />
						<br />
						<label htmlFor='password'>Hasło</label>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={handleChange}
						/>
						{errors.password && <ErrorInfo>{errors.password}</ErrorInfo>}
						<br />
						<br />
						<label htmlFor='password2'>Powtórz hasło</label>
						<input
							type='password'
							name='password2'
							id='password2'
							value={confirmPassword}
							onChange={handleChange}
						/>
						{password !== confirmPassword && (
							<ErrorInfo>{errors.confirmPassword}</ErrorInfo>
						)}
					</div>
					<div className='buttons-box'>
						<Link to='/logowanie'>Zaloguj się</Link>
						<button type='submit'>Załóż konto</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
