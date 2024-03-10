import React, { useState } from 'react'
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import EquipmentMgt from './EquipmentMgt';
import WardMgt from './WardMgt';
import Security from './Security';

const FacilityManagement = () => {
    // const [employee, setEmployee] = useState(false);

    const [activeTab, setActiveTab] = useState('Equipments');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

  return (
    <div className="patient-content__med">
      <div className="patient-content__top">
        <h2>Facilities Management</h2>
      </div>

      <div className="staff-button">
      <button 
         onClick={() => handleTabClick('Equipments')}
         className={`hospital-mgt__butt ${
         activeTab === 'Equipments' ? 'active' : ''
         }`}>
            Equipment Mgt
         </button>
      <button 
         onClick={() => handleTabClick('WardMgt')}
         className={`hospital-mgt__butt ${
         activeTab === 'WardMgt' ? 'active' : ''
         }`}>
            Wards Allocation
         </button>
        
         <button 
         onClick={() => handleTabClick('Security')}
         className={`hospital-mgt__butt ${
         activeTab === 'Security' ? 'active' : ''
         }`}>
            Security System
         </button>        
      </div>

      <div className="patient-content__medd">
      {activeTab === 'Equipments' && <EquipmentMgt />}
      {activeTab === 'WardMgt' && <WardMgt />}
      {activeTab === 'Security' && <Security />}

      </div>
    </div>
  )
}

export default FacilityManagement