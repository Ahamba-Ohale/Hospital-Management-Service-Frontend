import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'
import './Services.css'
import {useEffect, useRef } from 'react';
import '../Important/Slidecss/Transition.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0, // Trigger animation when 50% of the element is in view
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

        <div id="About">
            <div className="Service-page slide-in">
                <h2 className='Service-h2'>OUR SERVICES</h2>
                <div className="Service-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit assumenda iste mollitia suscipit optio odit nisi aperiam porro quia accusantium, expedita unde? Delectus iure eum exercitationem. Deleniti fuga adipisci perferendis.
                </div>
            </div>
        </div>

        <motion.div 
            className="abt-body"
            initial={{ opacity: 0 }} // Initial state: hidden
            animate={inView ? { opacity: 1 } : {}} // Fade in when in view
            transition={{ delay: 2, duration: 1.5 }} 
            ref={ref}
            >
            <div className="Service-History">
                <h2 className='Service-his'>WHAT WE DO</h2>
                <p className='Service-his-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe odit laudantium totam incidunt repudiandae tenetur voluptates reiciendis debitis nisi laboriosam, culpa eaque non. Laudantium, odit perferendis? Iure, sunt sed.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat possimus id maiores nemo aspernatur laudantium quis, tempora corrupti porro labore quas unde facilis fuga neque quod asperiores iste molestiae?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae modi magnam veritatis a. Saepe recusandae repellendus neque odit tempore vel cupiditate nemo enim alias iure quas eius, rerum dignissimos ea!</p>
            </div>
        </motion.div>
        

        <Foot />



    </div>
  )
}

export default Services