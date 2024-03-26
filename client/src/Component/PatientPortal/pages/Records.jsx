import "../PatientPortal.css";
import { useState } from 'react';
import '../PatientPortal.css'
import { TbReportMedical } from "react-icons/tb"
import { BsFileImage } from "react-icons/bs";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Report from './Report'
import Image from './Image'
import HealthInfo from './HealthInfo'
import Sidebar from "../Bar/Sidebar";
import Topbar from "../Bar/Topbar";

export default function Records() {
    const [sidebarClose, setSidebarClose] = useState(false); // State for sidebar

    const toggleSidebar = () => {
        setSidebarClose(prevState => !prevState); // Toggle sidebar state
    };

    const [currentModal, setCurrentModal] = useState('Report');

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
                        <div className="patient_main-title">My Medical Records</div>
                        <section className="patient_modals patient_records">
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
                                        onClick={() => handleModalClick('Report')}
                                        className={`
                                ${currentModal === 'Report' ? 'current' : ''}
                            `}
                                    >
                                        <TbReportMedical size={20} />
                                        <span>Reports</span>
                                    </button>
                                    <button
                                        onClick={() => handleModalClick('Image')}
                                        className={`
                            ${currentModal === 'Image' ? 'current' : ''
                                            }`}
                                    >
                                        <BsFileImage size={20} />
                                        <span>Images</span>
                                    </button>
                                    <button
                                        onClick={() => handleModalClick('HealthInfo')}
                                        className={`
                            ${currentModal === 'HealthInfo' ? 'current' : ''
                                            }`}
                                    >
                                        <MdOutlineHealthAndSafety size={20} />
                                        <span>Health Information</span>
                                    </button>
                                </div>
                            </div>

                            <div className="patient_modals-right">
                                {currentModal === 'Report' && <Report />}
                                {currentModal === 'Image' && <Image />}
                                {currentModal === 'HealthInfo' && <HealthInfo />}
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}