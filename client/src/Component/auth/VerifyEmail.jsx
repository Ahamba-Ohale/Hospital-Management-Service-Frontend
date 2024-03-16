import { useState, useEffect, Fragment } from 'react';
import './auth.css';
import success from '/verified.png';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import Error from '../Error/Error';
import { BiLoaderCircle } from 'react-icons/bi';

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        setLoading(true);
        const url = `http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
        const { data } = await Axios.get(url)
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.error(error);
        setValidUrl(false);
      } finally {
        setLoading(false);
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
              disabled={loading}
              type="submit"
              className="blue_btn"
            >
              {loading ? (
                <BiLoaderCircle className="animate-spin" color="#fff" size={25} />
              ) : (
                'Sign In'
              )}
            </button>
          </Link>
        </div>
      ) : (
        <Error />
      )}
    </Fragment>
  );
};

export default VerifyEmail;