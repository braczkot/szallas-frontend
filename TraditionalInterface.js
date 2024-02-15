// TraditionalInterface.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TraditionalInterface() {
  // Állapotok inicializálása
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Lekérdezés a szerverről
  const fetchData = async () => {
    try {
      const response = await fetch('/get-all'); // Kész végpont
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Hagyományos felület</h1>
      <button onClick={fetchData}>Adatok lekérése</button>
      {error && <div>Hiba történt: {error}</div>}
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <Link to={`/get/${item.id}`}>{item.name}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TraditionalInterface;
