import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { RiDeleteBin5Line } from 'react-icons/ri';


const BillingAndInvoicing = () => {

    const invoices = [
        {
          id: 1,
          patientName: 'John Doe',
          date: '2024-02-19',
          services: ['Consultation', 'Lab Test'],
          totalAmount: 150.00,
        },
        // Add more sample invoice data as needed
      ];
    
      return (
        <div className="billing-invoicing-container">
          <h2 className="section-title">Billing and Invoicing</h2>
          <div className="invoices-list">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="invoice-item">
                <div className="invoice-header">
                  <h3 className="invoice-title">Invoice #{invoice.id}</h3>
                  <p className="invoice-date">Date: {invoice.date}</p>
                </div>
                <div className="invoice-details">
                  <p><strong>Patient:</strong> {invoice.patientName}</p>
                  <p><strong>Services:</strong> {invoice.services.join(', ')}</p>
                  <p><strong>Total Amount:</strong> ${invoice.totalAmount.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

export default BillingAndInvoicing