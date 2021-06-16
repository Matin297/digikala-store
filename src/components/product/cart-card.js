import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increaseProduct, decreaseProduct, removeProduct } from 'store/cart/actions';
// COMPONENTS
import Button from '../ui/button';
import Price from './price';
// ICONS
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/svgs/minus.svg';
import { ReactComponent as TrashIcon } from 'assets/svgs/trash.svg';
// STYLES
import './cart-card.css';

function ProductCartCard({ product, increaseProduct, decreaseProduct, removeProduct, withLink }) {
    return (
        <div className="product-cart-card">
            <div>
                {
                    withLink ?
                        <Link to={`/${product.id}`}>
                            <img src={product.images.main} alt={product.title} />
                        </Link> :
                        <img src={product.images.main} alt={product.title} />
                }
            </div>
            <div>
                <p> {product.title} </p>
                <div className="product-cart-card__btns">
                    <Button
                        variant="outlined"
                        startIcon={<PlusIcon />}
                        onClick={() => increaseProduct(product)}
                    />
                    <span> {product.qnt} </span>
                    <Button
                        color="secondry"
                        variant="outlined"
                        startIcon={<MinusIcon />}
                        disabled={product.qnt === 1}
                        onClick={() => decreaseProduct(product)}
                    />
                    <Button
                        color="secondry"
                        variant="text"
                        startIcon={<TrashIcon />}
                        onClick={() => removeProduct(product)}
                    />
                    <Price price={product.price.selling_price} />
                </div>
            </div>
        </div >
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = {
    increaseProduct,
    decreaseProduct,
    removeProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCartCard);
