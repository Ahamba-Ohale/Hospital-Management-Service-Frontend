import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Services = () => {
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
                    <a href="/Blog" >Blogs</a>
                </li>
                <li>
                    <Link to="/Services" className='activate'>Services</Link>
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

        <div id="About">
            <div className="about-page">
                <h2 className='about-h2'>OUR SERVICES</h2>
                <div className="about-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda iste mollitia suscipit optio odit nisi aperiam porro quia accusantium, expedita unde? Delectus iure eum exercitationem. Deleniti fuga adipisci perferendis.
                </div>
            </div>
        </div>

        <div className="abt-body">
            <div className="History">
                <h2 className='his'>WHAT WE DO</h2>
                <p className='his-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe odit laudantium totam incidunt repudiandae tenetur voluptates reiciendis debitis nisi laboriosam, culpa eaque non. Laudantium, odit perferendis? Iure, sunt sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat possimus id maiores nemo aspernatur laudantium quis, tempora corrupti porro labore quas unde facilis fuga neque quod asperiores iste molestiae?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae modi magnam veritatis a. Saepe recusandae repellendus neque odit tempore vel cupiditate nemo enim alias iure quas eius, rerum dignissimos ea!</p>
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

export default Services