import React, { useState } from 'react'
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import RevenueMgt from './RevenueMgt';
import ExpenseManagement from './ExpenseManagement';
import LeaveMgt from './LeaveMgt';
import TrainingMgt from './TrainingMgt';



const FinancilaReporting = () => {

      // const [employee, setEmployee] = useState(false);

      const [activeTab, setActiveTab] = useState('RevenueMgt');

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
       onClick={() => handleTabClick('RevenueMgt')}
       className={`hospital-mgt__but ${
       activeTab === 'RevenueMgt' ? 'active' : ''
       }`}>
          Revenue Mgt
       </button>
      
       <button 
       onClick={() => handleTabClick('ExpenseManagement')}
       className={`hospital-mgt__but ${
       activeTab === 'ExpenseManagement' ? 'active' : ''
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
    {activeTab === 'RevenueMgt' && <RevenueMgt />}
    {activeTab === 'ExpenseManagement' && <ExpenseManagement />}
    {activeTab === 'LeaveMgt' && <LeaveMgt />}
    {activeTab === 'TrainingMgt' && <TrainingMgt />}

    </div>
  </div>

  )
}

export default FinancilaReporting