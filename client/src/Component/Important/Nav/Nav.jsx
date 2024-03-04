import React from 'react'
import './Nav.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
        <nav>
            <Link to="/" className='title'>Website</Link>
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
                    <a href="/About" >About Us</a>
                </li>
                <li>
                    <a href="/Blog" >Blogs</a>
                </li>
                <li>
                    <a href="/Services" >Services</a>
                </li>
                <li>
                    <a href="/Contact Us" >Contact Us</a>
                </li>
                <li>
                    <a href="/BookAppointment" >Book Appointment</a>
                </li>
                <li>
                    <a to='/' className="active" >
                        SIGNUP
                    </a>
                </li>
            </ul>
        </nav>
  )
}

export default Nav