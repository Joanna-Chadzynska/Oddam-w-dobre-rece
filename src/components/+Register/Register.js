import React from "react";
import { Link } from "react-router-dom";
import { CustomTitle } from "../Layouts";

const Register = () => {
	return (
		<div className='login'>
			<div className='login__container'>
				<CustomTitle>Załóż konto</CustomTitle>
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
						<label htmlFor='confirm-password'>Powtórz hasło</label>
						<input type='password' name='password' id='confirm-password' />
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
