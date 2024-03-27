import { useState} from 'react'
import React from 'react'
import './Healthblog.css'
import {Link} from 'react-router-dom'
import Nav from '../Important/Nav/Nav'
import Foot from '../Important/Footer/Foot'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {useEffect, useRef } from 'react'
import  axios from 'axios'


const Healthblog = () => {    

    const [menuOpen, setMenuOpen] = useState(false)
    const { ref, inView } = useInView({
      triggerOnce: true, // Only trigger once
      threshold: 0, // Trigger animation when 20% of the element is in view
    });
  
    useEffect(() => {
      if (inView) {
        // Trigger animations when the component is in view
        // You can customize this logic based on your needs
      }
    }, [inView]);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // Fetch data from the API endpoint
      axios.get('http://localhost:8080/api/articleRoutes/')
        .then(response => {
          // Extract the posts data from the response
          const fetchedPosts = response.data;
          setPosts(fetchedPosts);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }, []);

  

  return (
    <div> 

        <Nav />

          <div className="health-blog">
            <div className="hbc">

            </div>
            <div className="healthm">
              <div className="health1">
                <motion.div
                className="bblog"
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay:1,duration: .9 }}
                >
                  <motion.div 
                    ref={ref}
                    className="bblog-pic"
                    initial={{ opacity: 0 }} // Initial state: hidden
                    animate={inView ? { opacity: 1 } : {}} // Fade in when in view
                    transition={{ delay: 2, duration: 1 }} >
                    <img src="doctor.jpg" alt="" className='bblog-img'/>
                  </motion.div>
                  {posts && posts.map(post => (
                    <motion.div 
                      key={post._id} // Make sure to set a unique key for each post
                      className="bblog-content"
                      initial={{ opacity: 0, x: 100 }} // Initial state: hidden
                      animate={{ opacity: 1, x: 0 }} // Fade in and slide in when in view
                      transition={{ delay: 2, duration: 1.5 }}
                    >
                      <p className="bblog-date">{post.createdAt}</p>
                      <p className="bblog-title">{post.title}</p>
                      <p className="bblog-text">{post.body}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                className="bblog"
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay:1,duration: .9 }}
                >
                  <motion.div 
                    ref={ref}
                    className="bblog-pic"
                    initial={{ opacity: 0 }} // Initial state: hidden
                    animate={inView ? { opacity: 1 } : {}} // Fade in when in view
                    transition={{ delay: 2, duration: 1.5 }} >
                    <img src="doctor.jpg" alt="" className='bblog-img'/>
                  </motion.div>
                  <motion.div 
                    ref={ref}
                    className="bblog-content"
                    initial={{ opacity: 0 , x: 100}} // Initial state: hidden
                    animate={inView ? { opacity: 1, x: 0 } : {}} // Fade in when in view
                    transition={{ delay: 2, duration: 1.5 }} >
                    <p className="bblog-date">
                      MARCH 10 2024
                    </p>

                    <p className="bblog-title">
                      Blog title and more
                    </p>
                    <p className="bblog-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                className="bblog"
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay:1,duration: .9 }}
                >
                  <motion.div 
                    ref={ref}
                    className="bblog-pic"
                    initial={{ opacity: 0 }} // Initial state: hidden
                    animate={inView ? { opacity: 1 } : {}} // Fade in when in view
                    transition={{ delay: 2, duration: 1.5 }} >
                    <img src="doctor.jpg" alt="" className='bblog-img'/>
                  </motion.div>
                  <motion.div 
                    ref={ref}
                    className="bblog-content"
                    initial={{ opacity: 0 , x: 100}} // Initial state: hidden
                    animate={inView ? { opacity: 1, x: 0 } : {}} // Fade in when in view
                    transition={{ delay: 2, duration: 1.5 }} >
                    <p className="bblog-date">
                      MARCH 10 2024
                    </p>
                    <p className="bblog-title">
                      Blog title and more
                    </p>
                    <p className="bblog-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, voluptates?
                    </p>
                  </motion.div>
                </motion.div>
                <button className="btn-learn">All Post</button>
              </div>
              <motion.div
              ref={ref}
              className="health2"
              initial={{ opacity: 0 }} // Initial state: hidden
              animate={inView ? { opacity: 1 } : {}} // Fade in when in view
              transition={{ delay: 0.8, duration: 1.5 }} 
              >
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
                    <ul className="social-icon">
                      <li className="social-li">hello</li>
                      <li className="social-li">hello</li>
                      <li className="social-li">hello</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        <Foot />
    </div>



  )
}

export default Healthblog