import { useState } from 'react'

// import React from 'react'

import './Home.css'
import './Imagechanger.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'
import {useEffect, useRef } from 'react';



const Homepage = () => {    
    const[menuOpen, setMenuOpen] = useState("")
  return (
    <div>
        <Nav />

        <nav>
            <Link to="/" className='title'>Website</Link>
            <div className='menu' 
                onClick={() => {
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
                    <Link to="/Book Appointment" >Book Appointment </Link>
                </li>
                <li>
                    <Link to='/Register' class="active" >
                        SIGNUP
                    </Link>
                </li>
            </ul>
        </nav>


        <div id="contain">
            <div id="home">
                <div className="home-body">
                    <h1 className='header1' >
                        <p>GREAT TOWERS</p>
                        <p>SPECIALIST HOSPITAL</p>
                    </h1>
                    <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ip.</p>
                    <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing Lorem, ip.</p>
                    <p className='p'>Lorem ipsum, dolor sit amet consectet</p>
                    
                    <a href='' className='link-tag'>Sign Up</a>
                </div>
            </div>
            <div className="about">
                <div className="img">
                    {/* <img src="new.jpg" alt="Image" /> */}
                </div>
                <div className="about-us">
                    <h2 className='para-h2-1' >About Us</h2>
                    <p className='para-g1'>
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
                    <h2 className='para-h2-2'>Our Services</h2>
                    <p className='para-g2'>
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
            <h2 className='health-h2'>Health Blog</h2>
            <div id="blog">
                <div className="blogs">
                    <div className="pic">

                    </div>
                    <p className="contents">
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
                    <p className="contents">
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
                    <p className="contents">
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

        <Foot/>
    </div>


  )
}

export default Homepage