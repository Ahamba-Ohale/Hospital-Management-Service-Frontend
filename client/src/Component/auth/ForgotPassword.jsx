import { useState } from 'react';
import Axios from 'axios';
import './auth.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://8080/api/forgot-password', { email });

      if (response.status === 200) {
        setMsg(response.data.message);
      } else {
        setMsg('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setMsg('Something went wrong. Please try again later.');
      console.error('Error during forgot password:', error.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default ForgotPassword;