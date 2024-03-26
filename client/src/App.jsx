
// import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';


import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
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
import CreateInvoice from './Component/Admin/PatientDB/CreateInvoice';
import InvoiceEdit from './Component/Admin/PatientDB/InvoiceEdit';
import InvoiceView from './Component/Admin/PatientDB/InvoiceView';
import ShareInvoice from './Component/Admin/PatientDB/ShareInvoice';
import PatientHealthInfo from './Component/Admin/Health/PatientHealthInfo';
import Error from './Component/Error/Error';
import EditBlog from './Component/Admin/Blog/EditBlog';
import AddEmployee from './Component/Admin/HospitalManagement/AddEmployee';
import AddSpecialist from './Component/Admin/HospitalManagement/AddSpecialist';
import AddRole from './Component/Admin/HospitalManagement/AddRole';
import AddLeave from './Component/Admin/HospitalManagement/AddLeave';
import AddTrainee from './Component/Admin/HospitalManagement/AddTrainee';

import Overview from "./Component/PatientPortal/pages/Overview";
import Profile from "./Component/PatientPortal/pages/Profile";
import Records from "./Component/PatientPortal/pages/Records";
import Appointments from "./Component/PatientPortal/pages/Appointments";
import Prescriptions from "./Component/PatientPortal/pages/Prescriptions";
import Payments from "./Component/PatientPortal/pages/Payments";
// import Feedback from "./Component/PatientPortal/pages/Feedback";
import Help from "./Component/PatientPortal/pages/Help";
import ViewMedRec from './Component/Admin/PatientDB/ViewMedRec';

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
          <Route path='/Admin' element={<Admin />} />
          <Route path='/HealthRecord' element={<Health />} />
          <Route path='/Blog Data System' element={<Blog />} />
          <Route path='/Hospital management' element={<HospitalManagement />} />
          <Route path='/Data Analytics' element={<Analytics />} />
          <Route path='/Register' element={<Register />} />
        


          <Route path='/Patients Database' element={<PatientDB />} />
          <Route path='/PatientInfo/view/:patient_id' element={<PatientInfo />} />


          <Route path='/Add-new-record/:patient_id' element={<NewMedRecord />} />
          <Route path='/PatientInfo/view' element={<PatientInfo />} />

          <Route path='/Add-new-record' element={<NewMedRecord />} />
          <Route path='/ViewMedRec' element={<ViewMedRec />} />

          <Route path='/CreatePatient' element={<CreatePatient />} />
          {/* {user && <Route path='/Patient/Portal/*' exact element={<PatientPortal />} />} */}
          {/* <Route path='/Patient/Portal/*' exact element={<PatientPortal />} /> */}
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          {/* <Route path='/Portal' exact element={<Navigate replace to="/login" />} /> */}
          <Route path="/uers/:id/verify/:token" element={<VerifyEmail />} />
          <Route path="/CreateInvoice" element={<CreateInvoice />} />
          <Route path="/InvoiceEdit" element={<InvoiceEdit />} />
          <Route path='/InvoiceView' element={<InvoiceView />} />
          <Route path='/ShareInvoice' element={<ShareInvoice />} />
          <Route path='/PatientHealthInfo' element={<PatientHealthInfo />} />
          <Route path='*' element={<Error />} />
          <Route path='/EditBlog' element={<EditBlog />} />
          <Route path='/AddEmployee' element={<AddEmployee />} />
          <Route path='/AddSpecialist' element={<AddSpecialist />} />
          <Route path='/AddRole' element={<AddRole />} />
          <Route path='/AddLeave' element={<AddLeave />} />
          <Route path='/AddTrainee' element={<AddTrainee />} />

          <Route path="/Patient/Overview" element={<Overview />} />
          <Route path="/Patient/Records" element={<Records />} />
          <Route path="/Patient/Appointments" element={<Appointments />} />
          <Route path="/Patient/Prescriptions" element={<Prescriptions />} />
          <Route path="/Patient/Payments" element={<Payments />} />
          {/* <Route path="/Patient/Feedback" element={<Feedback />} /> */}
          <Route path="/Patient/Profile" element={<Profile />} />
          <Route path="/Patient/Help" element={<Help />} />
        </Routes>
        {/* <PatientPortal /> */}
      </Router>
    </>
  )
}

export default App;