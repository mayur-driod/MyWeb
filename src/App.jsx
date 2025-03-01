import React, { useContext } from 'react';
import './App.css';
import Photography from './Photography';
import Software from './Software';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import mainPhoto from './assets/main pic redo.png';
import Contact from './Components/Contact';
import About from './Components/About';
import { authcontext } from './context api/photoContext';

function App() {
  const { user, setUser } = useContext(authcontext);

  const handleModule = () => {
    return user ? <Photography /> : <Software />;
  };

  return (
    <>
      <NavBar />
      <div id="home" className='Choose' style={{ backgroundImage: `url(${mainPhoto})` }}>
        <Toggle 
          checked={user}
          onChange={() => setUser((prev) => !prev)}
        />
      </div>

      <div>{handleModule()}</div>

      <hr />

      <div id="about"><About /></div>

      <hr />

      <div id="contact"><Contact /></div>

      <hr />

      <Footer />
    </>
  );
}

export default App;