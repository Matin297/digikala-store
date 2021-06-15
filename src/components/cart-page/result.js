import React from 'react';
import clsx from 'clsx'
// COMPONENTS
import Price from '../product/price';
// STYLES
import './result.css';

function CartResult({ className }) {
    return (
        <div className={clsx("cart-result", className && className)}>
            <div>
                <span> جمع کل کالاها </span>
                <Price price={1200000} />
            </div>
            <div>
                <span> جمع سبد خرید </span>
                <Price price={1200000} />
            </div>
        </div>
    );
}

export default CartResult;
