import { useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import TextareaAutosize from "react-textarea-autosize";

const NewMedRecord = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [complaint, setComplaint] = useState("")
    const [diagnosis, setDiagnosis] = useState("")
    const [vitals, setVitals] = useState("");


    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };

  const special = [
    { value: 'cardiologist', label: 'Cardiologist' },
    { value: 'Paediatrist', label: 'Paediatrist' },
  ];

  const [selectedTreatments, setSelectedTreatments] = useState([]);

  const treatmentOptions = [
    'Surgery',
    'Chemotherapy',
    'Physical Therapy',
    'Medication',
    'Counseling',
  ];

  const handleCheckboxChange = (treatment) => {
    // Toggle the selection of the treatment
    if (selectedTreatments.includes(treatment)) {
      setSelectedTreatments((prevSelected) =>
        prevSelected.filter((item) => item !== treatment)
      );
    } else {
      setSelectedTreatments((prevSelected) => [...prevSelected, treatment]);
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
            <div className="bell">
              <IoMdNotificationsOutline />
            </div>
            <div className="img"></div>
            <h4>Patient Name</h4>
          </div>
        </div>

        <div className="history">
          <div className="back" onClick={handleGoBack}><IoReturnUpBack /></div>
          <div className="page-name">New Medical Record</div>
        </div>

        <div className="patient-main__content">
          <div className="patient-menuu">
            <div className="patient-menu__content">
              <div className="patient-img"></div>
              <div className="patient-content__text">
                <h3>John Doe</h3>
                <p>johndoe@gmail.com</p>
                <p>(+234) 456-7890</p>
              </div>
              <div className="age">Age: 21</div>
            </div>
          </div>

          <div className="patient-content">
            <div className="formm">
              <form action="#">
                <label htmlFor="doctor">Doctor :
                <input type="text" id="doctor" required placeholder='Doctor'/></label>
                <br />

                <label htmlFor="specialization">Specialization :
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={special.map(option => ({
                        value: option.value,
                        label: option.label
                    }))} 
                    placeholder= "Specialization"
                />
                </label>
                <br />

                <label htmlFor="complaint">Complaint :
                <TextareaAutosize
                    id="complaint"
                    name="complaint"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    className="input-field"
                    placeholder="Complaint"
                />
                </label>
                <br />
                <label htmlFor="diagnosis">Diagnosis :
                <TextareaAutosize
                    id="diagnosis"
                    name="diagnosis"
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                    className="input-field"
                    placeholder="Diagnosis"
                />
                </label>
                <br />
                <label htmlFor="vitals">Vitals :
                <TextareaAutosize
                    id="vitals"
                    name="vitals"
                    value={vitals}
                    onChange={(e) => setVitals(e.target.value)}
                    className="input-field"
                    placeholder="Vitals"
                />
                </label>
                <br />

                <label>Treatments:</label>
                    {treatmentOptions.map((treatment) => (
                <div key={treatment} className='checkbox'>
                    <input
                        type="checkbox"
                        id={treatment}
                        name="treatments"
                        value={treatment}
                        checked={selectedTreatments.includes(treatment)}
                        onChange={() => handleCheckboxChange(treatment)}
                    />
                    <label htmlFor={treatment}>{treatment}</label>
                </div>
                ))}
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMedRecord;
