import React from "react";
import Sidebar from "./AdminSidebar/Sidebar";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LIneChart";

function Admin() {
  return (
    // <div className="body">
      <div className="dashboard">
        <Sidebar />
        <div className="main-body">
          <div className="header">
            <span className="search">
              <input type="text" placeholder="Search Patient" />
            </span>
            <div className="notify">
              <div className="bell"></div>
              <div className="img"></div>
              <h4>Patient name</h4>
            </div>
          </div>

          <div className="sub-header">
            <BarChart className="chart"/>
            <BarChart className="chart"/>
            <BarChart className="chart"/>
            <BarChart className="chart"/>
          </div>

          <div className="body-main">
            <div className="main">
              <div className="top-main"><LineChart /></div>
              <div className="bottom-main">Bottom Main</div>
            </div>

            <div className="right-section">
              <div className="top-right">Top Right</div>
              <div className="bottom-right">Bottom Right</div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Admin;
