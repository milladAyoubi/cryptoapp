import React, { useState, useEffect } from 'react'
import millify from 'millify';
import { Card, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';


import { useGetCryptosQuery } from '../services/cryptoAPI'


const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100; 
  const {data: cryptoList, isFetching } = useGetCryptosQuery();

  const [cryptos, setCryptos ] = useState(cryptoList?.data?.coins);

  const [search, setSearchTerm, searchTerm] = useState('')

  {/*useEffect(() => {
      setCryptos(cryptoList?.data?.coins)
      const filteredData = cryptoList?.data?.filter((coin) => coin.name.toLowerCase().inclues(searchTerm.toLowerCase()))

      setCryptos(filteredData);
  
    }, [cryptoList, searchTerm]);*/}

  if(isFetching) return 'Loading';

  return (
    <div>

      
      <Row gutters={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
            <Card title={`${currency.rank}. ${currency.name}`} 
            extra={<img className="crypto-image"src={currency.iconUrl} />} 
            hoverable >
            <div className="stats-p">
            <p >Price <span className="bold-stats">${millify(currency.price)} USD </span></p>
            <p >Market Cap <span className="bold-stats">${millify(currency.marketCap)}</span></p>
            <p >Daily Change <span className="bold-stats">{millify(currency.change)} %</span></p>
            </div>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies