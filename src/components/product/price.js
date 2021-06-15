import React from 'react';
import { formatNumber } from 'utils/helpers';
// STYlES
import './price.css';

function ProductPrice({ price }) {
    return (
        <div className="product-price">
            <p> {formatNumber(price)} </p>
            <span> تومان </span>
        </div>
    );
}

export default ProductPrice;
