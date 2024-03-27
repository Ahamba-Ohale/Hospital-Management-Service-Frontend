import { useState } from 'react';
import { FiUserPlus, FiLock } from "react-icons/fi";
import PersonalInfo from './PersonalInfo';
import Password from './Password';

export default function Profile() {
    const [currentModal, setCurrentModal] = useState('PersonalInfo');

    const handleModalClick = (modalName) => {
        setCurrentModal(modalName);
    };

    return (
        <>
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
        </>
    )
}