import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__container__heading'>Contact us</div>
        <div className='contact__container__input'>
          <input type='text' placeholder='Name' />
        </div>
        <div className='contact__container__input'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='contact__container__input'>
          <input type='number' placeholder='Number' />
        </div>
        <div className='contact__container__input'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='5'
            placeholder='How can we help?'
          ></textarea>
        </div>
        <div className='contact__container__button'>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
