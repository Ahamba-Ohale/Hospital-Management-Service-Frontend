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

        <Nav 
            
        />

        <div className="Navigate">
            <div className="cont">
                <a href="/">Home  </a> * <a href="">Health Blog</a>
            </div>
        </div>

        <div className="healthblog">
            <h2 className="health">Health Blog</h2>
            <div className="details">
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
                <div className="staff">
                    <div className="pictures"></div>
                    <div className="author_date author">
                        <p>10 Feb 24</p>
                    </div>
                    <h4 className="titles">Blog Title and more header for blog </h4>
                    <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia minus totam tenetur, facilis deserunt aperiam ullam cupiditate. Quis dicta vel quas, quasi amet, ipsam impedit pariatur incidunt reprehenderit numquam et.</div>
                </div>
            </div>
        </div>

        <Foot />
    </div>



  )
}

export default Healthblog