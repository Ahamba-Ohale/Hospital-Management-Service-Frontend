import { useState } from 'react'
import React from 'react'
// import './health.css'
import './Healthblog.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/nav'
import Foot from '../Important/Footer/Foot'

const Healthblog = () => {    
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
        <Nav />

        <div className="Navigate">
            <div className="cont">
                <a href="/">Home  </a> * <a href="">Health Blog</a>
            </div>
        </div>

        <div className="healthblog">
            <h2 className="health">Health Blog</h2>
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
        </div>

        <Foot />
    </div>



  )
}

export default Healthblog