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

          <div className="health-blog">
            <div className="hbc">

            </div>
            <div className="healthm">
              <div className="health1">
                <div className="bblog">
                  <div className="bblog-pic">
                    <img src="doctor.jpg" alt="" className='bblog-img'/>
                  </div>
                  <div className="bblog-content">
                    <p className="bblog-date">
                      MARCH 10 2024
                    </p>
                    <p className="bblog-title">
                      Blog title and more
                    </p>
                    <p className="bblog-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                  </div>
                </div>
                <div className="bblog">
                  <div className="bblog-pic">
                    <img src="doctor.jpg" alt="" className='bblog-img'/>
                  </div>
                  <div className="bblog-content">
                    <p className="bblog-date">
                      MARCH 10 2024
                    </p>
                    <p className="bblog-title">
                      Blog title and more
                    </p>
                    <p className="bblog-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                  </div>
                </div>
                <div className="bblog">
                  <div className="bblog-pic">
                    <img src="doctor.jpg" alt="" className='bblog-img'/>
                  </div>
                  <div className="bblog-content">
                    <p className="bblog-date">
                      MARCH 10 2024
                    </p>
                    <p className="bblog-title">
                      Blog title and more
                    </p>
                    <p className="bblog-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                  </div>
                </div>
                <button className="btn-learn">Learn More</button>
              </div>
              <div className="health2">
                <div className="post">
                  <h2 className='post-h2'>Let the posts come to you.</h2>
                  <form action="" className='post-form'>
                    <label htmlFor="" className='post-label'>Email *</label>
                    <br />
                    <input type="Email"  className='post-input'/>
                    <div className="button-div">
                      <button className='sub-btn'>Submit</button>
                    </div>
                  </form>
                </div>

                <div className="Instag">
                  <h2 className='Instag-h2'>Find me on Instagram</h2>
                  <div className="insta-pics">
                    <div className='grid'>
                      <li className="insta-li"><img src="doctor2.jpg" alt="" className="insta-img" /></li>
                      <li className="insta-li"><img src="doctor2.jpg" alt="" className="insta-img" /></li>
                      <li className="insta-li"><img src="doctor2.jpg" alt="" className="insta-img" /></li>
                      <li className="insta-li"><img src="doctor2.jpg" alt="" className="insta-img" /></li>
                      <li className="insta-li"><img src="doctor2.jpg" alt="" className="insta-img" /></li>
                      <li className="insta-li"><img src="doctor2.jpg" alt="" className="insta-img" /></li>
                    </div>
                  </div>
                  <div className="social-link">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        <Foot />
    </div>



  )
}

export default Healthblog