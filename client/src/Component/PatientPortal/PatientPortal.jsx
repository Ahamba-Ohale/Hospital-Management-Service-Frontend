import "./PatientPortal.css";
import Sidebar from "./Bar/Sidebar";
// import LineChart from "../Admin/Charts/LIneChart";
// import PatientChart from "../Admin/Charts/PatientChart";
import Topbar from "./Bar/Topbar";
import { useState } from "react";

export default function Patient() {
    const [isActive, setIsActive] = useState(false);

    const handleToggleClick = () => {
        setIsActive(prevIsActive => !prevIsActive);
    };

    return (
        <main className="patient_portal">
            <Sidebar isActive={isActive} />

            <div className={`patient_main ${isActive ? 'pactive' : ''}`}>
                <Topbar handleToggleClick={handleToggleClick} isActive={isActive} />
                        
                {/* <div className="sub-header">
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
                        <PatientChart className="chart" />
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
                        <div className="health__main">
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
                        <h3>Today Appointment</h3>
                        <div className="right-content">
                        <div className="content-right">2 hrs later</div>
                        <div className="content-left">
                            <h3>Minahil Khan</h3>
                            <p>10:00 AM - 12:00 PM</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
            </div>
        </main>
    );
}
