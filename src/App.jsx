import React, { useState } from 'react';
import './App.css';
import Photography from './Photography';
import Software from './Software';
import NavBar from './Components/NavBar';

function App() {
  const [checked, setCheck] = useState(false);

  const handleModule = () => {
    if (checked) {
      return <Photography />;
    } else {
      return <Software />;
    }
  };

  return (
    <>
    <NavBar/>
      sup
      <br />

      <label className="switch">
        <input type="checkbox" checked={checked} onChange={() => setCheck((prev) => !prev)} />
        <span className="slider round"></span>
      </label>

      <hr />

      {handleModule()}
    </>
  );
}

export default App;
