import React from 'react'
import './Contact.css'
import Nav from '../Important/Nav/Nav'

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="contact-in">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2065.7357921326443!2d6.982146691737124!3d4.872436928592038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d166659a1b29%3A0x509a192b63f6b4b0!2sGreat%20Towers%20Specialist%20Hospital%20Ltd!5e0!3m2!1sen!2sng!4v1709383660090!5m2!1sen!2sng"
            width="100"
            height="auto"
            style={{ border: "0", allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}
            />
        </div>

        <div className="contact-form">
          <h1 className='contact-h1'>Contact Us</h1>
          <form action="/api/email" method="post">
            <input type="text" placeholder="Name" name="name" className="contact-form-txt" required />
            <input type="email" placeholder="Email" name="email" className="contact-form-txt" required />
            <textarea placeholder="Message" name="message" className="contact-form-textarea" required></textarea>
            <input type="submit" placeholder="Submit" className="contact-form-btn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact