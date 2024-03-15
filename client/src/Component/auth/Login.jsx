import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import passwordValidator from 'password-validator';
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

  const passwordSchema = new passwordValidator();
  passwordSchema
    .is()
    .min(8)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits()
    .has()
    .symbols();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value) => {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return reg.test(value) ? null : 'Please enter a valid email address';
  };

  const validatePassword = (value) => {
    const isPasswordValid = passwordSchema.validate(value, { list: true });
    return isPasswordValid.length === 0 ? null : `Password must be strong`;
  };

  const handleChange = (type, value) => {
    setError((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[type];
      return newErrors;
    });

    // Validate each field
    let fieldError = null;
    switch (type) {
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'password':
        fieldError = validatePassword(value);
        break;
      default:
        break;
    }

    if (fieldError) {
      setError((prevErrors) => ({ ...prevErrors, [type]: fieldError }));
    } else {
      setData((prevData) => ({ ...prevData, [type]: value }));
    }
  };

  const validateForm = () => {
    setError(null);
  
    let formErrors = {};
  
    // Validate each field
    Object.entries(data).forEach(([type, value]) => {
      let fieldError = null;
      switch (type) {
        case 'email':
          fieldError = validateEmail(value);
          break;
        case 'password':
          fieldError = validatePassword(value);
          break;
        default:
          break;
      }
  
      if (fieldError) {
        formErrors[type] = fieldError;
      }
    });
  
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
      const url = 'http://localhost:8080/api/auth';
      const { data: response } = await Axios.post(url, data);
      localStorage.setItem("token", response.data);
      window.location = "/Portal"
      setMsg(response.message);
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
              onChange={(e) => handleChange('email', e.target.value)}
            />

            <div className="input_group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                className="input"
                onChange={(e) => handleChange('password', e.target.value)}
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
                !(
                  data.email &&
                  data.password
                )
                  ? 'btn_bad'
                  : 'btn_good'
              }`}
            >
              {loading ? (
                <BiLoaderCircle className="animate-spin" color="#fff" size={25} />
              ) : (
                'Sign Up'
              )}
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Patient ?</h1>
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