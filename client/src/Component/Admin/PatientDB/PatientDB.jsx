import { useState, useEffect } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom"
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { FaUsersLine } from "react-icons/fa6";

const options = [
  { value: 'view', label: 'View', link: '/PatientInfo/view' },
  { value: 'delete', label: 'Delete', },
];

const sortBy = [
  { value: 'newest patient', label: 'Newest Patient' },
  { value: 'oldest patient', label: 'Oldest Patient' },
];
const gender = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const PatientDB = () => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/Patients/`);
        const data = await response.json();
        setUserCount(data.length);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []);



  const [patients, setPatients] = useState([]);

  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/Patients/${id}`);
      // After successful deletion, update the patient list by refetching data
      const response = await axios.get("http://localhost:8080/api/Patients/");
      setPatients(response.data);
      navigate('/Patients Database');
      // history.push(`/PatientInfo/${id}`);
    } catch (error) {
      console.error("Error deleting patient:", error);
    }
  };





  const [userMonthCount, setUserMonthCount] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Initialize with the current month

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/Patients/`);
        const patients = await response.json();

        // Filter patients created in the current month
        const currentMonthPatients = patients.filter(patient => {
          const patientCreatedAt = new Date(patient.createdAt);
          return patientCreatedAt.getMonth() + 1 === currentMonth;
        });

        setUserMonthCount(currentMonthPatients.length);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, [currentMonth]); // Add currentMonth to the dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      const newMonth = new Date().getMonth() + 1;
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
      }
    }, 60000); // Check every minute for a new month

    return () => clearInterval(interval);
  }, [currentMonth]);

  const [totalUserCount, setTotalUserCount] = useState(0);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/Patients/`);
        const patients = await response.json();

        // Calculate the total count of patients for all months
        const totalCount = patients.length;
        setTotalUserCount(totalCount);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);


  



  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-body">
        <div className="header">
          <span className="search">
            <input type="text" placeholder="Search..." />
          </span>
          <div className="notify">
            <div className="bell"></div>
            <div className="img"></div>
            <h4>Patient name</h4>
          </div>
        </div>

        <div className="sub-header">
          <div className="cards">
            <p style={{color: '#1E528E', fontSize: '25px', fontWeight:'bold',}} className="total-patients">TOTAL PATIENTS</p>
            <FaUsersLine className="patient-icon"/>
            <span className="patient-icon-span">{userCount}</span>
          </div>
          <div className="cards">
            <p style={{color: '#1E528E', fontSize: '25px', fontWeight:'bold',}} className="total-patients">MONTHLY PATIENTS</p>
            <FaUsersLine className="patient-icon"/>
            <span className="monthly-patient-icon-span">{userMonthCount}</span>
          </div>
          <div className="cards">
          <p style={{color: '#1E528E', fontSize: '25px', fontWeight:'bold',}} className="total-patients">YEARLY PATIENTS</p>
            <FaUsersLine className="patient-icon"/>
            <span className="yearly-patient-icon-span">{totalUserCount}</span>
          </div>
        </div>

        <div className="page-title">
          <h2>Patients Database</h2>
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

        <Link to="/CreatePatient">
        <div className="create">
          <GoPlus />
        </div>
        </Link>
      </div>
    </div>
  );
};

export default PatientDB;
