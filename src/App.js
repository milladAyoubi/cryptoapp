import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';


import { Navbar, Homepage, Exchanges, Cryptocurrencies, Information, CryptoDetails } from './components';
import './App.css'
const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>

        <div className="main">
    
          <div className="routes">
            
          </div>

        </div>
        <div className="footer"></div>
        
    </div>
  )
}

export default App