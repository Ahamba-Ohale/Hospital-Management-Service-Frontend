import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { GoPlus } from "react-icons/go";
import { RiDeleteBin5Line } from 'react-icons/ri';


const BillingAndInvoicing = () => {

    const invoices = [
        { id: 1, patientName: 'John Doe', totalAmount: 250.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        { id: 2, patientName: 'Jane Smith', totalAmount: 150.00 },
        // Add more sample data as needed
      ];

  return (
    <div className="patient-content__med">
      <div className="billing-and-invoicing-container">
      <h2>Billing and Invoicing</h2>
      
      <div className="invoice-list">
        {invoices.map(invoice => (
          <div key={invoice.id} className="invoice-item">
            <div className="invoice-info">
              <p><strong>Patient Name:</strong> {invoice.patientName}</p>
              <p><strong>Total Amount:</strong> ${invoice.totalAmount.toFixed(2)}</p>
            </div>
            <button className="view-invoice-btn">View Invoice</button>
          </div>
        ))}
      </div>
    </div>
          <Link to="/AddTrainee">
        <div className="create">
          <GoPlus />
        </div>
        </Link>

    </div>
  );
}

export default BillingAndInvoicing