import React from 'react'
import CryptocurrencyComponent from '@/src/Components/Cryptocurrency/Cryptocurrency';
import { coinsData } from '@/src/actions';

const Cryptocurrency = async() => {
  const {coinsstats} = await coinsData();
  
  return (
    <>
      {/* <head>
        <title>KRYPTo - Currencies</title>
      </head> */}
    <CryptocurrencyComponent coinsdata={coinsstats?.data?.coins}/>
    </>
  )
}

export default Cryptocurrency
