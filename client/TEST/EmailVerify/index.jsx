import { useState, useEffect, Fragment } from 'react';
import './styles.modules.css';
import success from '../../public/verified.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url)
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.error(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <div className="success_container">
          <img src={success} alt="success-img" className="success_img" />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button
              type="submit"
              className="green_btn"
            >
              Login
            </button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;