
// import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Error from './Component/Error/Error';
import Homepage from './Component/Homepage/Homepage';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Healthblog from './Component/Health blog/Healthblog';
import Foot from './Component/Important/Footer/Foot';
import Contact from './Component/Contact-us/Contact';
import Blogview from './Component/Blog-view/Blogview';
import Admin from './Component/Admin/Dashboard/Dashboard';
import Health from './Component/Admin/Health/Health';
import Blog from './Component/Admin/Blog/Blog'
import PatientDB from './Component/Admin/PatientDB/PatientDB';
import HospitalManagement from './Component/Admin/HospitalManagement/HospitalManagement';
import Analytics from './Component/Admin/Analytics';
import BookAppointment from './Component/BookAppointment/BookAppointment';
import PatientInfo from './Component/Admin/PatientDB/PatientInfo';
import NewMedRecord from './Component/Admin/PatientDB/NewMedRecord';
import CreatePatient from './Component/Admin/PatientDB/CreatePatient';
import Register from './Component/auth/Register';
import Login from './Component/auth/Login';
import VerifyEmail from './Component/auth/VerifyEmail';
import PatientPortal from './Component/PatientPortal/PatientPortal';
import Records from './Component/PatientPortal/Records/Records';
import CreateInvoice from './Component/Admin/PatientDB/CreateInvoice';
import InvoiceEdit from './Component/Admin/PatientDB/InvoiceEdit';
import InvoiceView from './Component/Admin/PatientDB/InvoiceView';
import ShareInvoice from './Component/Admin/PatientDB/ShareInvoice';
import PatientHealthInfo from './Component/Admin/Health/PatientHealthInfo';
import EditBlog from './Component/Admin/Blog/EditBlog';
import AddEmployee from './Component/Admin/HospitalManagement/AddEmployee';
import AddSpecialist from './Component/Admin/HospitalManagement/AddSpecialist';
import AddRole from './Component/Admin/HospitalManagement/AddRole';
import AddLeave from './Component/Admin/HospitalManagement/AddLeave';
import AddTrainee from './Component/Admin/HospitalManagement/AddTrainee';




function App() {
  // const user = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Routes>
          <Route path='/Home' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blog' element={<Healthblog />} />
          <Route path='/Healthblog' element={<Healthblog />} />
          <Route path='/Contact-Us' element={<Contact />} />
          <Route path='/Blogview' element={<Blogview />} />
          <Route path='/Book Appointment' element={<BookAppointment />} />
          <Route path='/Foot' element={<Foot />} />
          <Route path='*' element={<Error />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/HealthRecord' element={<Health />} />
          <Route path='/Blog Data System' element={<Blog />} />
          <Route path='/Hospital management' element={<HospitalManagement />} />
          <Route path='/Data Analytics' element={<Analytics />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Patients Database' element={<PatientDB />} />
          <Route path='/PatientInfo/view/' element={<PatientInfo />} />
          <Route path='/PatientInfo/view' element={<PatientInfo />} />
          <Route path='/Add-new-record' element={<NewMedRecord />} />
          <Route path='/CreatePatient' element={<CreatePatient />} />
          {/* {user && <Route path='/Portal' exact element={<PatientPortal />} />} */}
          <Route path='/Portal' exact element={<PatientPortal />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          {/* <Route path='/Portal' exact element={<Navigate replace to="/login" />} /> */}
          <Route path="/uers/:id/verify/:token" element={<VerifyEmail />} />
          <Route path='/Records' element={<Records />} />
          <Route path="/CreateInvoice" element={<CreateInvoice />} />
          <Route path="/InvoiceEdit" element={<InvoiceEdit />} />
          <Route path='/InvoiceView' element={<InvoiceView />} />
          <Route path='/ShareInvoice' element={<ShareInvoice />} />
          <Route path='/PatientHealthInfo' element={<PatientHealthInfo />} />
          <Route path='/EditBlog' element={<EditBlog />} />
          <Route path='/AddEmployee' element={<AddEmployee />} />
          <Route path='/AddSpecialist' element={<AddSpecialist />} />
          <Route path='/AddRole' element={<AddRole />} />
          <Route path='/AddLeave' element={<AddLeave />} />
          <Route path='/AddTrainee' element={<AddTrainee />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App;