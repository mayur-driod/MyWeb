import React, { useState } from 'react';
import './App.css';
import Photography from './Photography';
import Software from './Software';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import mainPhoto from './assets/main pic redo.png'

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
      <div className='Choose' style={{ backgroundImage: `url(${mainPhoto})`}}>
        <Toggle 
        checked={checked}
        onChange={() => setCheck((prev) => !prev)}
        />
      </div>
      

      {handleModule()}

      <Footer/>
    </>
  );
}

export default App;
