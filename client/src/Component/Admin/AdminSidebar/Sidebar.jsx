import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import { FaHome } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBlog } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

function Sidebar() {
  return (
    <div className="side-menu-bar">
      <div className="Admin-logo">LOgo</div>
      <div className="Admin-menu">
        <div className="menu-item">
          <ul>
            <li>
              {" "}
              <FaHome className="icon" /> <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              {" "}
              <MdHealthAndSafety className="icon" />{" "}
              <Link to="/Health Record">Health Record</Link>
            </li>
            <li>
              {" "}
              <FaBlog className="icon" />{" "}
              <Link to="/Blog Data System">Blog Data System</Link>
            </li>
            <li>
              {" "}
              <FaDatabase className="icon" />{" "}
              <Link to="/Patients Database">Patients Database</Link>
            </li>
            <li>
              {" "}
              <GrUserManager className="icon" />{" "}
              <Link to="/Hospital management">Hospital management</Link>
            </li>
            <li>
              {" "}
              <SiSimpleanalytics className="icon" />{" "}
              <Link to="/Data  Analytics">Data Analytics</Link>
            </li>
          </ul>
        </div>

        <div className="logout">
          <div className="setting">
            <ul>
              <li>
                {" "}
                <IoSettingsOutline className="icon" />{" "}
                <Link to="/Settings">Settings</Link>
              </li>
            </ul>
          </div>

          <div className="logout-opt">
            <ul>
              <li>
                {" "}
                <TbLogout className="icon" /> <Link to="Logout">LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
