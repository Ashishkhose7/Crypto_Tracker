import Cryptodetails from '@/src/Components/CryptoDetails/Cryptodetails';
import React from 'react'

const CryptoDetails = ({params}) => {
    
  return (
    <>
      <head>
        <title>KRYPTo - Coin chart</title>
      </head>
    <Cryptodetails params={params}/>
    </>
  )
}

export default CryptoDetails
