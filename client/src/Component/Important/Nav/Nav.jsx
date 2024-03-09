import React from 'react'
import './Nav.css'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    

  return (
        <nav>
            <NavLink to="/" className='title'><img src="Logo.png" alt="Logo" className='Logo' /></NavLink>
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
                    <NavLink to="/Home" className='activate'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About" className='About'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/Blog" className='blog' id='blogs' >Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/Services" className='service'>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact-Us" className='Contact'>Contact Us</NavLink>
                </li>
                <li>

                    <NavLink to="/Book Apartment" className='Book'>Book Appointment</NavLink>
                </li>
                <li>
                    <Link to='/' className="act" >

                    <Link to="/Book Apartment" className='Book'>Book Apartment</Link>
                </li>
                <li>
                    <Link to='/BookAppointment' className="active">Book Appointment</Link>
                </li>
                <li>
                    <Link to='/' className="active">
                        SIGNUP
                    </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Nav