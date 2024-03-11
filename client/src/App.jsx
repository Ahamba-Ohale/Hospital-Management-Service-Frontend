import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Error from './Component/Error/Error';
import Homepage from './Component/Homepage/Homepage';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Healthblog from './Component/Health blog/Healthblog';
import Box from './Component/BOX/box';
import Foot from './Component/Important/Footer/Foot';
import Admin from './Component/Admin/Admin';
import Main from '../TEST/Main';
import Signup from '../TEST/Signup';
import Signin from '../TEST/Signin';
import EmailVerify from '../TEST/EmailVerify';
import Register from './Component/auth/Register';
import Login from './Component/auth/Login';
// import ForgotPassword from './Component/auth/ForgotPassword';
import VerifyEmail from './Component/auth/VerifyEmail';
import Patient from './Component/Patient/Patient';


function App() {
  const user = localStorage.getItem("token")
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
          <Route path='/Foot' element={<Foot />} />
          <Route path='/box' element={<Box />} />
          <Route path='*' element={<Error />} />
          <Route path='/Admin' element={<Admin />} />

          <Route />
          {user && <Route path="/main" exact element={<Main />} />}
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/signin' exact element={<Signin />} />
          <Route path='/main' exact element={<Navigate replace to="/login" />} />
          <Route path='/users/:id/verify/:token' element={<EmailVerify />} />

          {user && <Route path="/patient" exact element={<Patient />} />}
          <Route path='/register' exact element={<Register />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/patient' exact element={<Navigate replace to="/login" />} />
          <Route path='/users/:id/verify/:token' element={<VerifyEmail />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;