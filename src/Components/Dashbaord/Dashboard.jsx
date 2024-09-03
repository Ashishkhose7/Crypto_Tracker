'use client'
import React from 'react'
import { Typography, Row, Col, Statistic, Skeleton } from 'antd';
import millify from 'millify';
import Cardcomponent from '../Card/Card';
import Link from 'next/link';
const { Title } = Typography;

const Dashboard = ({globaldata, coinsdata, newsdata, imgurls}) => {
    
  return (
    <div className="col-md-12 p-3">
    <div className="row global-stats">
      {
        globaldata?.totalMarkets ? <Title level={3} className="heading"><span className="dash-heading">Global Crypto Stats</span></Title> : 'Global Crypto Stats'
      }
    
      {
        globaldata?.totalMarkets ?
            <Row gutter={[30, 30]} className="my-3">
              <Col span={6}>
                <div className="outline-div"><Statistic title="Total Cryptocurrencies" value={globaldata?.totalCoins || 0} valueStyle={{color: 'darkslateblue'}}/></div>
              </Col>
              <Col span={6}>
                <div className="outline-div">
                  <Statistic title="Total Exchanges" value={globaldata?.totalExchanges || 0} valueStyle={{color: 'darkslateblue'}}/>
                </div>
              
              </Col>
              <Col span={6}>
                <div className="outline-div">
                  <Statistic title="Total Market Cap:" value={`$${millify(globaldata?.totalMarketCap)}`} valueStyle={{color: 'darkslateblue'}}/>
                </div>
              
              </Col>
              <Col span={6}>
                <div className="outline-div">
                  <Statistic title="Total 24h Volume" value={`$${millify(globaldata?.total24hVolume)}`} valueStyle={{color: 'darkslateblue'}}/>
                </div>
              
              </Col>
              <Col span={6}>
                <div className="outline-div">
                  <Statistic title="Total Markets" value={`${millify(globaldata?.totalMarkets)}`} valueStyle={{color: 'darkslateblue'}}/>
                </div>
              
              </Col>
            </Row>
         :  <Skeleton active />
      }     
    </div> 
     
    <div className="row top-crypto mt-5">
          {
            coinsdata ? <div className="home-heading-container">
            <Title level={3} className="heading"><span className="dash-heading">Top 10 Cryptos In The World</span></Title>
            <Title level={5} className="show-more mr-5"><Link href="/cryptocurrencies">Show more</Link></Title>

         </div> : 'Top 10 Cryptos In The World'
          }
          <Row gutter={[30,30]} className="crypto-card-container my-2">
           {
            coinsdata ? coinsdata.map((coin, index)=>{      
                if(index === 10) return
                  return(
                   <Col
                     md={6}
                     className="crypto-card"
                     key={coin.uuid}>
                      <Link href={`/cryptodetails/${coin.uuid}`} className='text-decoration-none'>
                        <Cardcomponent coin={coin} getcoin/> 
                      </Link>
                   </Col>
                 )
               }) : <Skeleton active  className="mx-3"/>
           }
           </Row>
    </div>
   
    <div className="row latest-news mt-5">
          {
            newsdata ? <div className="home-heading-container">
               <Title level={3} className="heading"><span className="dash-heading">Latest Market News</span></Title>
               <Title level={5} className="show-more mr-5"><Link href="/news">Show more</Link></Title>

            </div> : 'Latest Crypto News'
          }
          <Row gutter={[30,30]} className="crypto-card-container my-2">
           {
            newsdata ? newsdata.map((newsd, topindex)=>{
                  return(
                        <Col
                          xs={24} sm={12} lg={8}
                            className="crypto-card"
                            key={topindex}>
                              <Cardcomponent news={newsd}  imgurl={imgurls.length>20 ? imgurls[topindex] :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s'} getnews/> 
                        </Col>
                      )
               }) : <Skeleton active  className="mx-3"/>
           }
           </Row>
    </div>
  </div>
  )
}

export default Dashboard
