import React from 'react'
import { GrView } from 'react-icons/gr'

const Payment = () => {
  return (
    <div className="patient-content__app">
        <div className="patient-content__apptop">
            <h2>Payments</h2>
        </div>

        <div className="health__main">
          <table className="patient-list">
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Approved</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Canceled</td>
                <td>$4000</td>
                <td>Cash</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>$4000</td>
                <td>Cash</td>
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

export default Payment