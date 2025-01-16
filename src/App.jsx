import React, { useContext, useState } from 'react';
import './App.css';
import Photography from './Photography';
import Software from './Software';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Toggle from './Components/Toggle';
import mainPhoto from './assets/main pic redo.png'
import Contact from './Components/Contact';
import About from './Components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { authcontext } from './context api/photoContext';


function App() {
  
  const {user,setUser}=useContext(authcontext)
    console.log(setUser)

  const handleModule = () => {
    if (user) {
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
        checked={user}
        onChange={() => setUser((prev) => !prev)}
        />
      </div>

      {handleModule()}

      <hr/>

      <About/>

      <hr />
      <Contact/>
      <hr />

      <Footer/>
    </>
  );
}

export default App;
