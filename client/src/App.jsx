import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Error from './Component/Error/Error';
import Homepage from './Component/Homepage/Homepage';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Healthblog from './Component/Health blog/Healthblog';
import Foot from './Component/Important/Footer/Foot';
import Contact from './Component/Contact-us/Contact';
import Blogview from './Component/Blog-view/Blogview';
import Registration from './Component/Registertion/Registration';
import ABlogs from './Component/A-Blogs/ABlogs';


function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/SignUp' element={<Registration/>} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blog' element={<Healthblog />} />
          <Route path='/Healthblog' element={<Healthblog />} />
          <Route path='/Allblogs' element={<ABlogs />} />
          <Route path='/Contact-Us' element={<Contact />} />
          <Route path='/Blogview' element={<Blogview />} />
          <Route path='/Foot' element={<Foot />} />
          <Route path='*' element={<Error />} />
          <Route />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;