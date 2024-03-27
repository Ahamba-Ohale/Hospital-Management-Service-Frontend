import "./PatientPortal.css"
import { useEffect, useState } from "react";
import Sidebar from "./Bar/Sidebar";
import Topbar from "./Bar/Topbar";
import { Outlet, useLocation } from "react-router-dom";

export default function PatientPortal() {
    const [selected, setSelected] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
        setSelected(pathname);
    }, [pathname]);

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
                        <Outlet />
                    </div>
                </section>
            </main>
        </>
    );
}