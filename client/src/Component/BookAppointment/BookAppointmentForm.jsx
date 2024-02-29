import React from 'react'
import './Book.css'


function BookAppointmentForm() {
  return (
    <div className='body'>
      <div className='head'><h2>Book Apointment</h2></div>
      <form>
        <div class="input-field">
            <input type="text" id="name" required />
            <label for="name">Your name:</label>
        </div>
        <div class="input-field">
            <input type="text" id="Gender" required />
            <label for="Gender">Gender:</label>
        </div>
        <div class="input-date">
            <input type="date" id="date" required />
            <label for="d">Date of visit:</label>
        </div>
        <div className="div-visit">
            <label htmlFor="visit">Purposr of Visit:</label><br />
            <textarea name="visit" id="visit" cols="5" rows="5" placeholder='Enter the purpose of visit'></textarea>
        </div>
        <div class="input-field">
            <input type="text" id="tel" required />
            <label for="tel">Phone Number:</label>
        </div>
      </form>
    </div>
  )
}

export default BookAppointmentForm
