import { useSortableData } from './UseStortableDada';
import AccordionCoin from './AccordionCoin';
import { useEffect } from 'react';
import './ProductTable.css';
export const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.produtos.coins);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  console.log(props)
  useEffect(() =>{
    requestSort('symbol')
  },[])
  return (
    <div table table-dark mt-4 table-hover>
      <div className='containerGrid topo'>
          <div className='id'>
              #
          </div>
          <div className='textAlignLeft '>
            <button
              type="button"
              onClick={() => requestSort('symbol')}
              className={getClassNamesFor('symbol')}
            >
              Nome
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => requestSort('lastPrice')}
              className={getClassNamesFor('lastPrice')}
            >
              Price
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => requestSort('priceChangePercent')}
              className={getClassNamesFor('priceChangePercent')}
            >
             24Hr
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
             Marketcap
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => requestSort('volume')}
              className={getClassNamesFor('volume')}
            >
             Volume
            </button>
          </div>
      </div>
      <div>
        {items.map((item,index) => (
          <>
            <AccordionCoin  id={item.id} 
                            price={item.lastPrice}
                            symbol={item.symbol} 
                            porcentagem={item.priceChangePercent} 
                            mkt= {item.lastPrice * item.volume}
                            volume={item.volume}
                            last={item.lastPrice}
                            openPrice={item.openPrice}
                            fechamento={item.lastPrice}
                            valueVolume={item.quoteVolume}	
                            largerPrice={item.highPrice}
                            lowPrice={item.lowPrice}
                            index={index}
            />
           
          </>
        ))}
      </div>
    </div>
    
  );
 };
