import { useState } from 'react'
import { GrView } from 'react-icons/gr'
import AddAppointmentModal from './AddAppointment';

const Appointment = () => {

  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const toggleAddModal = () => {
    setAddModalVisible(!isAddModalVisible);
  };

  return (
    <div className="patient-content__app">
        <div className="patient-content__apptop">
            <h2>Appointments</h2>
        </div>

        <div className="health__main">
          <table className="patient-list">
            <thead>
              <tr>
                <th>Date</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div onClick={toggleAddModal}><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div onClick={toggleAddModal}><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Approved</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Canceled</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
              <tr>
                <td>Jun 12, 2021</td>
                <td>John Doe <br />+1 234 567 890</td>
                <td>Pending</td>
                <td>10:00 AM - 12:00 PM</td>
                <td className="action-column">
                    <div><GrView size={20}/></div>
                </td>
              </tr>
            </tbody>
          </table>
          {isAddModalVisible && <AddAppointmentModal onClose={toggleAddModal} />}
        </div>

    </div>
  )
}

export default Appointment