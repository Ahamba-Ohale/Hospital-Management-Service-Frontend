import React from 'react'
import './Book.css'
import { Doctor } from '../img/image'
import { useState } from 'react'


function BookAppointmentForm() {
    const [name, setName] = useState('');
    const [Specialist, setSpecialist] = useState('');
    const [date, setDate] = useState('');
    const [purpose, setPurpose] = useState('');
    const [number, setNumber] = useState('');

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Specialist:', Specialist);
        console.log('Date:', date);
        console.log('Purpose:', purpose);
        console.log('Phone Number:', number);
    }
    

    return (

        <div className='general'>
            <div className='photo'><img src={Doctor} alt="" /></div>
            <div className='body'>
                <div className='head'><h2>Book Apointment</h2></div>
                <form onSubmit={handleSubmit}>
                    <div class="input-field">
                        <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)}/>
                        <label for="name">Your name:</label>
                    </div>
                    <div class="input-field">
                        <input type="text" id="Gender" required value={Specialist} onChange={(e) => setSpecialist(e.target.value)}/>
                        <label for="Gender">Specialist:</label>
                    </div>
                    <div class="input-date">
                        <input type="date" id="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                        <label for="d">Date of visit:</label>
                    </div>
                    <div class="input-field">
                        <input type="text" id="tel" required value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                        <label for="tel">Purpose of Appointment:</label>
                    </div>
                    <div class="input-field">
                        <input type="tel" id="phone" required value={number} onChange={(e) => setNumber(e.target.value)}/>
                        <label for="tel">Phone Number:</label>
                    </div>
                    <button className='formbtn'>Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default BookAppointmentForm
