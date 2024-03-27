import { useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineSaveAlt } from "react-icons/md";
import { GrFormView } from "react-icons/gr";

const ViewMedRecord = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page in history
  };

  const special = [
    { value: "cardiologist", label: "Cardiologist" },
    { value: "Paediatrist", label: "Paediatrist" },
  ];

  const [selectedTreatments, setSelectedTreatments] = useState([]);

  const treatmentOptions = [
    "Surgery",
    "Chemotherapy",
    "Physical Therapy",
    "Medication",
    "Counseling",
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
            <div className="back" onClick={handleGoBack}>
              <IoReturnUpBack />
            </div>
            <div className="page-name">View Medical Record</div>
          </div>
        </div>

        <div className="patient-main__content">
          <div className="patient-menuu">
            <div className="patient-menu__content">
              {/* <div className="patient-img"></div> */}
              <div className="patient-content__text">
                <h3>John Doe</h3>
                <p>Male</p>
                <p>johndoe@gmail.com</p>
                <p>(+234) 456-7890</p>
              </div>
              <div className="age">Age: 21</div>
            </div>
          </div>

          <div className="patient-content">
            <div className="patient-dat">02/11/2024</div>
            <div className="patient-t">
              <div className="patient-content__rite">
                <p>
                  <b>Complaint:</b> Fever, Headache
                </p>
                <br />
                <p>
                  <b>Diagnosis:</b> Malaria, Hypertension
                </p>
                <br />
                <p>
                  <b>Treatment:</b> Surgery, Chemotherapy
                </p>
                <br />
                <p>
                  <b>Prescription:</b> Paracetamol, Amoxicillin, Ibuprofen
                </p>
              </div>
              <div className="patient-content__amt">
                <p>
                  <b>$15000</b>
                </p>
              </div>
            </div>

            <div className="pat-but">
              <button>Admit</button>
              <button>Edit</button>
              <button>Discharge</button>
            </div>
            
            <div className="patient-vital">
              <div className="vitals">Blood Pressure <br /><br /> 120/80</div>
              <div className="vitals">Blood Pressure <br /><br /> 120/80</div>
              <div className="vitals">Blood Pressure <br /><br /> 120/80</div>
              <div className="vitals">Blood Pressure <br /><br /> 120/80</div>
            </div>

            <div className="patient-test">
              <h3>Lab test Results</h3>

              <div className="tests">
                <h4>Malaria</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati necessitatibus provident temporibus, atque dolorum voluptatem cum? Voluptatibus, similique? Ab, assumenda?</p>
                <i><GrFormView size={20} /></i>
              </div>
              <div className="tests">
                <h4>Malaria</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati necessitatibus provident temporibus, atque dolorum voluptatem cum? Voluptatibus, similique? Ab, assumenda?</p>
                <i><GrFormView size={20} /></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewMedRecord;
