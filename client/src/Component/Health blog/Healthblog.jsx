import { useState } from 'react'
import React from 'react'
import './health.css'
import './Healthblog.css'
import {Link} from 'react-router-dom'

const Healthblog = () => {    
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <nav>
            <Link to="/" className='title'>Website</Link>
            <div className='menu' 
                onClick={() => {
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
                    <Link to="/Home" >Home</Link>
                </li>
                <li>
                    <Link to="/About" >About Us</Link>
                </li>
                <li>
                    <Link to="/Services" >Services</Link>
                </li>
                <li>
                    <Link to="/Contact Us" >Contact Us</Link>
                </li>
                <li>
                    <Link to="/Book Apartment" >Book Apartment</Link>
                </li>
                <li>
                    <Link to='/' class="active" >
                        SIGNUP
                    </Link>
                </li>
            </ul>
        </nav>

        <div className="Navigate">
            <div className="cont">
                <a href="/">Home  </a> * <a href="">Health Blog</a>
            </div>
        </div>

        <div className="healthblog">
            <h2 className="health">Health Blog</h2>
            <div className="health-blog content">
                
            </div>
        </div>

        <footer>
                <div className="main">
                    <div className="sub">
                        <h4>GREAT TOWERS</h4>
                        <h4>SPECIALIST HOSPITAL</h4>
                    </div>
                    <div className="sub-dom">
                        <div className="company">
                            <ul>
                                <label>
                                    <b>
                                        Company
                                    </b>
                                </label>
                                <li>
                                    <a href="">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="company">
                            <ul>
                                <label>
                                    <b>
                                        Resources
                                    </b>
                                </label>
                                <li>
                                    <a href="">Blogs</a>
                                </li>

                                <li>
                                    <a href="">Appointment</a>
                                </li>
                            </ul>
                        </div>
                        <div className="company">
                            <ul>
                                <label>
                                    <b>
                                        Contact
                                    </b>
                                </label>
                                <li>
                                    <a href="">+234 8059134022</a>
                                </li>
                                <li>
                                    <a href="">greattower@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="company">
                            <ul>
                                <label>
                                    <b>
                                        Social Links
                                    </b>
                                </label>
                                <li>
                                    <a href=""><i className='fa fa-facebook'></i>Facebook</a>
                                </li>
                                <li>
                                    <a href=""><i className='fa fa-Instagran'></i>Instagram</a>
                                </li>
                                <li>
                                    <a href=""><i className='fa fa-Linkedin'></i>Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>    
                <div className="line">
                    <small>@ All rights reserved. 2024</small>  
                </div>      
        </footer>
    </div>



  )
}

export default Healthblog