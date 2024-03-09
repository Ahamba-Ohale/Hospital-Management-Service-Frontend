import React from 'react'
import { GrView } from 'react-icons/gr'

const Invoice = () => {
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
                <th>Created Date</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>#206719</td>
                <td>12/06/2021</td>
                <td>16/06/2021</td>
                <td>$6070</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default Invoice