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
      <div className={`side-menu-bar ${menuVisible ? "visible" : ""}`}>
        <div className="Admin-logo">LOgo</div>
        <div className="Admin-menu">
          <div className="menu-item">
            <ul>
              <li>
                <Link to="/Admin">
                  <FaHome className="icon" />
                  {!menuVisible && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link to="/HealthRecord">
                  <MdHealthAndSafety className="icon" />
                  {!menuVisible && <span>Health Records</span>}
                </Link>
              </li>
              <li>
                <Link to="/Blog Data System">
                  <FaBlog className="icon" />
                  {!menuVisible && <span>Blogs</span>}
                </Link>
              </li>
              <li>
                <Link to="/Patients Database">
                  <FaDatabase  className="icon" />
                  {!menuVisible && <span>Patient DataBase</span>}
                </Link>
              </li>
              <li>
                <Link to="/Hospital management">
                  <GrUserManager  className="icon" />
                  {!menuVisible && <span>Hospital Management</span>}
                </Link>
              </li>
              <li>
                <Link to="/Data Analytics">
                  <SiSimpleanalytics  className="icon" />
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
                    <IoSettingsOutline  className="icon"/>
                    {!menuVisible  && <span>Setting</span> }
                  </Link>
                </li>
              </ul>
            </div>

            <div className="logout-opt">
              <ul>
              <li>
                  <Link to="/Settings">
                    <TbLogout className="icon"/>
                    {!menuVisible  && <span>Logout</span> }
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button className="toggle-menu-btn" onClick={toggleMenu}>
            {menuVisible ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>

        <div className={`main-body ${menuVisible ? "" : "visible"}`}></div>
      </div>
    </div>
  );
};

export default Sidebar;
