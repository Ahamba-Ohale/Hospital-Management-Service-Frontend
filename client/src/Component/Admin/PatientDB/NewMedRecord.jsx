import { useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

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
         <div className="history-right">
         <div className="back" onClick={handleGoBack}><IoReturnUpBack /></div>
          <div className="page-name">New Medical Record</div>
         </div>
        </div>

        <div className="patient-main__content">
          <div className="patient-menuu">
            <div className="patient-menu__content">
              {/* <div className="patient-img"></div> */}
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
              <form>
                <label htmlFor="doctor">Doctor :
                <input type="text" id="doctor" required /></label>

                <label htmlFor="specialization">Specialization :
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={special.map(option => ({
                        value: option.value,
                        label: option.label
                    }))} 
                />
                </label>

                <label htmlFor="complaint">Complaint :
                <textarea name="complaint" id="complaint" className='textarea'></textarea>
                </label>
                
                <label htmlFor="diagnosis">Diagnosis :
                <textarea name="diagnosis" id="diagnosis" className='textarea'></textarea>
                </label>
                
                <label htmlFor="vitals">Vitals :
                <textarea name="vitals" id="vitals" className='textarea'></textarea>
                </label>

                <label>Treatments:</label>
                  
                <div className='checkbox'>
                    <input type="checkbox" name="" id="" /><p>BP</p>
                    
                    {/* <input
                        type="checkbox"
                        id={treatment}
                        name="treatments"
                        value={treatment}
                        checked={selectedTreatments.includes(treatment)}
                        onChange={() => handleCheckboxChange(treatment)}
                    />
                    <label htmlFor={treatment}>{treatment}</label> */}
                </div>
                
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMedRecord;
