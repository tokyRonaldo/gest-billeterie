import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './Component/Home';
import Events from './Component/Event';
import Login from './auth/Login';
import EventDetail from './Component/EventDetail';
import Panier from './Component/Panier';
import React, { useEffect, useState } from 'react';

function App() {
  const [paddingTop, setPaddingTop] = useState(0);

useEffect(() => {
  adjustPadding()
  
})

const adjustPadding = () => {
  const navbarHeight = document.getElementById('navbar').offsetHeight;
  setPaddingTop(navbarHeight);
  console.log(navbarHeight);
};

// Ajuster le padding-top au chargement de la page
window.addEventListener('load', adjustPadding);
// Ajuster le padding-top lors du redimensionnement de la fenê
window.addEventListener('resize', adjustPadding);

// Nettoyer les écouteurs d'événements
window.removeEventListener('load', adjustPadding);
window.removeEventListener('resize', adjustPadding);


  return (
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Home paddingTop={paddingTop}/>
    <Events />
    <EventDetail />
    <Login />
  */

    <div className='content'>
    <Navbar paddingTop={paddingTop} setPaddingTop={setPaddingTop} />
    <div className="" style={{ marginTop: `${paddingTop}px` }}>
    </div>

    <Panier />
    <Footer />

    </div>
  );
}

export default App;
