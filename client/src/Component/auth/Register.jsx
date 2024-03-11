import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import passwordValidator from 'password-validator';
import './auth.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';

const Register = () => {
  const titles = [
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Mrs.', label: 'Mrs.' },
    { value: 'Dr.', label: 'Dr.' },
    { value: 'Ms.', label: 'Ms.' },
    { value: 'Master', label: 'Master' },
    { value: 'Other', label: 'Other' },
  ];

  const genders = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [data, setData] = useState({
    title: '',
    gender: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: null,
    dateOfBirth: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateTitle = (value) => {
    return titles.some((title) => title.value === value) ? null : 'Please select a valid title';
  };

  const validateGender = (value) => {
    return genders.some((gender) => gender.value === value) ? null : 'Please select a valid gender';
  };

  const validateName = (value) => {
    return value.length >= 3 ? null : 'Full Name must be at least 3 characters long';
  };

  const validateEmail = (value) => {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return reg.test(value) ? null : 'Please enter a valid email address';
  };

  const validatePassword = (value) => {
    const isPasswordValid = passwordSchema.validate(value, { list: true });
    return isPasswordValid.length === 0 ? null : `Password must be strong`;
  };

  const validateConfirmPassword = (value) => {
    return value === data.password ? null : 'Passwords do not match';
  };

  const validateContact = (value) => {
    const reg = /(?:\+?(\d{1,4}?)[-\s.]?)?((\d{3})|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}/;
    return reg.test(value) ? null : 'Contact must be a valid phone number';
  };

  const validateDateOfBirth = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    return selectedDate < currentDate ? null : 'Invalid date of birth';
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
      case 'title':
        fieldError = validateTitle(value);
        break;
      case 'gender':
        fieldError = validateGender(value);
        break;
      case 'name':
        fieldError = validateName(value);
        break;
      case 'email':
        fieldError = validateEmail(value);
        break;
      case 'password':
        fieldError = validatePassword(value);
        break;
      case 'confirmPassword':
        fieldError = validateConfirmPassword(value);
        break;
      case 'contact':
        fieldError = validateContact(value);
        break;
      case 'dateOfBirth':
        fieldError = validateDateOfBirth(value);
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
  
    const filledFields = Object.values(data).filter((value) => {
      return value !== null && value !== '' && value !== undefined;
    });
  
    const emptyFields = Object.values(data).filter((value) => {
      return value === null || value === '' || value === undefined;
    });
  
    // Check if empty fields are greater than filled fields
    if (emptyFields.length > filledFields.length) {
      formErrors['_general'] = 'Please fill out all required fields';
    } else {
      // Validate each field
      Object.entries(data).forEach(([type, value]) => {
        let fieldError = null;
        switch (type) {
          case 'title':
            fieldError = validateTitle(value);
            break;
          case 'gender':
            fieldError = validateGender(value);
            break;
          case 'name':
            fieldError = validateName(value);
            break;
          case 'email':
            fieldError = validateEmail(value);
            break;
          case 'password':
            fieldError = validatePassword(value);
            break;
          case 'confirmPassword':
            fieldError = validateConfirmPassword(value);
            break;
          case 'contact':
            fieldError = validateContact(value);
            break;
          case 'dateOfBirth':
            fieldError = validateDateOfBirth(value);
            break;
          default:
            break;
        }
  
        if (fieldError) {
          formErrors[type] = fieldError;
        }
      });
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
      const url = 'http://localhost:8080/api/register';
      const { data: response } = await Axios.post(url, data);
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
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome back</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sign In
            </button>
          </Link>
        </div>
        <div className="right">
          {error && error.type === 'form' && (
            <div className="error_msg">
              {Object.values(error.messages).map((errMsg, index) => (
                <div key={index}>{errMsg}</div>
              ))}
            </div>
          )}
          {msg && <div className="success_msg">{msg}</div>}
          <h1>Create Account</h1>
          <form className="form_container" onSubmit={handleSubmit}>
            <Select
              id="title"
              name="title"
              placeholder=""
              options={titles}
              onChange={(selectedOption) => handleChange('title', selectedOption?.value)}
            />

            <Select
              id="gender"
              name="gender"
              placeholder=""
              options={genders}
              onChange={(selectedOption) => handleChange('gender', selectedOption?.value)}
            />

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="input"
              onChange={(e) => handleChange('name', e.target.value)}
            />

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

            <div className="input_group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input"
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
              />
              <div className="password-box" onClick={handleToggleConfirmPassword}>
                <span className="password-line"></span>
                <div className="password-icon">
                  <i>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</i>
                </div>
              </div>
            </div>

            <PhoneInput
              defaultCountry="US"
              placeholder="Phone Number"
              value={data.contact}
              className="input"
              onChange={(value) => handleChange('contact', value)}
            />

            <DatePicker
              selected={data.dateOfBirth}
              className="input"
              onChange={(date) => handleChange('dateOfBirth', date)}
              placeholderText="MM/DD/YY"
            />

            <div className="btn">
              <button
                disabled={loading}
                type="submit"
                className={`blue_btn ${
                  !(
                    data.title &&
                    data.gender &&
                    data.name &&
                    data.email &&
                    data.password &&
                    data.confirmPassword &&
                    data.contact &&
                    data.dateOfBirth
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;