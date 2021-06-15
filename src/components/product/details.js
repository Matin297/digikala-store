import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { increaseProduct } from 'store/cart/actions';
// COMPONENTS
import Rate from '../ui/rate';
import Price from './price';
import Button from '../ui/button';
// ICONS
import { ReactComponent as CartSvg } from 'assets/svgs/cart.svg';
// STYLES
import './details.css';

function ProductDetails({ product, increaseProduct }) {

    const history = useHistory();

    const onAddToCartHandler = () => {
        increaseProduct(product);
        history.push('/cart');
    }

    return (
        <div className="product-details">
            <div className="product-details__image">
                <img src={product.images?.main} alt={product.title} />
            </div>
            <div className="product-details__data">
                <h2> {product.title} </h2>
                <Rate rate={product.rating?.rate} />
                <div>
                    <Price price={product.price?.selling_price} />
                    <Button
                        variant="outlined"
                        startIcon={<CartSvg />}
                        onClick={onAddToCartHandler}
                    >
                        افزودن به سبد خرید
                    </Button>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = { increaseProduct };

export default connect(null, mapDispatchToProps)(ProductDetails);
