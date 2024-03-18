import "./PatientPortal.css";
//  
// import Topbar from "./Bar/Topbar";
// import Dashboard from "./pages/Dashboard";
// import Records from "./pages/Records";
// import Appointments from "./pages/Appointments";
// import Prescriptions from "./pages/Prescriptions";
// import Bills from "./pages/Bills";
// import Settings from "./pages/Settings";

import { useState } from "react";
import Sidebar from "./Bar/Sidebar";
import Topbar from "./Bar/Topbar";
import MyRoutes from "../../routes/MyRoutes";
import Settings from "./pages/Settings";

// export default function Patient() {
//     const [isActive, setIsActive] = useState(false);

//     const handleToggleClick = () => {
//         setIsActive(prevIsActive => !prevIsActive);
//     };

//     return (
//         <main className="patient_portal">
//             <Sidebar isActive={isActive} />

//             <div className={`patient_main ${isActive ? 'pactive' : ''}`}>
//                 <Topbar handleToggleClick={handleToggleClick} isActive={isActive} />

//                 <div className="patient_content">
//                     <Dashboard />
//                     <Records />
//                     <Appointments />
//                     <Prescriptions />
//                     <Bills />
//                     <Settings />
//                 </div>
//             </div>
//         </main>
//     );
// }

export default function PatientPortal() {
    const [sidebarClose, setSidebarClose] = useState(false);
    return (
        <>
            <main className={`patient_portal ${sidebarClose ? 'pactive' : ''}`}>
                <Sidebar sidebarClose={sidebarClose} setSidebarClose={setSidebarClose}/>
                <section className={`patient_main ${sidebarClose ? 'pactive' : ''}`}>
                    <Topbar />
                    <div className="patient_content">
                        <MyRoutes />
                        <Settings />
                    </div>
                </section>
            </main>
        </>
    );
}