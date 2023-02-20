import React from 'react'
import {Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-rounter-dom'
import { HomeOutlined, MoneyCollectOutlined, BuldOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';



const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar/>
                <Typography.Title level={2} className="logo">
                <Link to="/">CryptoAPI</Link>
                </Typography.Title>
                <Button className="menu-control-container">

                </Button>
            </div>   
        </div>
    )
}

export default Navbar