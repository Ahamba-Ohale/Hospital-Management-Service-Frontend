import React from "react";
import "./Sidebar.css";
import LineChart from "../Charts/LIneChart";
import BarChart from "../Charts/BarChart";

const Main = () => {
  return (
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
        <div className="card"><BarChart /></div>
        <div className="card"><BarChart /></div>
        <div className="card"><BarChart /></div>
        <div className="card"><BarChart /></div>
      </div>

      <div className="body-main">
        <div className="main">
          <div className="top-main"> <LineChart /> </div>
          <div className="bottom-main">main buttom</div>
        </div>

        <div className="right-section">
          <div className="top-right">Top Right</div>
          <div className="bottom-right">Bottom Right</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
