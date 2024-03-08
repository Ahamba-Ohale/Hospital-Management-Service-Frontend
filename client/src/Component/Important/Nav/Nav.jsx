import React from 'react'
import './Nav.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    

  return (
        <nav>
            <Link to="/" className='title'><img src="Logo.png" alt="Logo" className='Logo' /></Link>
            <div className='menu' 
                onClick={ () => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <i class="fa-duotone fa-bars"></i>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "Open" : ""}>
                <li>
                    <a href="/Home" className='activate'>Home</a>
                </li>
                <li>
                    <Link to="/About" className='About'>About Us</Link>
                </li>
                <li>
                    <Link to="/Blog" className='blog' id='blogs' >Blogs</Link>
                </li>
                <li>
                    <Link to="/Services" className='service'>Services</Link>
                </li>
                <li>
                    <Link to="/Contact-Us" className='Contact'>Contact Us</Link>
                </li>
                <li>

                    <Link to="/Book Apartment" className='Book'>Book Apartment</Link>
                </li>
                <li>
                    <Link to='/BookAppointment' className="active" >Book Appointment</Link>
                </li>
                <li>
                    <Link to='/' className="active" >

                        SIGNUP
                    </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Nav