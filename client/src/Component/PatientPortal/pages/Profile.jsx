import "../PatientPortal.css";
import { useState } from 'react';
import '../PatientPortal.css'
import { FiUserPlus, FiLock } from "react-icons/fi";
import PersonalInfo from './PersonalInfo';
import Password from './Password';
import Sidebar from "../Bar/Sidebar";
import Topbar from "../Bar/Topbar";

export default function Profile() {
    const [sidebarClose, setSidebarClose] = useState(false); // State for sidebar

    const toggleSidebar = () => {
        setSidebarClose(prevState => !prevState); // Toggle sidebar state
    };
    
    const [currentModal, setCurrentModal] = useState('PersonalInfo');

    const handleModalClick = (modalName) => {
        setCurrentModal(modalName);
    };

    return (
        <>
            <main className={`patient_portal ${sidebarClose ? 'pactive' : ''}`}>
                <Sidebar sidebarClose={sidebarClose} toggleSidebar={toggleSidebar} />
                <section className={`patient_main ${sidebarClose ? 'pactive' : ''}`}>
                    <Topbar toggleSidebar={toggleSidebar} />
                    <div className="patient_content">
                        <div className="patient_main-title">My Profile</div>
                        <section className="patient_modals patient_profile">
                            <div className="patient_modals-left">
                                <div className="img_box">
                                    <img src='/doctor.jpg' />
                                </div>
                                <div className="patient_modals-details">
                                    <h4>John Doe</h4>
                                    <span>
                                        johndoe@gmail.com
                                    </span>
                                    <span>(+234) 456-7890</span>
                                </div>
                                <div className="patient_modals-modals">
                                    <button
                                        onClick={() => handleModalClick('PersonalInfo')}
                                        className={`
                                ${currentModal === 'PersonalInfo' ? 'current' : ''}
                            `}
                                    >
                                        <FiUserPlus size={20} />
                                        <span>Personal Information</span>
                                    </button>
                                    <button
                                        onClick={() => handleModalClick('Password')}
                                        className={`
                                ${currentModal === 'Password' ? 'current' : ''}
                            `}
                                    >
                                        <FiLock size={20} />
                                        <span>Change Password</span>
                                    </button>
                                </div>
                            </div>

                            <div className="patient_modals-right">
                                {currentModal === 'PersonalInfo' && <PersonalInfo />}
                                {currentModal === 'Password' && <Password />}
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}