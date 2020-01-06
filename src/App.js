import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Carousel from './components/Carousel';
import Parralax from './components/Parralax';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Splash />
        <Carousel />
        <Parralax />
    </div>
  );
}

export default App;
