import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineTextsms } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const ShareInvoice = ({ onClose }) => {
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
          <h2>Share with patient via</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="moda-content">
            <div className="email">
                <div className="email-icon">
                <MdOutlineEmail /> 
                </div>
                <div className="email-text">
                    <h2>Email</h2>
                    <p>Send to patient email address</p>
                </div>
            </div>
            <div className="email">
                <div className="email-icon">
                <MdOutlineTextsms /> 
                </div>
                <div className="email-text">
                    <h2>SMS</h2>
                    <p>Send to patient phone number</p>
                </div>
            </div>
            <div className="email">
                <div className="email-icon">
                <FaWhatsapp /> 
                </div>
                <div className="email-text">
                    <h2>Whatsapp</h2>
                    <p>Send to patient Whatsapp account</p>
                </div>
            </div>
            <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ShareInvoice;
