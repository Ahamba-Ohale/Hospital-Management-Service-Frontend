import React, { useState, useEffect, useRef } from 'react';

const AddAppointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Your form data here
    date: '',
    time: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the data to your server or perform any other action
    // Then close the modal
    onClose();
  };

  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };


  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="add-appointment-modal">
        <div className="modal-header">
          <h2>Add Appointment</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            {/* Add more form fields as needed */}
            <button type="submit">Add Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
