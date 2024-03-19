  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  function AdminRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
      // Simulate registration by setting a dummy user in local storage
      const newUser = {
        username,
        email,
        password,
      };
      localStorage.setItem('adminUser', JSON.stringify(newUser));
      useNavigate('/login');
    };
  
    return (
      <div className='container'>
        <h2>Admin Register</h2>
        <div className='input-group'>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn' onClick={handleRegister}>Register</button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    );
  }
  
  export default AdminRegister;
  