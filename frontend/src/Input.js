import React, { useState } from 'react';
import axios from 'axios';

function Input() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend
    axios.post('http://localhost:5000/api/save-data', { name, email })
      .then(response => {
        setMessage(response.data.message);
        setName('');
        setEmail('');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>Web Application for MLOPS Task 5</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Input;
