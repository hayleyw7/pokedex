import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const router = 
  <BrowserRouter>
    <App />
  </BrowserRouter>

ReactDOM.render(router, document.getElementById('root'));