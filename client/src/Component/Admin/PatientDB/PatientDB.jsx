import { useState, useEffect } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom"
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

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
          <div className="cards">Total Patients</div>
          <div className="cards">Monthly Patients</div>
          <div className="cards">Yearly Patients</div>
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
