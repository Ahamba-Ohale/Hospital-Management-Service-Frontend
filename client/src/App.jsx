import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Error from './Component/Error/Error';
import Homepage from './Component/Homepage/Homepage';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Healthblog from './Component/Health blog/Healthblog';
import Foot from './Component/Important/Footer/Foot';
import Contact from './Component/Contact-us/Contact';


function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path='/Home' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blog' element={<Healthblog />} />
          <Route path='/Healthblog' element={<Healthblog />} />
          <Route path='/Contact-Us' element={<Contact />} />
          <Route path='/Foot' element={<Foot />} />
          <Route path='*' element={<Error />} />
          <Route />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;