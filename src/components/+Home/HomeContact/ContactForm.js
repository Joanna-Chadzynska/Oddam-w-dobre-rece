import React from "react";
import { CustomTitle } from "../../Layouts";
// import SocialMedia from "./SocialMedia";

const ContactForm = () => {
  return (
    <div className='home__contactForm wrapp'>
      <CustomTitle>Skontaktuj się z nami</CustomTitle>
      <div className='home__contact-box'>
        <form>
          <p>
            <label htmlFor='name'>Wpisz swoje imię</label>
            <input type='text' id='name' name='name' placeholder='Krzysztof' />
          </p>

          <p>
            <label htmlFor='email'>Wpisz swój email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='abc@xyz.pl'
            />
          </p>
          <p className='home__form-full'>
            <label htmlFor='message'>Wpisz swoją wiadomość</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='5'
              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet'
            />
          </p>
          <br />
          <p>
            <button type='submit'>Wyślij</button>
          </p>
        </form>
      </div>

      {/* <SocialMedia /> */}
    </div>
  );
};

export default ContactForm;
