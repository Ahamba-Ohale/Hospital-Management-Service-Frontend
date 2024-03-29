import { FaTemperatureLow } from "react-icons/fa";
import { IoIosPulse } from "react-icons/io";
import { MdOutlineBloodtype, MdAir } from "react-icons/md";
import { NavLink } from "react-router-dom"
import PatientPortal from '../PatientPortal'

export default function Overview() {
    const greet = new Date().getHours();
    let time;
    
    if (greet >= 0 && greet < 12) {
        time = 'Morning';
    } else if (greet >= 12 && greet < 17) {
        time = 'Afternoon';
    } else {
        time = 'Evening';
    }
    
    return (
        <>
        <PatientPortal />
            <div className="greet">
                <p>Good {time} John Doe!</p>
                <span>How are you feeling this {time}?</span>
            </div>
            <section className="patient_overview">
                <section className="overview_sides">
                    <div className="overview_left" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <div className="overview_banner">
                            <div className="banner_text">
                                <h4>Find the best Doctors with <br /> Great Towers Hospital</h4>
                                <p>Appoint doctors and get the finest medical services.</p>
                            </div>
                            <div className="banner_image">
                                <img src="/doctor5.png" alt="Doctor" />
                            </div>
                        </div>
                        <div className="overview_vitals">
                            <div className="vitals_card">
                                <div>
                                    <div className="vitals_name">Body Temperature</div>
                                    <div className="vitals_number">36.2 <sub>&deg;c</sub></div>
                                </div>
                                <div className="vitals_icon">
                                    <FaTemperatureLow />
                                </div>
                            </div>
                            <div className="vitals_card">
                                <div>
                                    <div className="vitals_name">Pulse</div>
                                    <div className="vitals_number">85 <sub>bpm</sub></div>
                                </div>
                                <div className="vitals_icon">
                                    <IoIosPulse />
                                </div>
                            </div>
                            <div className="vitals_card">
                                <div>
                                    <div className="vitals_name">Blood Pressure</div>
                                    <div className="vitals_number">80/70 <sub>mm/Hg</sub></div>
                                </div>
                                <div className="vitals_icon">
                                    <MdOutlineBloodtype />
                                </div>
                            </div>
                            <div className="vitals_card">
                                <div>
                                    <div className="vitals_name">Breathing Rate</div>
                                    <div className="vitals_number">15 <sub>breath/m</sub></div>
                                </div>
                                <div className="vitals_icon">
                                    <MdAir />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overview_right">
                        
                    </div>
                </section>
                <section className="overview_sides">
                    <div className="overview_left" style={{ padding: '20px' }}>
                        <div className="overview_appoint">
                            <div className="overview_appoint-header">
                                <h2>Appointments</h2>
                                <NavLink 
                                    to="/Patient/Appointments" 
                                    activeClassName="active_link">
                                    View All
                                </NavLink>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Doctor</td>
                                        <td>Specification</td>
                                        <td>Date</td>
                                        <td>Time</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status upcoming">Upcoming</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status emergency">Emergency</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status declined">Declined</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status upcoming">Upcoming</span></td>
                                    </tr>
                                    <tr>
                                        <td>James Corter</td>
                                        <td>Cardiologist</td>
                                        <td>2/11/24</td>
                                        <td>45:00</td>
                                        <td><span className="status emergency">Emergency</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="overview_right overview_messages">
                        <div className="overview_appoint-header">
                            <h2>Messages</h2>
                        </div>
                        <table>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div className="overview_right-img">
                                        <img src="/doctor1.jpg" alt="profile" />
                                    </div>
                                </td>
                                <td>
                                    <h4>Damien <br /> 
                                        <span>Nigeria</span>
                                    </h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </section>
        </>
    )
}