// Imports
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css'; // Import your CSS file

const Register = () => {
  const relationships = ['Spouse', 'Parent', 'Sibling', 'Friend', 'Other'];
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dateOfBirth: '',
    address: {
      country: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    emergencyContact: {
      name: '',
      relationship: relationships[0],
      contact: '',
    }
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      emergencyContact: {
        ...prevData.emergencyContact,
        [name]: value,
      },
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using formData
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
            <div
              className="password-icon"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        
        <div className="form-group date-of-birth-wrapper">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
            />
        </div>

        <div className="form-group">
          <label htmlFor="addressCountry">Country</label>
          <input
            type="text"
            id="addressCountry"
            name="country"
            value={formData.address.country}
            onChange={handleAddressChange}
            placeholder="Enter country"
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressStreet">Street</label>
          <input
            type="text"
            id="addressStreet"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            placeholder="Enter street"
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressCity">City</label>
          <input
            type="text"
            id="addressCity"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
            placeholder="Enter city"
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressState">State</label>
          <input
            type="text"
            id="addressState"
            name="state"
            value={formData.address.state}
            onChange={handleAddressChange}
            placeholder="Enter state"
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressZip">ZIP Code</label>
          <input
            type="text"
            id="addressZip"
            name="zip"
            value={formData.address.zip}
            onChange={handleAddressChange}
            placeholder="Enter ZIP code"
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactName">Emergency Contact Name</label>
          <input
            type="text"
            id="emergencyContactName"
            name="name"
            value={formData.emergencyContact.name}
            onChange={handleEmergencyContactChange}
            placeholder="Enter name"
          />
        </div>

        <div className="form-group select-wrapper">
            <label htmlFor="relationship">Relationship</label>
            <select
                id="relationship"
                name="relationship"
                value={formData.emergencyContact.relationship}
                onChange={handleEmergencyContactChange}
            >
                {relationships.map((relationship) => (
                <option key={relationship} value={relationship}>
                    {relationship}
                </option>
                ))}
            </select>
            <div className="select-icon">&#9660;</div>
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            name="contact"
            value={formData.emergencyContact.contact}
            onChange={handleEmergencyContactChange}
            placeholder="Enter contact number"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;