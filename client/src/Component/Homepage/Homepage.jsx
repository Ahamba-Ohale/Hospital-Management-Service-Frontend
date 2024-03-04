import { useState } from 'react'

// import React from 'react'
// import './Homepage.css'
import './Home.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/nav'
import Foot from '../Important/Footer/Foot'



const Homepage = () => {    
    const [menuOpen, setMenuOpen] = useState(false)

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
                    <Link to="/Book Apartment" >Book Apartment</Link>
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

        <Foot/>
    </div>


  )
}

export default Homepage