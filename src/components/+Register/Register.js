import React from "react";
import { Link } from "react-router-dom";
import { CustomTitle } from "../Layouts";
import Menu from "../+Home/HomeNavHeader/Menu";
import UserBar from "../+Home/HomeNavHeader/UserBar";

const Register = () => {
	return (
		<div className='login'>
			<div className='home__nav'>
				<UserBar />
				<br />
				<Menu />
			</div>
			<div className='login__container'>
				<CustomTitle>Zaloguj się</CustomTitle>
				<form className='form-box'>
					<div className='inputs-box'>
						<label htmlFor='email'>Email</label>
						<input type='email' name='email' id='email' />
						<br />
						<br />
						<label htmlFor='password'>Hasło</label>
						<input type='password' name='password' id='password' />
						<br />
						<br />
						<label htmlFor='password'>Powtórz hasło</label>
						<input type='password' name='password' id='password' />
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
