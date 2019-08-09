import React, { useState } from 'react';
import api from '../services/api';

import logo from '../assets/logo.svg';

import './Login.css';

export default function Login({ history }) {
  const [ username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    const { _id } = response.data;
 
    history.push(`/dev/${_id}`);

    console.log(response);

  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="tindev"/>
        <input
          placeholder="Digite seu usuario no github"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
