import React from 'react';
import { ProductTable } from './ProductTable';

export default function Order(props) {
  return (
    <div className="App">
      <ProductTable
        produtos={props}
      />
    </div>
  );
}
