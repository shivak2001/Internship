import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../External.css';

const LoginPage = () => {
  const nav = useNavigate();

  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

// Inside the handleLogin function in Login.js
const handleLogin = (event) => {
  event.preventDefault();

  // Check if the username exists in local storage
  const storedUsernames = JSON.parse(localStorage.getItem('Registration')) || [];

  const isValidUser = storedUsernames.some((user) => user.name === username && user.password==password);

  if (isValidUser) {
    // Successful login
    setErrorMessage('');
    console.log('Login successful for user:', username);
    // Redirect to Dashboard with the username as a parameter
    nav(`/Dashboard/${username}`);
  } else {
    // Invalid username
    setErrorMessage('Invalid Username or Password.Please try again.');
  }
};
  return (
    <div className='image'>
      <br/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{fontWeight:"bolder"}}>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label style={{fontWeight:"bolder",marginRight:"57px"}}>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </label>
        <br />
        <br/>
        <label style={{fontWeight:"bolder",marginRight:"50px"}}>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <br />
        <button style={{backgroundColor:"yellow",fontWeight:"bolder",fontSize:"25px"}} type="submit">Login</button>
        <br /> 
        <br/>
       Don't have your Account<br/><Link style={{color:"red",fontWeight:"bolder"}} to='/Registration'>Register</Link>
      </form>
      {errorMessage && <p style={{ fontWeight:"bolder",fontFamily:"monospace",fontSize:"20px",color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
