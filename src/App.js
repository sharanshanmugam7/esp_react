// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = async () => {
    try {
      const response = await fetch('/toggle-light', { method: 'POST' });
      if (response.ok) {
        setLightOn(!lightOn);
      }
    } catch (error) {
      console.error('Error toggling light:', error);
    }
  };

  return (
    <div className="App">
      <h1>ESP32 Light Controller</h1>
      <button onClick={toggleLight}>{lightOn ? 'Turn Off Light' : 'Turn On Light'}</button>
    </div>
  );
};

export default App;
