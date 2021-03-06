import React, { useState } from 'react';
import star from '../images/Line.png'
import './Accordion.css';
const AccordionCoin = ({ index,id ,last,symbol,price,porcentagem,mkt,volume,
                         openPrice,fechamento,valueVolume,largerPrice,lowPrice}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
    <div className={isActive ? "fundo-clicado containerGrid" : 'fundo-padrao containerGrid'} key={id} onClick={() => setIsActive(!isActive)}>
      <div className="text-muted "><img src={star} alt="" />     {index}</div>
      <div className='symbol letraEscura '>{symbol}</div>
      <div ><p className='letraEscura'>$ {price}</p></div>
      <div className={porcentagem > 0 ? "text-success" : "text-danger"}>{porcentagem} %</div>
      <div>{mkt}</div>  
      <div> {volume} </div>  
    </div>
      <div className="accordion-item">
        {/* <div className="accordion-title" >
          <div></div>
          {/* <div>{isActive ? '-' : '+'}</div> */}
        {/* </div> */} 
        {isActive && <div className='accordion'>
                        <div  id='linha-openprice'><p>Preço de abertura: </p></div> <div><p>{openPrice}</p></div>
                        <div><p>Maior Preço: </p></div> <div><p>{largerPrice}</p></div>
                        <div><p>Preço de fechamento: </p></div> <div><p>{fechamento}</p></div>
                        <div><p>Menor preço: </p></div> <div><p>{lowPrice}</p></div>
                        <div><p>Valor do volume: </p></div> <div><p>{valueVolume}</p></div>
                        <div><p>Volume: </p></div> <div><p>{volume}</p></div>
                      </div>
        }
      </div>
    </>
  );
};

export default AccordionCoin;