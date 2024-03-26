import "../PatientPortal.css";
import { useEffect, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

export default function Sidebar({ sidebarClose, toggleSidebar }) {
  const [selected, setSelected] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/Patient/Overview":
        setSelected(0);
        break;
      case "/Patient/Profile":
        setSelected(1);
        break;
      case "/Patient/Records":
        setSelected(2);
        break;
      case "/Patient/Appointments":
        setSelected(3);
        break;
      case "/Patient/Prescriptions":
        setSelected(4);
        break;
      case "/Patient/Payments":
        setSelected(5);
        break;
      case "/Patient/Messages":
        setSelected(6);
        break;
      case "/Patient/Help":
        setSelected(8);
        break;
      default:
        setSelected(0);
    }
  }, [location.pathname]);

  return (
    <nav className={`portal_navigation ${sidebarClose ? "pactive" : ""}`}>
      <div className="toggle" onClick={toggleSidebar}>
        <button style={{ transform: sidebarClose ? "rotate(180deg)" : "initial" }}>
          <FaChevronLeft color="#f5f5f5" />
        </button>
      </div>
      <div className="portal_logo" style={{ left: sidebarClose ? "-40px" : "" }}>
        <img src="/Logo.png" alt="G.T.H Logo" style={{ transform: sidebarClose ? "scale(0.5)" : "scale(1)" }} />
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