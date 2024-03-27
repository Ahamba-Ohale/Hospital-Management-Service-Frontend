import { useEffect, useState } from "react";
import Sidebar from "./Bar/Sidebar";
import Topbar from "./Bar/Topbar";
import { useLocation, useNavigate } from "react-router-dom";

export default function PatientPortal() {
    const [selected, setSelected] = useState("");
    const { pathname } = useLocation();
    const navigate = useNavigate();

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
                </section>
            </main>
        </>
    );
}

// import { useEffect, useState } from "react";
// import Sidebar from "./Bar/Sidebar";
// import Topbar from "./Bar/Topbar";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function PatientPortal() {
//     const [selected, setSelected] = useState("");
//     // const location = useLocation();
//     const { pathname } = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         setSelected(pathname);
//     }, [pathname]);

//     return (
//         <>
//             <main className={`patient_portal ${sidebarClose ? 'pactive' : ''}`}>
//                 <Sidebar
//                     sidebarClose={sidebarClose}
//                     setSidebarClose={setSidebarClose}
//                     selected={selected} // Pass selected state here
//                 />
//                 <section
//                     className={`patient_main ${sidebarClose ? 'pactive' : ''}`}
//                 >
//                     <Topbar />
//                 </section>
//             </main>
//         </>
//     );
// }