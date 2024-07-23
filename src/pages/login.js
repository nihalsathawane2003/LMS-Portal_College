import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginStyle.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(`/courselist`);
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login request with', { username, password });
      const response = await axios.post(`http://localhost:3000/student/login`, { username, password });
      console.log('Login response:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate(`/courselist`);
    } catch (err) {
      console.error('Login error:', err);
      console.error('Response data:', err.response ? err.response.data : 'No response data');
      if (err.response && err.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;

