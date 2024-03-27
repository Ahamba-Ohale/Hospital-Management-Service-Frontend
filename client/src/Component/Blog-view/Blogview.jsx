import React from 'react'
import './Blogview.css'
import Nav from '../Important/Nav/Nav'

const Blogview = () => {

  return (
    <div>
      <Nav />
      <div className="bview">
        <div className="tview">
          <div className="bpicture">
            <img src="doctor2.jpg" alt="" className='bimg' />
          </div>
          <div className="btitle">
            <h2 className="b-h2">Blog titles more and moreBlog titles more and more</h2>
            <p className="date">FEB 12 2024</p>
          </div>
        </div>
        <div className="cview">
          <p className='pcontent'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Libero sint fugit sapiente velit atque aliquid numquam 
            \ipsum est, eveniet pariatur, dolorum quaerat aperiam
             voluptate id perspiciatis ad nesciunt nisi officiis 
             sunt, corporis magnam aut vitae ut delectus? Repellat 
             natus neque ratione eos, quisquam vitae? Temporibus hic +
             molestias quo quae ex?
          </p>
        </div>
      </div>
    </div>

  )
}

export default Blogview