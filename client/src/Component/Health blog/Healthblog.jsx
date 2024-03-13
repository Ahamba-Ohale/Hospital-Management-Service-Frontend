import { useState} from 'react'
import React from 'react'
import './Healthblog.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'

const Healthblog = () => {    
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div> 

        <Nav />



        <Foot />
    </div>



  )
}

export default Healthblog