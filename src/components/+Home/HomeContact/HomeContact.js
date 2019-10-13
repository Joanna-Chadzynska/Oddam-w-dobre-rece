import React from "react";
import ContactForm from "./ContactForm";
import { Copyright } from "../../Layouts";

const HomeContact = () => {
  return (
    <div className='home__contact' id='contact'>
      <div className='home__banner'>
        <Copyright />
      </div>
      <div className='home__contact-box'>
        <ContactForm />
      </div>
    </div>
  );
};

export default HomeContact;
