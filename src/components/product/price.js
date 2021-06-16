import React from 'react';
import { formatNumber } from 'utils/helpers';
// STYlES
import './price.css';

function getPercentage(num, denom) {
    return Math.round(((denom - num) / denom) * 100)
}

function ProductPrice({ price = 0, originalPrice = 0 }) {
    return (
        <div className="product-price">
            {
                !!originalPrice &&
                price !== originalPrice &&
                <>
                    <span className="product-price__prev">
                        <span> {formatNumber(originalPrice / 10)} </span>
                        <span className="product-price__unit"> تومان </span>
                    </span>
                    <span className="product-price__discount"> {getPercentage(price, originalPrice)}% </span>
                </>
            }
            <div className="product-price__next">
                <span> {formatNumber(price / 10)} </span>
                <span className="product-price__unit"> تومان </span>
            </div>
        </div>
    );
}

export default ProductPrice;
