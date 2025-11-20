import { useState } from 'react';
import meepoImage from '/MEEPO.jpg';
import dogImage from '/DOG.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={dogImage} className="logo vue" alt="Dog Image" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={meepoImage} className="logo react" alt="Meepo Image" />
        </a>
      </div>
      <h1>Dire Dog Squad vs. Stupid Heroes</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Meepo Haters: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Oh my god I hate meepo</p>
    </>
  );
}

export default App;
