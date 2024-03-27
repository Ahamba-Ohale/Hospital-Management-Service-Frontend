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
  const navItems = [
  {
    text: "Overview",
    link: "/Patient/Overview",
    icon: <LuLayoutDashboard size={25} />
  },
  {
    text: "Profile",
    link: "/Patient/Profile",
    icon: <LuUserCircle2 size={25} />
  },
  {
    text: "Medical Records",
    link: "/Patient/Records",
    icon: <LuClipboardList size={25} />
  },
  {
    text: "Appointments",
    link: "/Patient/Appointments",
    icon: <LuCalendarDays size={25} />
  },
  {
    text: "Prescriptions",
    link: "/Patient/Prescriptions",
    icon: <LuPill size={25} />
  },
  {
    text: "Payments",
    link: "/Patient/Payments",
    icon: <LuCreditCard size={25} />
  },
  {
    text: "Messages",
    link: "/Patient/Feedback",
    icon: <LuMessagesSquare size={25} />
  },
  {
    text: "Help",
    link: "/Patient/Help",
    icon: <LuLifeBuoy size={25} />
  },
]

  const ModSidebarOpen = () => {
    setSidebarClose(!sidebarClose);
  };

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
         {navItems.map(({ text, icon, link }) => (
          <li key={text}>
            <Link
              to={link}
              className={selected === link ? "active_link" : ""}
            >
              <i className="icon">{icon}</i>
              {!sidebarClose && <span>{text}</span>}
            </Link>
          </li>
        ))}
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