import React from 'react';
import ReactDOM from 'react-dom/client';
// bootstrap + font awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
// bootstrap js needs jquery
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
