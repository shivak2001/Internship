import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Localstorages() {
  const [user, setUser] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let user_id = 101;
    let old = localStorage.getItem('petAdoptionUsername');
    old = JSON.parse(old) || [];

    if (old && old.length > 0) {
      user_id = old[old.length - 1].user_id + 1;
    }

    let newuser = {
      user_id: user_id,
      name: user.name,
      password:user.password,
      phone: user.phone,
      email: user.email,
    };

    const allData = [...old, newuser];
    localStorage.setItem('petAdoptionUsername', JSON.stringify(allData));
    nav('/View');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ backgroundColor: 'red', color: 'black', textAlign: 'center' }}>LocalStorage</h1>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name || ''}
            onChange={handleChange}
            placeholder="Enter Your Name"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={user.phone || ''}
            onChange={handleChange}
            placeholder="Enter Your Phone"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email || ''}
            onChange={handleChange}
            placeholder="Enter Your Email"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Insert
          </button>
        </div>
      </form>
    </div>
  );
}
