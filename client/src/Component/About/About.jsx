import { useState } from 'react'
import React from 'react'
// import './About-Us.css'
import './About.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'

const About = () => {    
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <Nav />
            
        <div id="About">
            <div className="about-page">
                <h2 className='about-h2'>ABOUT US</h2>
                <div className="about-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda iste mollitia suscipit optio odit nisi aperiam porro quia accusantium, expedita unde? Delectus iure eum exercitationem. Deleniti fuga adipisci perferendis.
                </div>
            </div>
        </div>

        <div className="abt-body">
            <div className="History">
                <h2 className='his'>HOSPITAL PROFILE AND HISTORY</h2>
                <p className='his-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe odit laudantium totam incidunt repudiandae tenetur voluptates reiciendis debitis nisi laboriosam, culpa eaque non. Laudantium, odit perferendis? Iure, sunt sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat possimus id maiores nemo aspernatur laudantium quis, tempora corrupti porro labore quas unde facilis fuga neque quod asperiores iste molestiae?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae modi magnam veritatis a. Saepe recusandae repellendus neque odit tempore vel cupiditate nemo enim alias iure quas eius, rerum dignissimos ea!</p>
            </div>
        </div>
        
        <div className="profile">
            <h2>STAFF PROFILE</h2>
            <div className="details">
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
                <div className="staff">
                    <div className="pic"></div>
                    <div className="name">Lorem lorem</div>
                    <div className="Course">Lorem lorem</div>
                </div>
            </div>
            <div className="load-btn">
                <a href="" className='load'>Load More</a>
            </div>
        </div>

        <div className="meet-us">
            <h2 className="meet-h1">Contact Us</h2>
            <ul className="Meet-ul">
                <li className="Meet-li"><b>Location:</b> Lorem ipsum, dolor sit amet Lorem ipsum dolor sit.</li>
                <li className="Meet-li" ><b>Mobile Number:</b> +234 8059134022</li>
                <li className="Meet-li"><b>Email address:</b> +Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>

        <Foot />
    </div>



  )
}

export default About