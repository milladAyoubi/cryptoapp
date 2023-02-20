import React from 'react'
import { Routes ,Route, Link } from 'react-router-dom';
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
           <Layout>
          <div className="routes">
            
          </div>
          </Layout>
       
        <div className="footer" >
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Crypto Exchange <br></br>
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link to="/information">Information</Link>
           
          </Space>
        </div>
        </div>
    </div>
  )
}

export default App