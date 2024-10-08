'use client'
import React, { useEffect, useState } from "react"
import millify from "millify";
import { Col, Row, Typography, Select } from 'antd';
import { Skeleton } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import Chart from '../Chart/Pricechart';
import { Spin } from 'antd';
import { chartDetails, cryptoDetails } from "@/src/actions";

const { Title, Text } = Typography;
const { Option } = Select;

const Cryptodetails = ({params}) => {
  const [timePeriod, setTimeperiod] = useState('7d');
  const [coindata, setCoindata] = useState({});
  const [chartdata, setChartdata] = useState({});
  const [loading, setLoading] = useState(false);
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      const {cryptodata} = await cryptoDetails(params, timePeriod);
      const {chartdata} = await chartDetails(params, timePeriod);
        
        setCoindata(cryptodata);
        setChartdata(chartdata);
        setLoading(false);
    }
    fetchData();
   
  }, [timePeriod])

  
  if(coindata?.status === 'success' && chartdata?.status === 'success') {

    const stats = [
      { title: 'Price to USD', value: `$ ${coindata?.data?.coin?.price && millify(coindata?.data?.coin?.price)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: coindata?.data?.coin?.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${coindata?.data?.coin['24hVolume'] && millify(coindata?.data?.coin['24hVolume'])}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${coindata?.data?.coin?.marketCap && millify(coindata?.data?.coin?.marketCap)}`, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high', value: `$ ${coindata?.data?.coin?.allTimeHigh?.price && millify(coindata?.data?.coin?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: coindata?.data?.coin?.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: coindata?.data?.coin?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Aprroved Supply', value: coindata?.data?.coin?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${coindata?.data?.coin?.supply?.total && millify(coindata?.data?.coin?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${coindata?.data?.coin?.supply?.circulating && millify(coindata?.data?.coin?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
    ];

  return (
    <div className="col-md-12 p-3">
      <div className="cryptodetails py-3 border-bottom">
          <div className="heading text-center">
              <Title level={2} className="coin-name text-primary">
                {coindata?.data?.coin?.name} ({coindata?.data?.coin?.symbol}) Price
              </Title>
              <p>{coindata?.data?.coin?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
          </div>
      </div>
      <div className="col-md-12 time my-3">
        <Select defaultValue="7d" className="select-timeperiod px-2" placeholder="Select Timeperiod" onChange={(value) => setTimeperiod(value)} style={{
            width: 100,
            borderRadius: 18,
        }}>
          {time.map((date) => <Option className="" key={date}>{date}</Option>)}
        </Select>
      </div>
      <div className="col-md-12 linechart">
        <Spin spinning={loading}>
          <Chart coinHistory={chartdata?.data?.history} currentPrice={millify(coindata?.data?.coin?.price)} coinName={coindata?.data?.coin?.name} priceChange={coindata?.data?.coin?.change}/>
        </Spin>
      </div>
      <Col className="stats-container mt-5">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={4} className="coin-details-heading">{coindata?.data?.coin?.name} Value Statistics</Title>
            <>An overview showing the statistics of {coindata?.data?.coin?.name}, such as the base and quote currency, the rank, and trading volume.</>
          </Col>
          {stats[4].value ? stats.map(({ icon, title, value }) => (
            <Col key={value} className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          )): 'Loading...'}
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={4} className="coin-details-heading">Other Stats Info</Title>
            <>An overview showing the statistics of {coindata?.data?.coin?.name}, such as the base and quote currency, the rank, and trading volume.</>
          </Col>
          {genericStats[4].value ? genericStats.map(({ icon, title, value }, index) => (
            <Col key={index} className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          )): 'Loading...'}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Col className="coin-desc">
          <Title level={3} className="coin-details-heading">What is {coindata?.data?.coin?.name}?</Title>
          {coindata?.data?.coin?.description}
        </Col>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">{coindata?.data?.coin?.name} Links</Title>
          {coindata?.data?.coin?.links.map((link) => (
            <Row className="coin-link" key={link?.name}>
              <Title level={5} className="link-name">{link?.type}</Title>
              <a href={link?.url} target="_blank" rel="noreferrer">{link?.name}</a>
            </Row>
          ))}
        </Col>
      </Col>
    </div>
  )
}else{
 return( 
      <div className="col-md-12 mt-5">
        <Skeleton active  className="mx-3"/>
        <Skeleton active  className="mx-3"/>
      </div>
  )
}
};

export default Cryptodetails;
