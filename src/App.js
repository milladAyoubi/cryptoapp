import React from 'react'
import { Routes ,Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';


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
            <Routes>
              <Route exact path="/" element={<Homepage/>}></Route>
              <Route exact path="/exchanges" element={<Exchanges/>}></Route>
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}></Route>
              <Route exact path="/cryptodetails" element={<CryptoDetails/>}></Route>
              <Route exact path="/information" element={<Information/>}></Route>

            </Routes>
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