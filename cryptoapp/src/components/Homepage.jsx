import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

// Importing our getter function from our api
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

// Being able to refer to title as "Title", instead of Typography.Title
const { Title } = Typography;


const Homepage = () => {
    // Calling our getter api function
    const { data, isFetching } = useGetCryptosQuery(10);
    // Printing our data
    // console.log(data);

    // Accessing the stats from our API 
    const globalStats = data?.data?.stats;
    console.log(globalStats?.totalExchanges);

    // console.log(isFetching);
    if (isFetching) return "Loading ...";

    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total Crypto Currencies" value={millify(globalStats.total)}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24Volume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Cryptocurrencues in the world</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>

        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>

        </div>
        <News simplified/>
        </>
    )
}

export default Homepage