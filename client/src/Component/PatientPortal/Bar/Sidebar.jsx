/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Axios } from "axios";
import {
  LuClipboardList,
  LuPill,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuCreditCard,
  LuSettings,
  LuCalendarDays,
  LuMessagesSquare,
} from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Sidebar({ isActive }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [selected, setSelected] = useState(0); // State to manage the selected index

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:8080/api/register";
        const { data: response } = await Axios.get(url);
        setUser({
          name: response.name,
          email: response.email,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Get the pathname from the location object
    const { pathname } = location;
    // Update the selected index based on the current pathname
    switch (pathname) {
      case "/Portal":
        setSelected(0);
        break;
      case "/Records":
        setSelected(1);
        break;
      case "/Appointments":
        setSelected(2);
        break;
      case "/Prescriptions":
        setSelected(3);
        break;
      case "/Billings":
        setSelected(4);
        break;
      case "/Feedback":
        setSelected(5);
        break;
      case "/Settings":
        setSelected(6);
        break;
      case "/Help":
        setSelected(7);
        break;
      default:
        setSelected(0);
    }
  }, []);

  return (
    <nav className={`portal_navigation ${isActive ? "active" : ""}`}>
      <div className="portal_logo">
        <img src="/Logo.png" alt="G.T.H Logo" />
      </div>

      <ul>
        <li>
          <Link
            to="/Portal"
            className={selected === 0 ? "active_link" : ""}
            onClick={() => setSelected(0)}
          >
            <i className="icon">
              <LuLayoutDashboard size={25} />
            </i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link
            to="/Records"
            className={selected === 1 ? "active_link" : ""}
            onClick={() => setSelected(1)}
          >
            <i className="icon">
              <LuClipboardList size={25} />
            </i>
            <span>Medical Records</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={selected === 2 ? "active_link" : ""}
            onClick={() => setSelected(2)}
          >
            <i className="icon">
              <LuCalendarDays size={25} />
            </i>
            <span>Appointments</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={selected === 3 ? "active_link" : ""}
            onClick={() => setSelected(3)}
          >
            <i className="icon">
              <LuPill size={25} />
            </i>
            <span>Prescriptions</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={selected === 4 ? "active_link" : ""}
            onClick={() => setSelected(4)}
          >
            <i className="icon">
              <LuCreditCard size={25} />
            </i>
            <span>Billings and Payments</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={selected === 5 ? "active_link" : ""}
            onClick={() => setSelected(5)}
          >
            <i className="icon">
              <LuMessagesSquare size={25} />
            </i>
            <span>Feedback</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={selected === 6 ? "active_link" : ""}
            onClick={() => setSelected(6)}
          >
            <i className="icon">
              <LuSettings size={25} />
            </i>
            <span>Settings</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className={selected === 7 ? "active_link" : ""}
            onClick={() => setSelected(7)}
          >
            <i className="icon">
              <LuLifeBuoy size={25} />
            </i>
            <span>Help</span>
          </Link>
        </li>
      </ul>

      <div className="portal_footer">
        <img
          src="https://ui-avatars.com/api/?background=f5f5f5&color=276ab3&bold=true"
          alt="user initial"
        />
        <div className="user">
          <div className="detail">
            <h4>John Doe{user.name}</h4>
            <span>johndoe@gmail.com{user.email}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
