import React, { Component } from 'react'
import './App.css';
import Restaurants from './Restaurants/Restaurants.js'

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className='App-title'> Charter's Code Test - Restaurants <Restaurants /></h3>
      
      </header>
    </div>
  );
}

export default App;
