import React, { Component } from 'react'
import './App.css';
import Restaurants from './Restaurants/Restaurants.js'

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type ='button' />
        <h3 className='App-title'> Charter's Code Test - Restaurants </h3>
        <Restaurants />
      </header>
    </div>
  );
}

export default App;
 