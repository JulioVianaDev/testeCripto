import './App.css';
import {useState, useEffect} from 'react';
function App() {
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
    <div className="App">
      {coins.map((coin,index)=>{
        return(
          <div key={index} >
            <p>{coin.symbol}</p>
          </div>
        )
        })}
    </div>
  );
}

export default App;
