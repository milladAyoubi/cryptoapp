import React, { useState } from 'react'
import millify from 'millify';
import { Card, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';


import { useGetCryptosQuery } from '../services/cryptoAPI'


const Cryptocurrencies = () => {
  const {data: cryptoList, isFetching } = useGetCryptosQuery();

  const [cryptos, setCryptos ] = useState(cryptoList?.data?.coins);

  console.log(cryptos)

  return (
    <div>
      <Row gutters={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
            <Card title={`${currency.rank}. ${currency.name}`} 
            extra={<img className="crypto-image"src={currency.iconUrl} />} 
            hoverable >

            <p>Price: {millify(currency.price)}</p>
            <p>Market Cap: {millify(currency.marketCap)}</p>
            <p>Daily Change: {millify(currency.change)}</p>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies