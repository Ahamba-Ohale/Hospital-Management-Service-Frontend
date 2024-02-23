import { useState } from 'react'
import React from 'react'
import './Homepage.css'
import './Home.css'
import {Link} from 'react-router-dom'

const Homepage = () => {    
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

        <div id="contain">
            <div id="home">
                <div className="home-body">
                    <h1>
                        <p>GREAT TOWERS</p>
                        <p>SPECIALIST HOSPITAL</p>
                    </h1>
                    <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ip.</p>
                    <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ip.</p>
                    <p className='p'>Lorem ipsum, dolor sit amet consectet</p>
                    
                    <a href=''>Sign Up</a>
                </div>
            </div>
            <div className="about">
                <div className="img">
                    {/* <img src="new.jpg" alt="Image" /> */}
                </div>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                    </p>
                    <a href="/About" className='learn'>Learn More</a>
                </div>
            </div>
            <div className="about">
                <div className="about-uss">
                    <h2>Our Services</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                    </p>
                    <a href="/Services" className='learn'>Learn More</a>
                </div>
                <div className="img">
                    {/* <img src="new.jpg" alt="Image" /> */}
                </div>
            </div>
        </div>

        <div id="Health-Blog">
            <h2>Health Blog</h2>
            <div id="blog">
                <div className="blogs">
                    <div className="pic">

                    </div>
                    <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa quis dolores vero facere, porro provident est sequi 
                    </p>
                    <b className="dat">
                        FEB 21,2024
                    </b>
                </div>
                <div className="blogs">
                    <div className="pic">

                    </div>
                    <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa quis dolores vero facere, porro provident est sequi 
                    </p>
                    <b className="dat">
                        FEB 21,2024
                    </b>
                </div>
                <div className="blogs">
                    <div className="pic">

                    </div>
                    <p className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsa quis dolores vero facere, porro provident est sequi 
                    </p>
                    <b className="dat">
                        FEB 21,2024
                    </b>
                </div>
                
            </div>
            <div className="button">
                <a href="Healthblog" className='learn'>Learn More</a>
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

export default Homepage