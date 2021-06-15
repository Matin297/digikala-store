import React from 'react';
import { useHistory } from 'react-router-dom';
// COMPONENTS
import Button from '../ui/button';
import Rate from '../ui/rate';
import Price from './price';
// ICONS
import { ReactComponent as CartSvg } from 'assets/svgs/cart.svg';
// STYLES
import './card.css';

function ProductCard({ title, images, price, id, rating }) {

    const history = useHistory();

    const addToCartHandler = e => {
        e.stopPropagation();
        console.log('added to cart');
    }

    return (
        <div className="product-card" onClick={() => history.push(`/${id}`)}>
            <Rate rate={rating.rate} className="product-card__rate" />
            <div>
                <img src={images.main} alt={title} />
            </div>
            <p> {title} </p>
            <div>
                <Button onClick={addToCartHandler} startIcon={<CartSvg />} />
                <Price price={price.selling_price} />
            </div>
        </div>
    );
}

export default ProductCard;
