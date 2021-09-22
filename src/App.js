import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import FooterBar from './FooterBar';
// import { useState } from 'react';


function App() {
  
  return (
    <div className="app">
      {/* Header part */}
      <Header/>
      {/* tinder card part */}
      <TinderCards />
      {/* Footer bar */}
      <FooterBar/>
    </div>
  );
}

export default App;
