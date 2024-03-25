import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    

  return (
        <nav className='nav'>
            <NavLink to="/" className='title'><img src="Logo.png" alt="Logo" className='Logo' /></NavLink>
            <div className='menu' 
                onClick={ () => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <i className="fa-duotone fa-bars"></i>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "Open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/Blog" >Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/Services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact-Us">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/Book Appointment">Book Appointment</NavLink>
                </li>
                <li>
                    <Link to='/' className="act" >
                        SIGNUP
                    </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Nav