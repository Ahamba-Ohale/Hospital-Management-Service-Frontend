import React from 'react'
import './Book.css'
import { Doctor } from '../img/image'


function BookAppointmentForm() {
    return (

        <div className='general'>
            <div className='photo'><img src={Doctor} alt="" /></div>
            <div className='body'>
                <div className='head'><h2>Book Apointment</h2></div>
                <form>
                    <div class="input-field">
                        <input type="text" id="name" required />
                        <label for="name">Your name:</label>
                    </div>
                    <div class="input-field">
                        <input type="text" id="Gender" required />
                        <label for="Gender">Specialist:</label>
                    </div>
                    <div class="input-date">
                        <input type="date" id="date" required />
                        <label for="d">Date of visit:</label>
                    </div>
                    <div class="input-field">
                        <input type="text" id="tel" required />
                        <label for="tel">Purpose of Appointment:</label>
                    </div>
                    <div class="input-field">
                        <input type="tel" id="phone" required />
                        <label for="tel">Phone Number:</label>
                    </div>
                    <button>Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default BookAppointmentForm
