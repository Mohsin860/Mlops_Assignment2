// frontend/src/components/Auth/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_AUTH_SERVICE_URL}/forgot-password`, {
        email
      });
      setMessage('Password reset link sent to your email');
    } catch (error) {
      setMessage('Error sending reset link');
    }
  };

  return (
    <div className="forgot-password-container">
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;