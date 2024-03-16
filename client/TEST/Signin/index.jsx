import './styles.modules.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signin = () => {
    
  const [error, setError] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({...data, [input.name]: input.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:8080/api/auth';
      const { data: response } = await axios.post(url, data);
      localStorage.setItem("token", response.data);
      window.location = "/"
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
    <div className='login_container'>
      <div className='login_form_container'>
        <div className='left'>
        <form className='form_container' onSubmit={handleSubmit}>
          <h1>Log in to your Account</h1>
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
            <button
              type="submit"
              className='green_btn'>
                Sign Up
            </button>
          </form>
        </div>
        <div className='right'>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className='white_btn'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;