import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    // Registration logic here
    // Assuming registration is always successful for this example
    navigate('/admin-login');
  };

  return (
    <div>
      <h2>Admin Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default AdminRegistration;
