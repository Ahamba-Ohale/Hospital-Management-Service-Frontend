import { useState, useEffect } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LIneChart";
import './Dashboard.css'
import PatientChart from "../Charts/PatientChart";
import AppointmentChart from '../Charts/AppointmentPage'
import PrescriptionChart from "../Charts/prescriptionCharts";
import Select from 'react-select';
import { Link } from "react-router-dom";
import axios from "axios";

const options = [
  { value: 'view', label: 'View', link: '/PatientInfo/view' },
  { value: 'delete', label: 'Delete', link: '/PatientInfo' },
];


function Admin() {

  const [selectedOption, setSelectedOption] = useState(null);

  const [patients, setPatients] = useState([]);

  const [fivePatients, setFivePatients] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/Patients/");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/patients/')
        const data = await response.json();
        // Sort patients by creation date in descending order
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Take the first 5 patients
        const recentPatients = data.slice(0, 5);
        setFivePatients(recentPatients);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);



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
                <h3>Total Appointment</h3>
              </div>
            </div>
            <div className="chartt">
              <AppointmentChart className="chart" />
            </div>
          </div>
          <div className="card">
            <div className="chart-top">
              <div className="chart-img"></div>
              <div className="chart-text">
                <h3>Prescriptions</h3>
              </div>
            </div>
            <div className="chartt">
              <PrescriptionChart className="chart" />
            </div>
          </div>
          <div className="card">
            <div className="chart-top">
              <div className="chart-img"></div>
              <div className="chart-text">
                <h3>Total Earnings</h3>
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
                    {patients.map((patient, index) =>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.createdAt}</td>
                        <td>{patient.gender} </td>
                        <td>{patient.bloodType}</td>
                        <td>{patient.age}</td>
                        <td className="action-column">
                          <Select
                            className="custom-select-control"
                            id="action"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options.map(option => ({
                              value: patient,
                              label: (
                                <Link to={option.link} 
                                  state={{ patientData: patient }} // pass the patient object here
                                  style={{ textDecoration: 'none', color: 'inherit' }}>
                                  {option.label}
                                </Link>
                              ),
                            }))}
                            placeholder='...'
                          />
                        </td>
                      </tr>
                    )}

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="top-right">
              <h3>Recent Patients</h3>
              {fivePatients.map((patient, index) =>(
                <div key={index} className="right-content">
                <div className="right-img"></div>
                <div className="right-text">
                  <h4>{patient.name}</h4>
                </div>
                <div className="right-time">{patient.createdAt}</div>
              </div>
              ) )}



            {/* <div className="bottom-right">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Admin;
