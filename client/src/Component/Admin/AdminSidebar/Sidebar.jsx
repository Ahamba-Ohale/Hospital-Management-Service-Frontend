import { FaHome } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

export default function Sidebar({ sidebarClose, setSidebarClose, selected }) { 
  const navItems = [
  {
    text: "Dashboard",
    link: "/Admin",
    icon: <FaHome size={25} />
  },
  {
    text: "Health Records",
    link: "/HealthRecord",
    icon: <MdHealthAndSafety size={25} />
  },
  {
    text: "Blog",
    link: "/Blog Data System",
    icon: <FaBlog size={25} />
  },
  {
    text: "Patient Database",
    link: "/Patients Database",
    icon: <FaDatabase size={25} />
  },
  {
    text: "Hospital Management",
    link: "/Hospital management",
    icon: <GrUserManager size={25} />
  },
  {
    text: "Analytics",
    link: "/Data Analytics",
    icon: <SiSimpleanalytics size={25} />
  },
  {
    text: "Settings",
    link: "/Settings",
    icon: <IoSettingsOutline size={25} />
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
