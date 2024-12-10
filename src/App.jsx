import React, { useState } from 'react';
import './App.css';
import Photography from './Photography';
import Software from './Software';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Toggle from './Components/Toggle';

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
      <br />
      <hr />
      
      <Toggle 
      checked={checked}
      onChange={() => setCheck((prev) => !prev)}
      />

      {handleModule()}

      <Footer/>
    </>
  );
}

export default App;
