import { useEffect, useState } from "react";
import Sidebar from "./Bar/Sidebar";
import Topbar from "./Bar/Topbar";
import MyRoutes from "../../routes/MyRoutes";
import { useLocation } from "react-router-dom";

export default function PatientPortal() {
    const [selected, setSelected] = useState(0); // State to manage the selected index
    const location = useLocation(); // Get the current location using useLocation hook

    // useEffect function to manage selected index
    useEffect(() => {
        // Update the selected index based on the current pathname
        switch (location.pathname) {
            case "/Patient/Portal":
                setSelected(0);
                break;
            case "/Patient/Records":
                setSelected(1);
                break;
            case "/Patient/Appointments":
                setSelected(2);
                break;
            case "/Patient/Prescriptions":
                setSelected(3);
                break;
            case "/Patient/Bills":
                setSelected(4);
                break;
            case "/Patient/Messages":
                setSelected(5);
                break;
            case "/Patient/Settings":
                setSelected(6);
                break;
            case "/Patient/Help":
                setSelected(7);
                break;
            default:
                setSelected(0);
        }
    }, [location.pathname]); // Run this effect whenever location.pathname changes

    const [sidebarClose, setSidebarClose] = useState(false);

    return (
        <>
            <main className={`patient_portal ${sidebarClose ? 'pactive' : ''}`}>
                <Sidebar 
                    sidebarClose={sidebarClose} 
                    setSidebarClose={setSidebarClose}
                    selected={selected} // Pass selected state here
                />
                <section 
                    className={`patient_main ${sidebarClose ? 'pactive' : ''}`}
                >
                    <Topbar />
                    <div className="patient_content">
                        <MyRoutes />
                    </div>
                </section>
            </main>
        </>
    );
}