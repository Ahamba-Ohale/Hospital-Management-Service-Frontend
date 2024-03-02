import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Error from './Component/Error/Error';
import Homepage from './Component/Homepage/Homepage';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Healthblog from './Component/Health blog/Healthblog';
import Admin from './Component/Admin/Admin';
import Health from './Component/Admin/Health';
import Blog from './Component/Admin/Blog'
import PatientDB from './Component/Admin/PatientDB';
import HospitalManagement from './Component/Admin/HospitalManagement';
import Analytics from './Component/Admin/Analytics';



function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path='/Home' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
          <Route path='/Healthblog' element={<Healthblog />} />
          <Route path='*' element={<Error />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/HealthRecord' element={<Health />} />
          <Route path='/Dashboard' element={<Admin />} />
          <Route path='/Blog Data System' element={<Blog />} />
          <Route path='/Patients Database' element={<PatientDB />} />
          <Route path='/Hospital management' element={<HospitalManagement />} />
          <Route path='/Data Analytics' element={<Analytics />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;