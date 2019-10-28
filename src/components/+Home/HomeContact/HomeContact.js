import React from 'react';
import ContactForm from './ContactForm';
import { Copyright } from '../../Layouts';
import SocialMedia from './SocialMedia';

const HomeContact = () => (
  <div className="home__contact" id="contact">
    <div className="home__bg" />
    <br className="form__br" />
    <ContactForm />
    <div className="home__contact-footer">
      <Copyright />
      <SocialMedia />
    </div>
  </div>
);

export default HomeContact;
