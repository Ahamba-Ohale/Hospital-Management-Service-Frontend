import React, { useState } from 'react'
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import LeaveMgt from './LeaveMgt';
import EquipmentInventory from './EquipmentInventory';
import MedicalSupplies from './MedicalSupplies';
import SupplyMgt from './SupplyMgt'

const InventoryControl = () => {

    // const [employee, setEmployee] = useState(false);

    const [activeTab, setActiveTab] = useState('Medical Supplies');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

  return (
    <div className="patient-content__med">
      <div className="patient-content__top">
        <h2>Inventory Control</h2>
      </div>

      <div className="staff-button">
      <button 
         onClick={() => handleTabClick('Medical Supplies')}
         className={`hospital-mgt__but ${
         activeTab === 'Medical Supplies' ? 'active' : ''
         }`}>
            Medical Supplies
         </button>
        
         <button 
         onClick={() => handleTabClick('Supply Mgt')}
         className={`hospital-mgt__but ${
         activeTab === 'Supply Mgt' ? 'active' : ''
         }`}>
            Supply Mgt
         </button>

         <button 
         onClick={() => handleTabClick('Equipment Inventory')}
         className={`hospital-mgt__but ${
         activeTab === 'Equipment Inventory' ? 'active' : ''
         }`}>
            Equipment Inventory
         </button>
        
      </div>

      <div className="patient-content__medd">
      {activeTab === 'Medical Supplies' && <MedicalSupplies />}
      {activeTab === 'Medication' && <Medication />}
      {activeTab === 'Supply Mgt' && <SupplyMgt />}
      {activeTab === 'Equipment Inventory' && <EquipmentInventory />}

      </div>
    </div>
  );
}

export default InventoryControl