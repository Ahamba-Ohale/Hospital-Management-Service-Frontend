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
import { FaHandHoldingMedical } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { FaXRay } from "react-icons/fa6";
import { GiHealthPotion } from "react-icons/gi";
import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingEffect from '../../LoadingEffects/LoadingEffect';


const PatientInfo = () => {
  const navigate = useNavigate();
  const { patient_id } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [activeTab, setActiveTab] = useState('MedicalRecord');
  const apiUrl = `http://localhost:8080/api`;
  const loading = LoadingEffect()
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/patients/${patient_id}`);
        setPatientData(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, [apiUrl, patient_id]);
 
  if (!patientData) {
    return <div style={{
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: '50%',
    }}>{loading}</div>;
  }

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };

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
                    <h4>{patientData.name}</h4>
                </div>
            </div>

            <div className="history">
              <div className="history-right">
              <div className="back" onClick={handleGoBack}><IoReturnUpBack /></div>
              <div className="page-name">{patientData.name}</div>
              </div>
            </div>

            <div className="patient-vitals">
              <div className="vitals">Blood Pressure: <br /><br /> 120/80</div>
              <div className="vitals">Blood Sugar: <br /><br /> 4mg</div>
              <div className="vitals">Temperature: <br /><br /> 36 degrees</div>
              <div className="vitals">Respiration Rate: <br /><br /> 72/minute</div>
              <div className="edit-vitals">Edit</div>
            </div>

            <div className="patient-main__content">
                <div className="patient-menu">
                    <div className="patient-menu__content">
                        {/* <div className="patient-img"></div> */}
                        <div className="patient-content__text">
                            <h3>{patientData.name}</h3>
                            <p>
                               {patientData.email}<br/>
                            </p>
                            <p>{patientData.phoneNumber}</p>
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