import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App';
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from '../src/reportWebVitals';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
