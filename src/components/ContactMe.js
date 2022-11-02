import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.scss';

function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8w4sjl3', 'template_k9g5fja', form.current, 'AsqXIP3NZtfkRQFA7')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='email-form' ref={form} onSubmit={sendEmail}>
      <label className='contact-label'>Name</label>
      <input className='contact-input' type="text" name="user_name" />
      <label className='contact-label'>Email</label>
      <input className='contact-input' type="email" name="user_email" />
      <label className='contact-label'>Message</label>
      <textarea className='contact-text-area' name="message" />
      <input className='contact-input' type="submit" value="Send" />
    </form>
  );
};

export default ContactMe;