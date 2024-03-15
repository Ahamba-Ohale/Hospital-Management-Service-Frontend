import { useState, useEffect } from "react";
import { GrView } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { GoPlus } from "react-icons/go";
import Select from 'react-select';


const options = [
  { value: 'edit', label: 'Edit', link: '/InvoiceEdit' },
  { value: 'view', label: 'View', link: '/InvoiceView' },
  { value: 'delete', label: 'Delete', link: '/InvoiceView' },
];


const Invoice = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="patient-content__app">
        <div className="patient-content__apptop">
            <h2>Invoices</h2>
        </div>

        <div className="health__main">
          <table className="patient-list">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Patient</th>
                <th>Created Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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
                <td>#206719</td>
                <td>John Doe</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
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

        <Link to="/CreateInvoice">
        <div className="create">
          <GoPlus />
        </div>
        </Link>


    </div>
  )
}

export default Invoice