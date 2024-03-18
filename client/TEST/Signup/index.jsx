import './styles.modules.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({...data, [input.name]: input.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:8080/api/users';
      const { data: response } = await axios.post(url, data);
      setMsg(response.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        console.error(error);
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='signup_container'>
      <div className='signup_form_container'>
        <div className='left'>
          <h1>Welcome back</h1>
          <Link to="/login">
            <button type="button" className='white_btn'>
              Sign In
            </button>
          </Link>
        </div>
        <div className='right'>
          <form className='form_container' onSubmit={handleSubmit}>
          <h1>Create Account</h1>
           <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className='input'
              value={data.firstName}
              required
              onChange={handleChange}
            />

            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className='input'
              value={data.lastName}
              required
              onChange={handleChange}
            />

           <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className='input'
              value={data.email}
              required
              onChange={handleChange}
            />

           <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className='input'
              value={data.password}
              required
              onChange={handleChange}
            />
            {error && <div className='error_msg'>{error}</div>}
            {msg && <div className='success_msg'>{msg}</div>}
            <button
              type="submit"
              className='green_btn'>
                Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;