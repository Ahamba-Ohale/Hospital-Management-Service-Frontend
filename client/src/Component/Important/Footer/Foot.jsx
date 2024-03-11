import React from 'react'
import './Foot.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Foot = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
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
                <div className="company seperate">
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
  )
}

export default Foot