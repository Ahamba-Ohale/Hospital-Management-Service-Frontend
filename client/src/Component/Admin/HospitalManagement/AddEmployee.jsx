import { useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const AddEmployee = () => {
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
          <div className="history-right">
          <div className="back" onClick={handleGoBack}>
            <IoReturnUpBack />
          </div>
          <div className="page-name">Add Employee</div>
          </div>
        </div>

        <div className="createpatient">
          <form>
            <label htmlFor="fname">Fullname:
              <input type="text" id="fname" name="first_name" />
            </label>
            
            <label htmlFor="phone number">Phone Number:  
              <input type="number" id="phone number" name="first_name" />
            </label>

            <label htmlFor="email">Email:
              <input type="text" id="email" name="email" />
            </label>
              <br />
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={gender.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
              placeholder="Gender"
              className="select"
            />

            <label htmlFor="date">Date of Birth:
              <input type="date" name="dob" id="dob" />
            </label>

            <label htmlFor="address">Address:
              <input type="text" id="email" name="email" />
            </label>

            <label htmlFor="address">Salary:
              <input type="number" name="" id="" />
            </label>

              <div className="create-button">
                <button>Delete</button> 
                <button>Submit</button> 
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
