import React, { useState } from 'react'
// import { GrView } from "react-icons/gr";
// import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Select from 'react-select';

const options = [
    { value: 'view', label: 'View', link: '/PatientInfo/view' },
    { value: 'delete', label: 'Delete', link: '/PatientInfo' },
  ];  


const Specialist = () => {

    const [selectedOption, setSelectedOption] = useState(null);


    // const [NewMedRecord, setNewMedRecord] = useState(false);

  return (
    <div className="patient-content__med">
      <div className="patient-content__top">
        <h2>Specialists</h2>
      </div>

      <div className="health__main">
            <table className="patient-list">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Specialist Name</th>
                  <th>Created At</th>
                  <th>Department</th>
                  <th>Gender</th>
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
                  <td>28</td>
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
                <tr>
                  <td>4</td>
                  <td></td>
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
                <tr>
                  <td>5</td>
                  <td></td>
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
                <tr>
                  <td>6</td>
                  <td></td>
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
                <tr>
                  <td>7</td>
                  <td></td>
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
                <tr>
                  <td>8</td>
                  <td></td>
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
                <tr>
                  <td>9</td>
                  <td></td>
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
                <tr>
                  <td>10</td>
                  <td></td>
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
                <tr>
                  <td>11</td>
                  <td></td>
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

      {/* <div className="patient-content__medd">
        <div className="patient-content__med1">
          <div className="patient-content__date">
            <p>
              <b>2nd, Feb 2024</b>
            </p>
          </div>
          <div className="patient-content__right">
            <p>
              <b>Complaint:</b> Fever, Headache
            </p>
            <p>
              <b>Diagnosis:</b> Malaria, Hypertension
            </p>
            <p>
              <b>Treatment:</b> Surgery, Chemotherapy
            </p>
            <p>
              <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
            </p>
          </div>
          <div className="patient-content__amt">
            <p>
              <b>$15000</b>
            </p>
          </div>
          <div className="patient-content__ico">
            <div>
              <GrView size={20} />
            </div>
            <div>
              <RiDeleteBin5Line size={20} />
            </div>
          </div>
        </div>
        <div className="patient-content__med1">
          <div className="patient-content__date">
            <p>
              <b>2nd, Feb 2024</b>
            </p>
          </div>
          <div className="patient-content__right">
            <p>
              <b>Complaint:</b> Fever, Headache
            </p>
            <p>
              <b>Diagnosis:</b> Malaria, Hypertension
            </p>
            <p>
              <b>Treatment:</b> Surgery, Chemotherapy
            </p>
            <p>
              <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
            </p>
          </div>
          <div className="patient-content__amt">
            <p>
              <b>$15000</b>
            </p>
          </div>
          <div className="patient-content__ico">
            <div>
              <GrView size={20} />
            </div>
            <div>
              <RiDeleteBin5Line size={20} />
            </div>
          </div>
        </div>
        <div className="patient-content__med1">
          <div className="patient-content__date">
            <p>
              <b>2nd, Feb 2024</b>
            </p>
          </div>
          <div className="patient-content__right">
            <p>
              <b>Complaint:</b> Fever, Headache
            </p>
            <p>
              <b>Diagnosis:</b> Malaria, Hypertension
            </p>
            <p>
              <b>Treatment:</b> Surgery, Chemotherapy
            </p>
            <p>
              <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
            </p>
          </div>
          <div className="patient-content__amt">
            <p>
              <b>$15000</b>
            </p>
          </div>
          <div className="patient-content__ico">
            <div>
              <GrView size={20} />
            </div>
            <div>
              <RiDeleteBin5Line size={20} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Specialist