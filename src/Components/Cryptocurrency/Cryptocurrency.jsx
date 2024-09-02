import React from "react"
import { Row, Col, Skeleton } from 'antd';
import Link from "next/link";
import Cardcomponent from "../Card/Card";

const Cryptocurrency = ({coinsdata}) => {

  return (
    <div className="col-md-12 p-3">
        <h4 className="dash-heading">Cryptocurrency</h4>
        <Row gutter={[30,30]} className="crypto-card-container mt-5">
             {
              coinsdata ? coinsdata.map((coin, index)=>{
                    return(
                     <Col
                       md={6}
                       className="crypto-card"
                       key={coin.uuid}>
                        <Link href={`/cryptodetails/${coin.uuid}`} className="text-decoration-none">
                          <Cardcomponent coin={coin} getcoin/> 
                        </Link>
                     </Col>
                   )
                 }) : <Skeleton active  className="mx-3"/>
             }
             </Row>
    </div>
  )
};

export default Cryptocurrency;
