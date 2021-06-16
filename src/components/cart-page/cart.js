import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
// COMPONENTS
import ProductCartCard from '../product/cart-card';
import CartResult from './result';
// IMAGES
import emptyCartImg from 'assets/images/empty-cart.png';
// STYLES
import './cart.css';

function Cart({ cart, withLink }) {
    return (
        <div className="cart">
            <ul className={clsx("cart__products", cart.products.length === 0 && "cart__products--empty")}>
                {
                    cart.products.length > 0 ?
                        cart.products.map(product => (
                            <li key={product.id} className="cart__product">
                                <ProductCartCard withLink={withLink} product={product} />
                            </li>
                        )) :
                        <div className="cart__products__empty">
                            <img src={emptyCartImg} alt="empty cart" />
                            <p> سبد خرید شما خالی میباشد </p>
                        </div>
                }
            </ul>
            <CartResult className="cart__result" />
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart);
