import React from 'react';
import { formatNumber } from 'utils/helpers';
// STYlES
import './price.css';

function getPercentage(num, denom) {
    return Math.round(((denom - num) / denom) * 100)
}

function ProductPrice({ price, originalPrice }) {
    return (
        <div className="product-price">
            {
                originalPrice &&
                price !== originalPrice &&
                <>
                    <span className="product-price__prev">
                        <span> {formatNumber(originalPrice)} </span>
                        <span className="product-price__unit"> تومان </span>
                    </span>
                    <span className="product-price__discount"> {getPercentage(price, originalPrice)}% </span>
                </>
            }
            <div className="product-price__next">
                <span> {formatNumber(price)} </span>
                <span className="product-price__unit"> تومان </span>
            </div>
        </div>
    );
}

export default ProductPrice;
