import React from 'react';
import { connect } from 'react-redux'
// COMPONENTS
import ProductCartCard from '../product/cart-card';
import CartResult from './result';
// STYLES
import './cart.css';

function CartPage({ cart, withLink }) {
    return (
        <div className="cart">
            <ul className="cart__products">
                {
                    cart.products.map(product => (
                        <li key={product.id} className="cart__product">
                            <ProductCartCard withLink={withLink} product={product} />
                        </li>
                    ))
                }
            </ul>
            <CartResult className="cart__result" />
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartPage);
