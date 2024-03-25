import { useState } from 'react'
import React from 'react'
import './Home.css'
import './Imagechanger.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'
import {useEffect, useRef } from 'react';
import '../Important/Slidecss/Transition.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';





const Homepage = () => {    
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2, // Trigger animation when 50% of the element is in view
      });
    
      useEffect(() => {
        if (inView) {
          // Trigger animations when the component is in view
          // You can customize this logic based on your needs
        }
      }, [inView]);
  return (
    <div>

        <Nav />


        <div id="contain">
            <div id="home">
                <div className="home-body slide-in">
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
                <motion.div 
                    ref={ref}
                    className="img"
                    initial={{ opacity: 0 }} // Initial state: hidden
                    animate={inView ? { opacity: 1 } : {}} // Fade in when in view
                    transition={{ delay: 0.8, duration: 0.5 }} 
                >
                    {/* <img src="new.jpg" alt="Image" /> */}
                </motion.div>
                <motion.div 
                className="about-us" 
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay:2 ,duration: 1.5 }}
                >
                    <h2
                        className='para-h2-1'
                    >
                        About Us
                    </h2>
                    <p
                        className='para-g1'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                    </p>
                    <a className='learn'
                    >
                        Learn More
                    </a>
                </motion.div>
            </div>
            <div className="about">
                <motion.div 
                className="about-uss"
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay:2, duration: 1.5 }}
                >
                    <h2 className='para-h2-2'>Our Services</h2>
                    <p className='para-g2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vel.
                    </p>
                    <a href="/Services" className='learn'>Learn More</a>
                </motion.div>
                <motion.div 
                    ref={ref}
                    className="img"
                    initial={{ opacity: 0 }} // Initial state: hidden
                    animate={inView ? { opacity: 1 } : {}} // Fade in when in view
                    transition={{ delay: 0.8, duration: 0.5 }} 
                >
                    {/* <img src="new.jpg" alt="Image" /> */}
                </motion.div>
            </div>
        </div>

        <div className="mhb">
            <motion.h2 
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay:0,duration: 0.5 }}
                className="mhb-h2">Health Blog</motion.h2>
            <div id="Helt-Blog">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay:2,duration: 1.5 }}
                    className="b-blog">
                    <div className="b-blog-pic">
                        <img src="doctor.jpg" alt="" className='b-blog-img'/>
                    </div>
                    <div className="b-blog-content">
                    <p className="b-blog-date">
                        MARCH 10 2024
                    </p>
                    <p className="b-blog-title">
                        Blog title and more
                    </p>
                    <p className="b-blog-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100}}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay:2, duration: 1.5 }}
                    className="b-blog">
                    <div className="b-blog-pic">
                        <img src="doctor.jpg" alt="" className='b-blog-img'/>
                    </div>
                    <div className="b-blog-content">
                    <p className="b-blog-date">
                        MARCH 10 2024
                    </p>
                    <p className="b-blog-title">
                        Blog title and more
                    </p>
                    <p className="b-blog-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                    </div>
                </motion.div>
            </div>
        </div>

        <Foot/>
    </div>




  )
}

export default Homepage