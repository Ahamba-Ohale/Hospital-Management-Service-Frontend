import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'
import './Services.css'

const Services = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>

        <Nav />

        <div id="About">
            <div className="Service-page">
                <h2 className='Service-h2'>OUR SERVICES</h2>
                <div className="Service-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda iste mollitia suscipit optio odit nisi aperiam porro quia accusantium, expedita unde? Delectus iure eum exercitationem. Deleniti fuga adipisci perferendis.
                </div>
            </div>
        </div>

        <div className="abt-body">
            <div className="Service-History">
                <h2 className='Service-his'>WHAT WE DO</h2>
                <p className='Service-his-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe odit laudantium totam incidunt repudiandae tenetur voluptates reiciendis debitis nisi laboriosam, culpa eaque non. Laudantium, odit perferendis? Iure, sunt sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat possimus id maiores nemo aspernatur laudantium quis, tempora corrupti porro labore quas unde facilis fuga neque quod asperiores iste molestiae?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae modi magnam veritatis a. Saepe recusandae repellendus neque odit tempore vel cupiditate nemo enim alias iure quas eius, rerum dignissimos ea!</p>
            </div>
        </div>
        

        <Foot />



    </div>
  )
}

export default Services