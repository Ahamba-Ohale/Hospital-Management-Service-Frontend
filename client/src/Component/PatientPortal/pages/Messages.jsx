import "../PatientPortal.css";
import { useState } from 'react';
import Sidebar from "../Bar/Sidebar";
import Topbar from "../Bar/Topbar";

export default function Messages() {
    const [sidebarClose, setSidebarClose] = useState(false); // State for sidebar

    const toggleSidebar = () => {
        setSidebarClose(prevState => !prevState); // Toggle sidebar state
    };

    return (
        <>
            <main className={`patient_portal ${sidebarClose ? 'pactive' : ''}`}>
                <Sidebar sidebarClose={sidebarClose} toggleSidebar={toggleSidebar} />
                <section className={`patient_main ${sidebarClose ? 'pactive' : ''}`}>
                    <Topbar toggleSidebar={toggleSidebar} />
                    <div className="patient_content">
                        Feedback
                    </div>
                </section>
            </main>
        </>
    )
}