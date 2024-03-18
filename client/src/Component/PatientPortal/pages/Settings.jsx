import { useState } from 'react';
import '../PatientPortal.css'
import { FiUserPlus, FiLock } from "react-icons/fi";
import Information from './Information';
import Password from './Password';

export default function Settings() {
    const [currentModal, setCurrentModal] = useState('Information');

    const handleModalClick = (modalName) => {
      setCurrentModal(modalName);
    };

    return (
        <>
            <div className="patient_main-title">Settings</div>
            <div className="patient_settings">
                <div className="patient_settings-left">
                    <div className="img_box">
                        <img src='/doctor.jpg' />
                    </div>
                    <div className="patient_settings-details">
                        <h4>John Doe</h4>
                        <span>
                            johndoe@gmail.com
                        </span>
                        <span>(+234) 456-7890</span>
                    </div>
                    <div className="patient_settings-modals">
                        <button 
                            onClick={() => handleModalClick('Information')}
                            className={`
                                ${currentModal === 'Information' ? 'current' : ''}
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

                <div className="patient_settings-right">
                    {currentModal === 'Information' && <Information />}
                    {currentModal === 'Password' && <Password />}
                </div>
            </div>
        </>
    )
}