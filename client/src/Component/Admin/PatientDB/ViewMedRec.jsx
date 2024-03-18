import { useState } from 'react';

const ViewMedRec = ({ onClose }) => {
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

  return (
    <div className="modal-overlay">
      <div className="add-appointment-modal">
        <div className="modal-header">
          <h2>9 March 2024</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <label htmlFor='complaint'>Complaint:
            <input
              type="text"
              name="complaint"
              className="input-field"
              value={formData.date}
              onChange={handleChange}
              required
            />
            </label>
            
            <label htmlFor='diagnosis'>Diagnosis:
            <input
              type="text"
              name="diagnosis"
              className="input-field"
              value={formData.time}
              onChange={handleChange}
              required
            />
            </label>

            <label htmlFor='treatment'>Treatment:
            <input
              type="text"
              name="treatment"
              className="input-field"
              value={formData.time}
              onChange={handleChange}
              required
            />
            </label>
            {/* Add more form fields as needed */}
            <button type="submit">Add Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewMedRec;
