import React from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import Button from '../ui/button';
import Price from './price';
// ICONS
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/svgs/minus.svg';
import { ReactComponent as TrashIcon } from 'assets/svgs/trash.svg';
// STYLES
import './cart-card.css';

function ProductCartCard({ title, images, price, id }) {

    return (
        <div className="product-cart-card">
            <div>
                <Link to={`/${id}`}>
                    <img src={images.main} alt={title} />
                </Link>
            </div>
            <div>
                <p> {title} </p>
                <div className="product-cart-card__btns">
                    <Button variant="outlined" startIcon={<PlusIcon />} />
                    <span> 1 </span>
                    <Button color="secondry" variant="outlined" startIcon={<MinusIcon />} />
                    <Button color="secondry" variant="text" startIcon={<TrashIcon />} />
                    <Price price={price.selling_price} />
                </div>
            </div>
        </div >
    );
}

export default ProductCartCard;
