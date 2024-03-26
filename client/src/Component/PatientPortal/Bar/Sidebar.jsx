/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios"; // Changed import
import {
  LuClipboardList,
  LuUserCircle2,
  LuPill,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuCreditCard,
  LuCalendarDays,
  LuMessagesSquare,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

export default function Sidebar({ sidebarClose, setSidebarClose, selected }) { 
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const ModSidebarOpen = () => {
    setSidebarClose(!sidebarClose);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:8080/api/users/all";
        const { data: response } = await axios.get(url); // Changed Axios to axios
        setUser({
          name: response.name,
          email: response.email,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <nav className={`portal_navigation ${sidebarClose ? "pactive" : ""}`}>
      <div className="toggle" onClick={ModSidebarOpen}>
           <button style={{ transform: sidebarClose ? 'rotate(180deg)' : 'initial' }}>
             <FaChevronLeft color="#f5f5f5" />
           </button>
      </div>
    <div className="portal_logo" style={{ left: sidebarClose ? '-40px' : '' }}>
      <img src="/Logo.png" alt="G.T.H Logo" style={{ transform: sidebarClose ? 'scale(0.5)' : 'scale(1)' }} />
    </div>

      <ul>
        <li>
          <Link
            to="/Patient/Overview"
            className={selected === 0 ? "active_link" : ""}
          >
            <i className="icon">
              <LuLayoutDashboard size={25} />
            </i>
            {!sidebarClose && <span>Overview</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Profile"
            className={selected === 1 ? "active_link" : ""}
          >
            <i className="icon">
              <LuUserCircle2 size={25} />
            </i>
            {!sidebarClose && <span>Profile</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Records"
            className={selected === 2 ? "active_link" : ""}
          >
            <i className="icon">
              <LuClipboardList size={25} />
            </i>
            {!sidebarClose && <span>Medical Records</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Appointments"
            className={selected === 3 ? "active_link" : ""}
          >
            <i className="icon">
              <LuCalendarDays size={25} />
            </i>
            {!sidebarClose && <span>Appointments</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Prescriptions"
            className={selected === 4 ? "active_link" : ""}
          >
            <i className="icon">
              <LuPill size={25} />
            </i>
            {!sidebarClose && <span>Prescriptions</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Payments"
            className={selected === 5 ? "active_link" : ""}
          >
            <i className="icon">
              <LuCreditCard size={25} />
            </i>
            {!sidebarClose && <span>Payments</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Messages"
            className={selected === 6 ? "active_link" : ""}
          >
            <i className="icon">
              <LuMessagesSquare size={25} />
            </i>
            {!sidebarClose && <span>Messages</span>}
          </Link>
        </li>

        <li>
          <Link
            to="/Patient/Help"
            className={selected === 8 ? "active_link" : ""}
          >
            <i className="icon">
              <LuLifeBuoy size={25} />
            </i>
            {!sidebarClose && <span>Help</span>}
          </Link>
        </li>
      </ul>

      <div className="portal_footer">
        <img
          src="https://ui-avatars.com/api/?background=f5f5f5&color=276ab3&bold=true"
          alt="user initial"
          style={{ transform: sidebarClose ? 'scale(1.2)' : 'scale(1.0)' }}
        />
        <div className="user" style={{ display: sidebarClose ? 'none' : 'block' }}>
          <div className="detail">
            <h4>John Doe</h4>
            <span>johndoe@gmail.com</span>
          </div>
        </div>
        </div>
    </nav>
  );
}