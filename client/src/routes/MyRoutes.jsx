import { Route, Routes } from "react-router-dom";
import Overview from "../Component/PatientPortal/pages/Overview";
import Records from "../Component/PatientPortal/pages/Records";
import Appointments from "../Component/PatientPortal/pages/Appointments";
import Prescriptions from "../Component/PatientPortal/pages/Prescriptions";
import Bills from "../Component/PatientPortal/pages/Bills";
import Feedback from "../Component/PatientPortal/pages/Feedback";
import Settings from "../Component/PatientPortal/pages/Settings";
import Help from "../Component/PatientPortal/pages/Help";

export default function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path="/Patient/Portal" element={<Overview />} />
                <Route path="/Patient/Records" element={<Records />} />
                <Route path="/Patient/Appointments" element={<Appointments />} />
                <Route path="/Patient/Prescriptions" element={<Prescriptions />} />
                <Route path="/Patient/Bills" element={<Bills />} />
                <Route path="/Patient/Feedback" element={<Feedback />} />
                <Route path="/Patient/Settings" element={<Settings />} />
                <Route path="/Patient/Help" element={<Help />} />
            </Routes>
        </>
    )
}