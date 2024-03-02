import { GoPlus } from "react-icons/go";
import Sidebar from "./AdminSidebar/Sidebar";

const Health = () => {
  return (
    <div className="body">
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
            <div className="cards">1</div>
            <div className="cards">2</div>
            <div className="cards">3</div>
          </div>

          <div className="filter">
            <div className="card1">
              <select id="sortBy" name="sortBy">
                <option value="sortBy">Sort By</option>
                <option value="newestPatients">Newest Patients</option>
                <option value="oldestPatients">Oldest Patients</option>
              </select>
            </div>
            <div className="card1">
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="card1">
              <input type="date" id="date" name="startdate" />
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
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>2022-03-01</td>
                  <td>Male</td>
                  <td>A+</td>
                  <td>35</td>
                  <td className="action-column">
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view">View</option>
                      <option value="delete">Delete</option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view" id="option">
                        View
                      </option>
                      <option value="delete" id="option">
                        Delete
                      </option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view" id="option">
                        View
                      </option>
                      <option value="delete" id="option">
                        Delete
                      </option>
                    </select>
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
                    <select id="action" name="action">
                      <option value="...">...</option>
                      <option value="view" id="option">
                        View
                      </option>
                      <option value="delete" id="option">
                        Delete
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="create">
            <GoPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;
