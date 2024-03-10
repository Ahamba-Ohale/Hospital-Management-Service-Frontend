import React, { useState } from 'react'
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Employee from './Employee'
import Specialist from './Specialist';
import Roles from './RolesMgt';
import LeaveMgt from './LeaveMgt';
import TrainingMgt from './TrainingMgt';

const StaffManagement = () => {

    // const [employee, setEmployee] = useState(false);

    const [activeTab, setActiveTab] = useState('Employee');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

  return (
    <div className="patient-content__med">
      <div className="patient-content__top">
        <h2>Staff Management</h2>
      </div>

      <div className="staff-button">
      <button 
         onClick={() => handleTabClick('Employee')}
         className={`hospital-mgt__but ${
         activeTab === 'Employee' ? 'active' : ''
         }`}>
            Employee
         </button>
      <button 
         onClick={() => handleTabClick('Specialist')}
         className={`hospital-mgt__but ${
         activeTab === 'Specialist' ? 'active' : ''
         }`}>
            Specialist
         </button>
        
         <button 
         onClick={() => handleTabClick('Roles')}
         className={`hospital-mgt__but ${
         activeTab === 'Roles' ? 'active' : ''
         }`}>
            Roles
         </button>
         <button 
         onClick={() => handleTabClick('LeaveMgt')}
         className={`hospital-mgt__but ${
         activeTab === 'LeaveMgt' ? 'active' : ''
         }`}>
            Leave Mgt
         </button>

         <button 
         onClick={() => handleTabClick('TrainingMgt')}
         className={`hospital-mgt__but ${
         activeTab === 'TrainingMgt' ? 'active' : ''
         }`}>
            Training Mgt
         </button>
        
      </div>

      <div className="patient-content__medd">
      {activeTab === 'Employee' && <Employee />}
      {activeTab === 'Specialist' && <Specialist />}
      {activeTab === 'Roles' && <Roles />}
      {activeTab === 'LeaveMgt' && <LeaveMgt />}
      {activeTab === 'TrainingMgt' && <TrainingMgt />}

      </div>
    </div>
  );
}

export default StaffManagement