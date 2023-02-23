
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
    <Row className="global-stats-container">
      <Col className="global-stats-total" span={12}><Statistic  className="stats-value" value={millify(globalStats.total)}/>Total Cryptocurrencies</Col>
      <Col className="global-stats-total" span={12}><Statistic  className="stats-value" value={millify(globalStats.totalExchanges)}/>Total Exchanges</Col>
      <Col className="global-stats-total" span={12}><Statistic className="stats-value"  value={millify(globalStats.totalMarketCap)}/>Total Marketcap</Col>
      <Col className="global-stats-total" span={12}><Statistic className="stats-value"  value={millify(globalStats.total24hVolume)}/>24 Hour Volume</Col>
      <Col className="global-stats-total" span={12}><Statistic className="stats-value"  value={millify(globalStats.totalMarkets)}/>Total Avalible Markets</Col>
    </Row>
    <div className="home-heading-container">
        <Title level={2} className="home-title heading">Most Popular Cryptocurrencies in the world</Title>

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