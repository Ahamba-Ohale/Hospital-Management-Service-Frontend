import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import './auth.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (type, value) => {
    setError((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[type];
      return newErrors;
    });

    switch (type) {
      case 'data.email':
        setData((prevData) => ({ ...prevData, email: value }));
        break;
      case 'data.password':
        setData((prevData) => ({ ...prevData, password: value }));
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    setError(null);

    let formErrors = {};

    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!data.email || !data.password) {
      formErrors.allFields = 'Please fill out all required fields';
    } else {
      if (!data.email) {
        formErrors.email = 'Please enter your email address';
      } else if (!reg.test(data.email)) {
        formErrors.email = 'Please enter a valid email address';
      }

      if (!data.password) {
        formErrors.password = 'Please enter a password';
      } else if (data.password.length < 8) {
        formErrors.password = 'Password must be at least 8 characters long';
      }
    }

    if (Object.keys(formErrors).length > 0) {
      setError({ type: 'form', messages: formErrors });
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) return;

    try {
      setLoading(true);
      const url = 'http://localhost:8080/api/login';
      const { data: response } = await Axios.post(url, data);
      localStorage.setItem('token', response.data);
      setMsg(response.message);
      window.location = '/dashboard';
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      } else {
        console.error(error);
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          {error && error.type === 'form' && (
            <div className="error_msg">
              {Object.values(error.messages).map((errMsg, index) => (
                <div key={index}>{errMsg}</div>
              ))}
            </div>
          )}
          {msg && <div className="success_msg">{msg}</div>}
          <h1>Login to Your Account</h1>
          <form className="form_container" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="input"
              onChange={(e) => handleChange('data.email', e.target.value)}
            />

            <div className="input_group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                className="input"
                onChange={(e) => handleChange('data.password', e.target.value)}
              />
              <div className="password-box" onClick={handleTogglePassword}>
                <span className="password-line"></span>
                <div className="password-icon">
                  <i>{showPassword ? <FaEyeSlash /> : <FaEye />}</i>
                </div>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className={`blue_btn ${
                !(data.email && data.password) ? 'btn_bad' : 'btn_good'
              }`}
            >
              {loading ? (
                <BiLoaderCircle className="animate-spin" color="#fff" size={25} />
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Patient?</h1>
          <Link to="/register">
            <button type="button" className="white_btn">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;