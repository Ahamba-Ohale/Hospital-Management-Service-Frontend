/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import Overview from "../Component/PatientPortal/pages/Overview";
import Profile from "../Component/PatientPortal/pages/Profile";
import Records from "../Component/PatientPortal/pages/Records";
import Appointments from "../Component/PatientPortal/pages/Appointments";
import Prescriptions from "../Component/PatientPortal/pages/Prescriptions";
import Payments from "../Component/PatientPortal/pages/Payments";
import Messages from "../Component/PatientPortal/pages/Messages";
import Help from "../Component/PatientPortal/pages/Help";

export default function MyRoutes({ selected, updateSelectedIndex }) {
    return (
        <>
            <Routes>
                <Route path="/Patient/Overview" element={<Overview selected={selected} updateSelectedIndex={updateSelectedIndex} />} />
                <Route path="/Patient/Profile" element={<Profile />} />
                <Route path="/Patient/Records" element={<Records />} />
                <Route path="/Patient/Appointments" element={<Appointments />} />
                <Route path="/Patient/Prescriptions" element={<Prescriptions />} />
                <Route path="/Patient/Payments" element={<Payments />} />
                <Route path="/Patient/Messages" element={<Messages />} />
                <Route path="/Patient/Help" element={<Help />} />
            </Routes>
        </>
    )
}