import React, { useState, useEffect } from 'react';

import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from '../AdminSidebar/Sidebar'
import './PatientDB.css'
import MedicalRecord from './MedicalRecord'
import Appointment from './Appointment'
import Invoice from './Invoice'
import Payment from './Payment'
import Images from './Images'
import HealthInfo from './HealthInfo';
import { FaHandHoldingMedical } from "react-icons/fa6"
import { SlCalender } from "react-icons/sl";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { FaXRay } from "react-icons/fa6";
import { GiHealthPotion } from "react-icons/gi";
import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';




const PatientInfo = () => {


 
 


    const [activeTab, setActiveTab] = useState('MedicalRecord');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };
    

  return (
    <div className="dashboard">
        <Sidebar />
        <div className="main-body">
            <div className="header">
                <span className="search">
                    <input type="text" placeholder="Search..." />
                </span>
                <div className="notify">
                    <div className="bell"><IoMdNotificationsOutline style={{width:'100%'}}/></div>
                    <div className="img"></div>
                    <h4>Patient name</h4>
                </div>
            </div>

            <div className="history">
              <div className="back" onClick={handleGoBack}><IoReturnUpBack /></div>
              <div className="page-name"><h1>patient name</h1></div>
            </div>

            <div className="patient-main__content">
                <div className="patient-menu">
                    <div className="patient-menu__content">
                        <div className="patient-img"></div>
                        <div className="patient-content__text">
                            <h3>name</h3>
                            <p>
                               email<br/>
                            </p>
                            <p>number</p>
                        </div>
                        <div className="patient-menu__buttons">
                            <button 
                            onClick={() => handleTabClick('MedicalRecord')}
                            className={`patient-content__medrec ${
                              activeTab === 'MedicalRecord' ? 'active' : ''
                            }`}><FaHandHoldingMedical id='iconn'/>
                                Medical Record
                            </button>
                            <button 
                            onClick={() => handleTabClick('Appointment')}
                            className={`patient-content__medrec ${
                              activeTab === 'Appointment' ? 'active' : ''
                            }`}><SlCalender id='iconn'/>
                                Appointment
                            </button>
                            <button 
                           onClick={() => handleTabClick('Invoice')}
                           className={`patient-content__medrec ${
                             activeTab === 'Invoice' ? 'active' : ''
                           }`}><LiaFileInvoiceDollarSolid id='iconn'/>
                                Invoice
                            </button>
                            <button 
                             onClick={() => handleTabClick('Payment')}
                             className={`patient-content__medrec ${
                               activeTab === 'Payment' ? 'active' : ''
                             }`}><MdOutlinePayment id='iconn'/>
                                Payment
                            </button>
                            <button 
                             onClick={() => handleTabClick('Images')}
                             className={`patient-content__medrec ${
                               activeTab === 'Images' ? 'active' : ''
                             }`}><FaXRay id='iconn'/>
                                Images
                            </button>
                            
                            <button 
                           onClick={() => handleTabClick('HealthInfo')}
                           className={`patient-content__medrec ${
                             activeTab === 'HealthInfo' ? 'active' : ''
                           }`}><GiHealthPotion id='iconn'/>
                                Health Information
                            </button>
                            
                        </div>
                    </div>
                </div>

                <div className="patient-content">
                    {activeTab === 'MedicalRecord' && <MedicalRecord />}
                    {activeTab === 'Appointment' && <Appointment />}
                    {activeTab === 'Invoice' && <Invoice />}
                    {activeTab === 'Payment' && <Payment />}
                    {activeTab === 'Images' && <Images />}
                    {activeTab === 'HealthInfo' && <HealthInfo />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientInfo