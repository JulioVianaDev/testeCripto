import { useSortableData } from './UseStortableDada';
import AccordionCoin from './AcordionCoin';
export const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.produtos.coins);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  console.log(props)
  return (
    <table table table-dark mt-4 table-hover>
      <thead>
        <tr>
          <th>
              #
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('symbol')}
              className={getClassNamesFor('symbol')}
            >
              Nome
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('lastPrice')}
              className={getClassNamesFor('lastPrice')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('priceChangePercent')}
              className={getClassNamesFor('priceChangePercent')}
            >
             24Hr
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
             Marketcap
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('')}
              className={getClassNamesFor('')}
            >
             Volume
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
 };
