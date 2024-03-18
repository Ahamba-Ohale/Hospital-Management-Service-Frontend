import { Route, Routes } from "react-router-dom";
import Dashboard from "../Component/PatientPortal/pages/Dashboard";
import Records from "../Component/PatientPortal/pages/Records";
import Appointments from "../Component/PatientPortal/pages/Appointments";
import Prescriptions from "../Component/PatientPortal/pages/Prescriptions";
import Bills from "../Component/PatientPortal/pages/Bills";
import Settings from "../Component/PatientPortal/pages/Settings";

export default function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path="/Patient/Portal" element={<Dashboard />} />
                <Route path="/Patient/Records" element={<Records />} />
                <Route path="/Patient/Appointments" element={<Appointments />} />
                <Route path="/Patient/Prescriptions" element={<Prescriptions />} />
                <Route path="/Patient/Bills" element={<Bills />} />
                <Route path="/Patient/Settings" element={<Settings />} />
            </Routes>
        </>
    )
}