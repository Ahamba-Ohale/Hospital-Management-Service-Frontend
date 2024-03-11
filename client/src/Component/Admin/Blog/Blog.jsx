import { useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import Select from 'react-select';
import { Link } from "react-router-dom"
import DatePicker from "react-datepicker";


const options = [
  { value: 'view', label: 'View', link: '/PatientInfo/view' },
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


const Blog = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    // <div className="body">
      <div className="dashboard">
        <Sidebar />
        <div className="main-body">
          <div className="header">
            <span className="search">
              <input type="text" placeholder="Search Blog" />
            </span>
            <div className="notify">
              <div className="bell"></div>
              <div className="img"></div>
              <h4>Patient name</h4>
            </div>
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
            />            </div>
            <button type="submit" id="btn">
              Filter
            </button>
          </div>


          <div className="health__main">
            <table className="patient-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Blog Name</th>
                  <th>Created At</th>
                  <th>Authur</th>
                  <th>Title</th>
                  {/* <th>Age</th> */}
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
                  {/* <td>35</td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2022-03-02</td>
                  <td>Female</td>
                  <td>B-</td>
                  {/* <td>28</td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>7</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>8</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>9</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>10</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td></td> */}
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
                <tr>
                  <td>11</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="action-column">
                  <Select 
                    className="custom-select-control"
                    id="action"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
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
              </tbody>
            </table>
          </div>

        </div>
      </div>
    // </div>
  );
};

export default Blog;
