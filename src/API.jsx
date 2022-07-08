import {useState, useEffect} from 'react';

import React from 'react'
import Order from './components/Order';

export function API() {
  const [coins,setCoins] = useState([])
  useEffect(()=>{
    fetch('https://api.binance.com/api/v3/ticker/24hr')
    .then(response=>response.json())
    .then(data=>{
        setCoins(data.filter(moeda=> moeda.symbol.includes('BRL')));
      }).catch(err=>{
        console.log(err)
    })
  },[])
  return (
    <div>
      <Order coins={coins}/>
    </div>
  )
}
