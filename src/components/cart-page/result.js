import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
// COMPONENTS
import Price from '../product/price';
// STYLES
import './result.css';

function CartResult({ className, cart }) {
    return (
        <div className={clsx("cart-result", className && className)}>
            <div>
                <span> جمع کل کالاها </span>
                <Price price={cart.total_price} />
            </div>
            <div>
                <span> جمع سبد خرید </span>
                <Price price={cart.total_cart} />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartResult);
