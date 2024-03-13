import { useState } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from '../AdminSidebar/Sidebar'
import StaffManagement from './StaffManagement';
import { FaHandHoldingMedical } from "react-icons/fa6"
import { GiDoctorFace } from "react-icons/gi";
import { SiOpenaccess } from "react-icons/si";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";
import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import FacilityManagement from './FacilityManagement';
import InventoryControl from './InventoryControl';
import FinancialReporting from './FinancialReporting';
import SecurityAccessControl from './SecurityAccessControl';
import ComplianceTools from './ComplianceTools';
import './HospitalManagement.css'

const HospitalManagement = () => {
    const [activeTab, setActiveTab] = useState('StaffManagement');

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
              <div className="page-name">Great Tower Management</div>
            </div>

            <div className="patient-main__content">
                <div className="patient-menu">
                    <div className="patient-menu__content">
                        <div className="patient-img"></div>
                        <div className="patient-content__text">
                            <h3>Administrator</h3>
                            <p>
                               admin@greattower.com<br/>
                            </p>
                            <p>(+234) 456-7890</p>
                        </div>
                        <div className="patient-menu__buttons">
                            <button 
                            onClick={() => handleTabClick('StaffManagement')}
                            className={`patient-content__medrec ${
                              activeTab === 'StaffManagement' ? 'active' : ''
                            }`}><FaHandHoldingMedical id='iconn'/>
                                Staff Management
                            </button>
                            <button 
                            onClick={() => handleTabClick('FacilityManagement')}
                            className={`patient-content__medrec ${
                              activeTab === 'FacilityManagement' ? 'active' : ''
                            }`}><GiDoctorFace id='iconn'/>
                                Facilities
                            </button>
                            <button 
                           onClick={() => handleTabClick('InventoryControl')}
                           className={`patient-content__medrec ${
                             activeTab === 'InventoryControl' ? 'active' : ''
                           }`}><LiaFileInvoiceDollarSolid id='iconn'/>
                                Inventory Control
                            </button>
                            <button 
                             onClick={() => handleTabClick('FinancialReporting')}
                             className={`patient-content__medrec ${
                               activeTab === 'FinancialReporting' ? 'active' : ''
                             }`}><MdOutlinePayment id='iconn'/>
                                Financial Reporting
                            </button>
                            <button 
                             onClick={() => handleTabClick('SecurityAccessControl')}
                             className={`patient-content__medrec ${
                               activeTab === 'SecurityAccessControl' ? 'active' : ''
                             }`}><SiOpenaccess id='iconn'/>
                                Access Control
                            </button>
                            
                            <button 
                           onClick={() => handleTabClick('ComplianceTools')}
                           className={`patient-content__medrec ${
                             activeTab === 'ComplianceTools' ? 'active' : ''
                           }`}><GiHealthPotion id='iconn'/>
                                Compliance Tools
                            </button>
                            
                        </div>
                    </div>
                </div>

                <div className="patient-content">
                    {activeTab === 'StaffManagement' && <StaffManagement />}
                    {activeTab === 'FacilityManagement' && <FacilityManagement />}
                    {activeTab === 'InventoryControl' && <InventoryControl />}
                    {activeTab === 'FinancialReporting' && <FinancialReporting />}
                    {activeTab === 'SecurityAccessControl' && <SecurityAccessControl />}
                    {activeTab === 'ComplianceTools' && <ComplianceTools />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HospitalManagement