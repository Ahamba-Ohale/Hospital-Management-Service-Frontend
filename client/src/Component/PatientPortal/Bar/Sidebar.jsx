/* eslint-disable no-unused-vars */
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
import { FaChevronLeft } from "react-icons/fa6";

export default function Sidebar({ sidebarClose, setSidebarClose }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [selected, setSelected] = useState(0); // State to manage the selected index

  const ModSidebarOpen = () => {
    setSidebarClose(!sidebarClose);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:8080/api/users/all";
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
      case "/Patient/Portal":
        setSelected(0);
        break;
      case "/Patient/Records":
        setSelected(1);
        break;
      case "/Patient/Appointments":
        setSelected(2);
        break;
      case "/Patient/Prescriptions":
        setSelected(3);
        break;
      case "/Patient/Billings":
        setSelected(4);
        break;
      case "/Patient/Feedback":
        setSelected(5);
        break;
      case "/Patient/Settings":
        setSelected(6);
        break;
      case "/Patient/Help":
        setSelected(7);
        break;
      default:
        setSelected(0);
    }
  }, []);

  return (
    <nav className={`portal_navigation ${sidebarClose ? "pactive" : ""}`}>
      <div className="toggle" onClick={ModSidebarOpen}>
           <button style={{ transform: sidebarClose ? 'rotate(180deg)' : 'initial', left: sidebarClose ? '60px' : '260px' }}>
             <FaChevronLeft color="#f5f5f5" />
           </button>
      </div>
    <div className="portal_logo" style={{ left: sidebarClose ? '-40px' : '' }}>
      <img src="/Logo.png" alt="G.T.H Logo" style={{ transform: sidebarClose ? 'scale(0.5)' : 'scale(1)' }} />
    </div>

      <ul>
        <li>
          <Link
            to="/Patient/Portal"
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
            to="/Patient/Records"
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
            to="/Patient/Appointments"
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
            to="/Patient/Prescriptions"
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
            to="/Patient/Bills"
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
            to="/Patient/Feedback"
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
            to="/Patient/Settings"
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
            to="/Patient/Help"
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
          style={{ transform: sidebarClose ? 'scale(1.2)' : 'scale(1.0)' }}
        />
        <div className="user" style={{ display: sidebarClose ? 'none' : 'block' }}>
          <div className="detail">
            <h4>John Doe</h4>
            <span>johndoe@gmail.com</span>
          </div>
        </div>
        </div>
    </nav>
  );
}


/* export default function //Sidebar({// sidebarClose, //setSidebarClose }) {
//   const ModSidebarOpen = () => {
//     setSidebarClose(!sidebarClose);
//   };
//   const [selected, setSelected] = useState(0); // State to manage the selected index  
  
//   useEffect(() => {
//     // Get the pathname from the location object
//     const { pathname } = location;
//     // Update the selected index based on the current pathname
//     switch (pathname) {
//       case "/Patient/Portal":
//         setSelected(0);
//         break;
//       case "/Patient/Records":
//         setSelected(1);
//         break;
//       case "/Patient/Appointments":
//         setSelected(2);
//         break;
//       case "/Patient/Prescriptions":
//         setSelected(3);
//         break;
//       case "/Patient/Billings":
//         setSelected(4);
//         break;
//       case "/Patient/Feedback":
//         setSelected(5);
//         break;
//       case "/Patient/Settings":
//         setSelected(6);
//         break;
//       case "/Patient/Help":
//         setSelected(7);
//         break;
//       default:
//         setSelected(0);
//     }
//   }, []);

//   return (
//     <>
//       <nav className="portal_navigation">
//         <div className="toggle" onClick={ModSidebarOpen}>
//           <button style={{ transform: sidebarClose ? 'rotate(180deg)' : 'initial' }}>
//             <FaChevronLeft />
//           </button>
//         </div>
//         <div className="portal_logo">
//           <div style={{ transform: sidebarClose ? 'scale(1.0)' : 'scale(0.7)' }}>
//             <img src="/Logo.png" alt="G.T.H Logo" />
//           </div>
//           <h2 style={{ display: sidebarClose ? 'none' : 'block' }}>Great Towers Hospital</h2>
//         </div>
//         {LinksArray.map(({ label, icon, to }) => (
//           <ul key={label}>
//             <li>
//               <Link to={to} 
//                 className={selected === 0 ? "active_link" : ""} 
//                 onClick={() => setSelected(0)}
//               >
//                 <i className="icon">
//                   {icon}
//                 </i>
//                 {!sidebarClose && <span>{label}</span>}
//               </Link>
//             </li>
//           </ul>
//         ))}
//         {/* {LinksArray.map(({ label, icon, to }) => (
//           <div className="portal_linkContainer" key={label}>
//             <Link to={to} className="portal_links">
//               <div className="portal_linkIcon">
//                 {icon}
//               </div>
//               {!sidebarClose && <span>{label}</span>}
//             </Link>
//           </div>
//         ))} 
//         <div className="portal_footer">
//           <img
//             src="https://ui-avatars.com/api/?background=f5f5f5&color=276ab3&bold=true"
//             alt="user initial"
//             style={{ transform: sidebarClose ? 'scale(1.2)' : 'scale(1.0)' }}
//           />
//           <div className="user" style={{ display: sidebarClose ? 'none' : 'block' }}>
//             <div className="detail">
//               <h4>John Doe</h4>
//               <span>johndoe@gmail.com</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// } */

const LinksArray = [
  {
    label: "Dashboard",
    icon: <LuLayoutDashboard size={25} />,
    to: "/Patient/Portal"
  },
  {
    label: "Medical Records",
    icon: <LuClipboardList size={25} />,
    to: "/Patient/Records"
  },
  {
    label: "Appointments",
    icon: <LuCalendarDays size={25} />,
    to: "/Patient/Appointments"
  },
  {
    label: "Prescriptions",
    icon: <LuPill size={25} />,
    to: "/Patient/Prescriptions"
  },
  {
    label: "Billings and Payments",
    icon: <LuCreditCard size={25} />,
    to: "/Patient/Bills"
  },
  {
    label: "Feedback",
    icon: <LuMessagesSquare size={25} />,
    to: "/Patient/Feedback"
  },
  {
    label: "Settings",
    icon: <LuSettings size={25} />,
    to: "/Patient/Settings"
  },
  {
    label: "Help",
    icon: <LuLifeBuoy size={25} />,
    to: "/Patient/Help"
  },
];