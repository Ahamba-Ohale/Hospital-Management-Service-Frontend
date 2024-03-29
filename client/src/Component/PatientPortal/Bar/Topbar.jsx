/* eslint-disable react/prop-types */
import { IoSearchOutline } from 'react-icons/io5';
// import { FaChevronLeft, FaChevronRight, FaRegBell, FaRegUser } from 'react-icons/fa6';
import {  FaChevronDown, FaRegBell, FaRegUser } from 'react-icons/fa6';
import { MdLogout, MdOutlineSettings } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Topbar() {
    // const [isFirstIcon, setIsFirstIcon] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    // const handleIconClick = () => {
    //     setIsFirstIcon(prevIsFirstIcon => !prevIsFirstIcon);
    //     handleToggleClick();
    // };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown_button-container')) {
                setShowNotification(false);
                setShowProfile(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="patient_topbar">
            <div className="search">
                <label>
                    <input type="text" placeholder="Search here" />
                    <IoSearchOutline size={20} />
                </label>
            </div>
            <div className="user_details">
                <div className="dropdown_button-container">
                    <span 
                        className="dropdown_button"
                        onClick={() => setShowNotification(!showNotification)}
                    >
                        <FaRegBell size={20} />
                        <div className="notification_circle"></div>
                    </span>
                    <div className={`dropdown ${showNotification ? 'show' : ''}`}>
                        {/* Dropdown content */}
                        <div className="dropdown-item">Prescription</div>
                        <div className="dropdown-item">Appointment</div>
                        <div className="dropdown-item">Faq</div>
                    </div>
                </div>

                <div className="img_box">
                    <img src='/doctor.jpg' />
                </div>
                <h4>John Doe</h4>
                <div className="dropdown_button-container">
                    <FaChevronDown
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowProfile(!showProfile)}
                    />
                    <div className={`dropdown ${showProfile ? 'show' : ''}`} style={{ top: '2rem', right: '-.5rem' }}>
                        {/* Dropdown content */}
                        <div className="dropdown-item">
                            <FaRegUser />
                            Profile
                        </div>
                        <div className="dropdown-item">
                        <MdOutlineSettings />
                            Settings
                        </div>
                        <div className="dropdown-item">
                            <MdLogout />
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}