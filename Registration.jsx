import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import { Link, useNavigate } from 'react-router-dom'

export default function Registration() {
  const [user, setUser] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault()
    let user_id = 101;
    let old = localStorage.getItem('Registration');
    old = JSON.parse(old) || [];

    if (old && old.length > 0) {
      user_id = old[old.length - 1].user_id + 1;
    }

    let newuser = {
      user_id: user_id,
      name: user.name,
      password: user.password,
      phone: user.phone,
      gender: user.gender,
      email: user.email,

    };

    const allData = [...old, newuser];
    localStorage.setItem('Registration', JSON.stringify(allData));
    nav('/Login');
  };
  return (
    <div className='images'>
      <form method='post' onSubmit={handleSubmit}>
        <h2 style={{ color: "blue", fontWeight: "bolder" }}>USER REGISTRATION</h2>
        <br />
        <br />
        <TextField name="name" onChange={handleChange} label="Name" type="text" placeholder='Enter your name' required />
        <br />
        <br />
        <TextField name="password" onChange={handleChange} label="Password" type="password" placeholder='Enter your Password' required />
        <br />
        <br />
        <TextField name="email" onChange={handleChange} label="Email" type="text" placeholder='Enter your Email' required />
        <br />
        <br />
        <Radio
          checked={user.gender === 'male'}
          onChange={handleChange}
          value="male"
          name="gender"
          inputProps={{ 'aria-label': 'Male' }}
        />
        Male
        <Radio
          checked={user.gender === 'female'}
          onChange={handleChange}
          value="female"
          name="gender"
          inputProps={{ 'aria-label': 'Female' }}
        />
        Female
        <br />
        <br />
        <TextField onChange={handleChange} name='phone' label="Phone" type="number" placeholder='Enter your phone' required />
        <br />
        <br />
        <TextField onChange={handleChange} name="address" label="Address" type="text" placeholder='Enter your Address' required />
        <br />
        <br />
        <button style={{ backgroundColor: "blue", fontSize: "25px" }}>Register</button>
        <br />
        <br />
      </form >
      <Link to='/Login'><button style={{ backgroundColor: "blue", fontSize: "25px" }}>Login</button></Link>
    </div>
  );
}

