import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css'
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import AOS from "aos" 
import "aos/dist/aos.css"
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './CartContext';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);



