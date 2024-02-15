// AdminInterface.js
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function AdminInterface() {
  // Állapotok inicializálása
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Bejelentkezés ellenőrzése
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') { // Jelszó ellenőrzése
      setLoggedIn(true);
    } else {
      setError('Hibás felhasználónév vagy jelszó!');
    }
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Admin felület</h1>
      <input
        type="text"
        placeholder="Felhasználónév"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Jelszó"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Bejelentkezés</button>
      {error && <div>{error}</div>}
    </div>
  );
}

export default AdminInterface;
