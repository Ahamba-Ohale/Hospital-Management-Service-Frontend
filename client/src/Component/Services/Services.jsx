import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Nav from '../Important/Nav/nav'
import Foot from '../Important/Footer/Foot'

const Services = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>

        <Nav />

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
        

        <Foot />



    </div>
  )
}

export default Services