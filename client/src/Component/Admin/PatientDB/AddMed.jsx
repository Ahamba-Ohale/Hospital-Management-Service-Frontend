import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';


const AddMed = ({ onClose }) => {
  const options = [
    { value: 'mg', label: 'Mg' },
    { value: 'ml', label: 'Ml' },
    { value: 'gm', label: 'Gm' },
    { value: 'kg', label: 'Kg' },
    { value: 'ib', label: 'Ib' },
    { value: 'tbsp', label: 'Tbsp' },
    { value: 'tablet', label: 'Tablet' },
    { value: 'capsule', label: 'Capsule' }
  ];

  const [selectedOption, setSelectedOption] = useState(null);


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
          <h2>Add Medicine</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <label>Medicine Name:
            <input
              type="text"
              name="text"
              required
            /></label>
            <label>Measure:
            <select name="measures" id="measures">
              <option value="tablet">Tablet</option>
              <option value="capsule">Capsule</option>
              <option value=" injection">Injection</option>
            </select>
            </label>
          </form>
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <label>Price:
            <input
              type="text"
              name="text"
              value={formData.date}
              onChange={handleChange}
              required
            /></label>
            <label>Instock:
            <input
              type="number"
              name="number"
              required
            /></label>
          </form>
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <label>Description:
            <textarea name="description" id="description"></textarea>
            </label>
          </form>
          <button>Save Medicine</button>
        </div>
      </div>
    </div>
  );
};

export default AddMed;
