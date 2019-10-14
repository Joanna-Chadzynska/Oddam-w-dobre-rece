import React, { useState } from "react";
import { CustomTitle } from "../../Layouts";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [contactUs, setContactUs] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e) => {
		if (e.target.name === "name") {
			setName(e.target.value);
		} else if (e.target.name === "email") {
			setEmail(e.target.value);
		} else if (e.target.name === "message") {
			setMessage(e.target.value);
		}
	};

	const validate = () => {
		let isValid = true;

		let nameRegex = /^[a-zA-Z]{1,50}$/;
		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let messageRegex = /^.{120,1000}$/;

		if (!nameRegex.test(name) || name.length <= 0) {
			isValid = false;
			errors.name = "Podane imię jest nieprawidłowe!";
		} else {
			isValid = true;
			errors.name = "";
			contactUs.name = name;
		}

		if (!emailRegex.test(email)) {
			isValid = false;
			errors.email = "Podany email jest nieprawidłowy!";
		} else {
			isValid = true;
			errors.email = "";
			contactUs.email = email;
		}

		if (!messageRegex.test(message)) {
			isValid = false;
			errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
		} else {
			isValid = true;
			errors.message = "";
			contactUs.message = message;
		}

		setErrors({ ...errors });

		setContactUs({ ...contactUs });

		return isValid;
	};

	const sendForm = (name, email, message) => {
		const url = `https://fer-api.coderslab.pl/v1/portfolio/contact`;
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ name, email, message })
		})
			.then((resp) => resp.json())
			.then((data) => setStatus(data.status))
			.catch((error) => setError(error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			sendForm(name, email, message);
			setName("");
			setEmail("");
			setMessage("");
		} else {
			return errors;
		}
	};

	return (
		<div className='home__contactForm wrapp'>
			<CustomTitle>Skontaktuj się z nami</CustomTitle>
			{status === "success" && (
				<span className='success'>
					Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.
				</span>
			)}
			<div className='home__contact-box'>
				<form noValidate onSubmit={handleSubmit}>
					<p>
						<label htmlFor='name'>Wpisz swoje imię</label>
						<input
							type='text'
							name='name'
							placeholder='Krzysztof'
							value={name}
							onChange={handleChange}
							className={errors.name ? "error" : null}
						/>
						{errors.name && <span className='error'>{errors.name}</span>}
					</p>

					<p>
						<label htmlFor='email'>Wpisz swój email</label>
						<input
							type='email'
							name='email'
							placeholder='abc@xyz.pl'
							value={email}
							onChange={handleChange}
							className={errors.email ? "error" : null}
						/>
						{errors.email && <span className='error'>{errors.email}</span>}
					</p>

					<p className='home__form-full'>
						<label htmlFor='message'>Wpisz swoją wiadomość</label>
						<textarea
							name='message'
							cols='30'
							rows='5'
							placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet'
							value={message}
							onChange={handleChange}
							className={errors.message ? "error" : null}
						/>
						{errors.message && <span className='error'>{errors.message}</span>}
					</p>
					<br />
					<p>
						<button type='submit'>Wyślij</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
