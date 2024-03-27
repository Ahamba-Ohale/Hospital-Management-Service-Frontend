import { GoPlus } from "react-icons/go";
import Sidebar from "../AdminSidebar/Sidebar";
import './Health.css'
import { Link } from "react-router-dom"
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdAddCall } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const options = [
  { value: 'view', label: 'View', link: '/PatientHealthInfo' },
  { value: 'delete', label: 'Delete', link: '/PatientInfo' },
];

const sortBy = [
  { value: 'newest patient', label: 'Newest Patient' },
  { value: 'oldest patient', label: 'Oldest Patient' },
];
const gender = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const apiUrl = 'http://localhost:8080/api'
const Health = () => {


  const [selectedOption, setSelectedOption] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  
  const [patients, setPatients] = useState([]);


  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/Patients/`);
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchData();
  }, []); 





  const [consultationCount, setconsultationCount] = useState(0);

  useEffect(() => {
    const fetchDailyconsultation = async () => {
      try {
        const response = await fetch(`${apiUrl}/consultation`);
        const consultations = await response.json();

        // Filter appointments created on the current day
        const currentDate = new Date();
        const currentDayconsultation = consultations.filter(consultation => {
          const consultationCreatedAt = new Date(consultation.createdAt);
          return consultationCreatedAt.getDate() === currentDate.getDate() &&
                 consultationCreatedAt.getMonth() === currentDate.getMonth() &&
                 consultationCreatedAt.getFullYear() === currentDate.getFullYear();
        });

        setconsultationCount(currentDayconsultation.length); // Update the state using setconsultationCount
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchDailyconsultation();

    // Refresh the count at the start of each day
    const interval = setInterval(() => {
      setconsultationCount(0);
      fetchDailyconsultation();
    }, 86400000); // 24 hours in milliseconds

    return () =>clearInterval(interval);
  }, []);




  


  

  const [userDayCount, setUserDayCount] = useState(0);

  useEffect(() => {
    const fetchDailyAppointment = async () => {
      try {
        const response = await fetch(`${apiUrl}/appointment`);
        const appointments = await response.json();

        // Filter appointments created on the current day
        const currentDate = new Date();
        const currentDayAppointments = appointments.filter(appointment => {
          const appointmentCreatedAt = new Date(appointment.createdAt);
          return appointmentCreatedAt.getDate() === currentDate.getDate() &&
                 appointmentCreatedAt.getMonth() === currentDate.getMonth() &&
                 appointmentCreatedAt.getFullYear() === currentDate.getFullYear();
        });

        setUserDayCount(currentDayAppointments.length);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchDailyAppointment();

    // Refresh the count at the start of each day
    const interval = setInterval(() => {
      setUserDayCount(0);
      fetchDailyAppointment();
    }, 86400000); // 24 hours in milliseconds

    return () => clearInterval(interval);
  }, []);

  

  return (
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
            <div className="cards">
              <p className="today-appointment" style={{fontSize: '20px'}}>Appointment booked today</p>
              <MdAddCall className="appointment-booked-icon"/>
              <span className="total-appointment-number">{userDayCount}</span>
            </div>
            <div className="cards">Medication</div>
            <div className="cards">
              <p className="total-consultation" style={{fontSize: '20px'}}>Total consultations today</p>
              <FaUserDoctor className="total-consultation-icon"/>
              <span className="total-consultation-span">{consultationCount}</span>
            </div>
          </div>

          <div className="page-title">
          <h2>Patient Health Records</h2>
        </div>
        
          <div className="filter">
          <div className="card1">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={sortBy.map(option => ({
                value: option.value,
                label: option.label
              }))} 
              placeholder= "Sort By"
            />
          </div>
          <div className="card1">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={gender.map(option => ({
                value: option.value,
                label: option.label
              }))} 
              placeholder= "Gender"
            />
          </div>
          <div className="card1">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormatShow="DD MMMM,YYYY"
            />
          </div>
          <button type="submit" id="btn">
            Filter
          </button>
        </div>

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
              {patients.map((patient, index) => 
              <tr key={index}>
              <td>{ index + 1}</td>
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
                  onChange={(selectedOption)=> {
                    if (selectedOption.value === 'delete') {
                      handleDelete(patient._id);
                    }
                  }}
                  isSearchable={false}
                  options={options.map(option => ({

                    value: option.value,
                    label: (
                      <Link to={option.link} style={{ textDecoration: 'none', color: 'inherit'}}>
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

          <div className="create">
            <GoPlus />
          </div>
        </div>
      </div>
  );
};

export default Health;
