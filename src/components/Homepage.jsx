
import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import {Cryptocurrencies, Information} from '../components'

//API data
import { useGetCryptosQuery } from '../services/cryptoAPI'



const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Data Loading';

  console.log(data)
  return (
    <>
    <Title level={2} className="heading">Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.total)}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Marketcap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="24 Hour Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Avalible Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className="home-heading-container">
        <Title level={2} className="home-title">Most Popular Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>

    <Cryptocurrencies simplified/>

    <div className="home-heading-container">
        <Title level={2} className="home-title">Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
    </div>

    <Information simplified />
    </>
  )
}

export default Homepage