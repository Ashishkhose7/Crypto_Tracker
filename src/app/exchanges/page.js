import { exchangesData } from '@/src/actions'
import React from 'react'
import Exchangescomponent from '@/src/Components/Exchanges/Exchanges';
const Exchanges = async () => {
  const {exchangestats} = await exchangesData();
  return (
    <>
      {/* <head>
        <title>KRYPTo - Exchanges Details</title>
      </head> */}
    <Exchangescomponent exchangesdata={exchangestats}/>
    </>
  )
}

export default Exchanges
