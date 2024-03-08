import React from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LIneChart";
import './Dashboard.css'
import PatientChart from "../Charts/PatientChart";

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
          <div className="card">
            <div className="chart-top">
              <div className="chart-img"></div>
              <div className="chart-text">
                <h3>Total Patients</h3>
              </div>
            </div>
            <div className="chartt">
              <PatientChart className="chart" />
            </div>
          </div>
          <div className="card">
            <div className="chart-top">
              <div className="chart-img"></div>
              <div className="chart-text">
                <h3>Total Patients</h3>
              </div>
            </div>
            <div className="chartt">
              <BarChart className="chart" />
            </div>
          </div>
          <div className="card">
            <div className="chart-top">
              <div className="chart-img"></div>
              <div className="chart-text">
                <h3>Total Patients</h3>
              </div>
            </div>
            <div className="chartt">
              <BarChart className="chart" />
            </div>
          </div>
          <div className="card">
            <div className="chart-top">
              <div className="chart-img"></div>
              <div className="chart-text">
                <h3>Total Patients</h3>
              </div>
            </div>
            <div className="chartt">
              <BarChart className="chart" />
            </div>
          </div>
        </div>

        <div className="body-main">
          <div className="main">
            <div className="top-main">
              <div className="chart">
                <LineChart />
              </div>
            </div>
            <div className="bottom-main">
              <div className="healths__main">
                <table className="patient-list">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient Name</th>
                      <th>Created At</th>
                      <th>Gender</th>
                      <th>Blood Group</th>
                      <th>Age</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>2022-03-01</td>
                      <td>Male</td>
                      <td>A+</td>
                      <td>35</td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Doe</td>
                      <td>2022-03-02</td>
                      <td>Female</td>
                      <td>B-</td>
                      <td>28</td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="action-column">
                        <select id="action" name="action">
                          <option value="...">...</option>
                          <option value="view">View</option>
                          <option value="delete">Delete</option>
                        </select>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="top-right">
              <h3>Recent Patients</h3>
              <div className="right-content">
                <div className="right-img"></div>
                <div className="right-text">
                  <h4>Amina Smith</h4>
                  <p>+234 907 524 5232</p>
                </div>
                <div className="right-time">2:00 PM</div>
              </div>
              <div className="right-content">
                <div className="right-img"></div>
                <div className="right-text">
                  <h4>Amina Smith</h4>
                  <p>+234 907 524 5232</p>
                </div>
                <div className="right-time">2:00 PM</div>
              </div>
              <div className="right-content">
                <div className="right-img"></div>
                <div className="right-text">
                  <h4>Amina Smith</h4>
                  <p>+234 907 524 5232</p>
                </div>
                <div className="right-time">2:00 PM</div>
              </div>
              <div className="right-content">
                <div className="right-img"></div>
                <div className="right-text">
                  <h4>Amina Smith</h4>
                  <p>+234 907 524 5232</p>
                </div>
                <div className="right-time">2:00 PM</div>
              </div>
              <div className="right-content">
                <div className="right-img"></div>
                <div className="right-text">
                  <h4>Amina Smith</h4>
                  <p>+234 907 524 5232</p>
                </div>
                <div className="right-time">2:00 PM</div>
              </div>
              
              
            </div>
            <div className="bottom-right">
              <h4>Today Appointment</h4>
              <div className="right-contents">
                <div className="content-right">
                  2 hrs later
                </div>
                <div className="right-line">
                  <div className="left-img"></div>
                </div>
                <div className="content-left">
                  <h3>Minahil Khan</h3>
                  <p>10:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="right-contents">
                <div className="content-right">
                  2 hrs later
                </div>
                <div className="right-line">
                  <div className="left-img"></div>
                </div>
                <div className="content-left">
                  <h3>Minahil Khan</h3>
                  <p>10:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="right-contents">
                <div className="content-right">
                  2 hrs later
                </div>
                <div className="right-line">
                  <div className="left-img"></div>
                </div>
                <div className="content-left">
                  <h3>Minahil Khan</h3>
                  <p>10:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="right-contents">
                <div className="content-right">
                  2 hrs later
                </div>
                <div className="right-line">
                  <div className="left-img"></div>
                </div>
                <div className="content-left">
                  <h3>Minahil Khan</h3>
                  <p>10:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="right-contents">
                <div className="content-right">
                  2 hrs later
                </div>
                <div className="right-line">
                  <div className="left-img"></div>
                </div>
                <div className="content-left">
                  <h3>Minahil Khan</h3>
                  <p>10:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Admin;
