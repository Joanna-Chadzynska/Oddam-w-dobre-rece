import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomTitle, ErrorInfo } from '../../Layouts';

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactUs, setContactUs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  };

  const validate = () => {
    let isValid = true;
    const nameRegex = /^[a-zA-Z]{1,50}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const messageRegex = /^.{120,1000}$/;

    if (!nameRegex.test(name) || name.length <= 0) {
      isValid = false;
      errors.name = 'Podane imię jest nieprawidłowe!';
    } else {
      isValid = true;
      errors.name = '';
      contactUs.name = name;
    }

    if (!emailRegex.test(email)) {
      isValid = false;
      errors.email = 'Podany email jest nieprawidłowy!';
    } else {
      isValid = true;
      errors.email = '';
      contactUs.email = email;
    }

    if (!messageRegex.test(message)) {
      isValid = false;
      errors.message = 'Wiadomość musi mieć conajmniej 120 znaków!';
    } else {
      isValid = true;
      errors.message = '';
      contactUs.message = message;
    }

    setErrors({ ...errors });

    setContactUs({ ...contactUs });

    return isValid;
  };

  const sendForm = (name, email, message) => {
    const url = `https://fer-api.coderslab.pl/v1/portfolio/contact`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(resp => resp.json())
      .then(data => setStatus(data.status))
      .catch(error => setError(error));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      sendForm(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
    } else {
      return errors;
    }
  };

  return (
    <div className="home__contactForm wrapp">
      <CustomTitle error={error}>{t('home.contactUs.mainTitle')}</CustomTitle>
      {status === 'success' && (
        <span className="success">
          {t('home.contactUs.msgSucc-1')}
          <br className="form__br" />
          {t('home.contactUs.msgSucc-2')}
        </span>
      )}
      <div className="home__contact-box">
        <form noValidate onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">{t('home.contactUs.inputName')}</label>
            <input
              type="text"
              name="name"
              placeholder="Krzysztof"
              value={name}
              onChange={handleChange}
              className={errors.name ? 'error' : null}
            />
            {errors.name && (
              <ErrorInfo>{t('home.contactUs.msgErr-name')}</ErrorInfo>
            )}
          </p>

          <p>
            <label htmlFor="email">{t('home.contactUs.inputEmail')}</label>
            <input
              type="email"
              name="email"
              placeholder="abc@xyz.pl"
              value={email}
              onChange={handleChange}
              className={errors.email ? 'error' : null}
            />
            {errors.email && (
              <ErrorInfo>{t('home.contactUs.msgErr-email')}</ErrorInfo>
            )}
          </p>

          <p className="home__form-full">
            <label htmlFor="message">{t('home.contactUs.textarea')}</label>
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet"
              value={message}
              onChange={handleChange}
              className={errors.message ? 'error' : null}
            />
            {errors.message && (
              <ErrorInfo>{t('home.contactUs.msgErr-textarea')}</ErrorInfo>
            )}
          </p>
          <br />
          <p>
            <button type="submit">{t('home.contactUs.btnSend')}</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
