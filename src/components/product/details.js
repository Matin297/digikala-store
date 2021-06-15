import React from 'react';
// COMPONENTS
import Rate from '../ui/rate';
import Price from './price';
import Button from '../ui/button';
// ICONS
import { ReactComponent as CartSvg } from 'assets/svgs/cart.svg';
// STYLES
import './details.css';

function ProductDetails({ title, images, price, id, rating }) {
    return (
        <div className="product-details">
            <div className="product-details__image">
                <img src={images?.main} alt={title} />
            </div>
            <div className="product-details__data">
                <h2> {title} </h2>
                <Rate rate={rating?.rate} />
                <div>
                    <Price price={price?.selling_price} />
                    <Button variant="outlined" startIcon={<CartSvg />}> افزودن به سبد خرید </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
