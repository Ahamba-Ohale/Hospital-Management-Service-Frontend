import React, { useState } from 'react'
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Employee from './Employee'
import Specialist from './Specialist';
import Roles from './RolesMgt';
import LeaveMgt from './LeaveMgt';
import TrainingMgt from './TrainingMgt';
import BillingAndInvoicing from './BillingAndInvoicing';



const FinancilaReporting = () => {

      // const [employee, setEmployee] = useState(false);

      const [activeTab, setActiveTab] = useState('BillingAndInvoicing');

      const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
  
  return (
    <div className="patient-content__med">
    <div className="patient-content__top">
      <h2>Financial Reporting</h2>
    </div>

    <div className="staff-button">
    <button 
       onClick={() => handleTabClick('BillingAndInvoicing')}
       className={`hospital-mgt__but ${
       activeTab === 'BillingAndInvoicing' ? 'active' : ''
       }`}>
          Bills & Invoice
       </button>
    <button 
       onClick={() => handleTabClick('Specialist')}
       className={`hospital-mgt__but ${
       activeTab === 'Specialist' ? 'active' : ''
       }`}>
          Revenue
       </button>
      
       <button 
       onClick={() => handleTabClick('Roles')}
       className={`hospital-mgt__but ${
       activeTab === 'Roles' ? 'active' : ''
       }`}>
          Expenses
       </button>
       <button 
       onClick={() => handleTabClick('LeaveMgt')}
       className={`hospital-mgt__but ${
       activeTab === 'LeaveMgt' ? 'active' : ''
       }`}>
          Budgeting
       </button>

       <button 
       onClick={() => handleTabClick('TrainingMgt')}
       className={`hospital-mgt__but ${
       activeTab === 'TrainingMgt' ? 'active' : ''
       }`}>
          Insurance Mgt
       </button>
      
    </div>

    <div className="patient-content__medd">
    {activeTab === 'BillingAndInvoicing' && <BillingAndInvoicing />}
    {activeTab === 'Specialist' && <Specialist />}
    {activeTab === 'Roles' && <Roles />}
    {activeTab === 'LeaveMgt' && <LeaveMgt />}
    {activeTab === 'TrainingMgt' && <TrainingMgt />}

    </div>
  </div>

  )
}

export default FinancilaReporting