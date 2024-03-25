import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

import { FaHome } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="dashboard">
    <div className={`side-menu-bar ${menuVisible ? "pactive" : ""}`}>
      <div className="toggle" onClick={toggleMenu}>
        <button
          style={{
            transform: menuVisible ? "rotate (180deg)" : "initial",
            left: menuVisible ? "50px" : "270px",
          }}
        >
          <FiChevronLeft color="#f5f5f5" />
        </button>
      </div>

      <div className="Admin-logo" style={{ left: menuVisible ? "-40px" : "" }}>
        <img
          src="./Logo.png"
          alt="G.T.H Logo"
          style={{ transform: menuVisible ? "scale(0.5)" : "scale(1)" }}
        />
      </div>
      <div className="Admin-menu">
        <div className="menu-item">
          <ul>
            <li>
              <Link to="/Admin">
                <i className="icon">
                  <FaHome size={25} />
                </i>
                {!menuVisible && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/HealthRecord">
                <i className="icon">
                  <MdHealthAndSafety size={25} />
                </i>
                {!menuVisible && <span>Health Records</span>}
              </Link>
            </li>
            <li>
              <Link to="/Blog Data System">
                <i className="icon">
                  <FaBlog size={25} />
                </i>
                {!menuVisible && <span>Blogs</span>}
              </Link>
            </li>
            <li>
              <Link to="/Patients Database">
                <i className="icon">
                  <FaDatabase size={25} />
                </i>
                {!menuVisible && <span>Patient DataBase</span>}
              </Link>
            </li>
            <li>
              <Link to="/Hospital management">
                <i className="icon">
                  <GrUserManager size={25} />
                </i>
                {!menuVisible && <span>Hospital Management</span>}
              </Link>
            </li>
            <li>
              <Link to="/Data Analytics">
                <i className="icon">
                  <SiSimpleanalytics size={25} />
                </i>
                {!menuVisible && <span>Analytics</span>}
              </Link>
            </li>
          </ul>
        </div>

        <div className="logout">
          <div className="setting">
            <ul>
              <li>
                <Link to="/Settings">
                  <i className="icon">
                    <IoSettingsOutline size={25} />
                  </i>
                  {!menuVisible && <span>Setting</span>}
                </Link>
              </li>
            </ul>
          </div>

          <div className="logout-opt">
            <ul>
              <li>
                <Link to="/Settings">
                  <i className="icon">
                    <TbLogout size={25} />
                  </i>
                  {!menuVisible && <span>Logout</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className={`main-body ${menuVisible ? "" : "visible"}`}></div> */}
    </div>
    // </div>
  );
};

export default Sidebar;
