import { useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const CreatePatient = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page in history
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

        <div className="history">
          <div className="back" onClick={handleGoBack}>
            <IoReturnUpBack />
          </div>
          <div className="page-name">Create Patient</div>
        </div>

        <div className="createpatient">
          <form>
            <label for="fname">Fullname:</label>
            <br />
            <input type="text" id="fname" name="first_name" />
            <br />
            <br />

            <label for="phone number">Phone Number:</label>
            <br />
            <input type="text" id="phone number" name="first_name" />
            <br />
            <br />

            <label for="email">Email:</label>
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <br />

            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={gender.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
              placeholder="Gender"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePatient;
