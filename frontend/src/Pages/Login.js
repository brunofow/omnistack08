import React, { useState } from 'react';

import logo from '../assets/logo.svg';

import './Login.css';

export default function Login() {
  const [ username, setUsername] = useState('');

  function handleSubmit() {
    
  }

  return(
    <div className="login-container">
      <form>
        <img src={logo} alt="tindev"/>
        <input
          placeholder="Digite seu usuario no github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
