import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomTitle } from "../Layouts";
import Menu from "../+Home/HomeNavHeader/Menu";
import UserBar from "../+Home/HomeNavHeader/UserBar";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const Login = () => {
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
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!emailRegex.test(email)) {
			isValid = false;
			errors.email = "Podany jest nieprawidłowy!";
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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			setEmail("");
			setPassword("");
		} else {
			console.log(errors);
			return errors;
		}
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<CustomTitle>Zaloguj się</CustomTitle>
				<form className='form-box' onSubmit={handleSubmit} noValidate>
					<div className='inputs-box'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={handleChange}
						/>
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
					</div>
					<div className='buttons-box'>
						<Link to='/rejestracja'>Załóż konto</Link>
						<button type='submit'>Zaloguj się</button>
						<button onClick={signInWithGoogle}>
							Zaloguj się za pomocą konta Google
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
