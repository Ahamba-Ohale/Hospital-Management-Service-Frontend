import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
      <div className="contact-in">
        {/* <div>
          <h3>Back</h3>
        </div> */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2065.7357921326443!2d6.982146691737124!3d4.872436928592038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d166659a1b29%3A0x509a192b63f6b4b0!2sGreat%20Towers%20Specialist%20Hospital%20Ltd!5e0!3m2!1sen!2sng!4v1709383660090!5m2!1sen!2sng"
            width="100"
            height="auto"
            style={{ border: "0", allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}
            />
        </div>

        <div className="contact-form">
          <h1>Contact Us</h1>
          <form action="">
            <input type="text" placeholder='Name' className='contact-form-txt'/>
            <input type="Email" placeholder='Email' className='contact-form-txt'/>
            <textarea placeholder='Message' className='contact-form-textarea'></textarea>
            <input type="Submit" placeholder='Submit' className='contact-form-btn'/>
          </form>
        </div>
      </div>
  )
}

export default Contact