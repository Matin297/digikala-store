import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { increaseProduct } from 'store/cart/actions';
import { openModal } from 'store/modal/actions';
import { CART } from 'config/modal-body-types';
import imagePlaceholder from 'assets/images/image.png';
// COMPONENTS
import Button from '../ui/button';
import Rate from './rate';
import Price from './price';
import Image from './image';
// ICONS
import { ReactComponent as CartSvg } from 'assets/svgs/cart.svg';
// STYLES
import './card.css';

function ProductCard({ product, increaseProduct, openModal }) {

    const history = useHistory();

    const addToCartHandler = e => {
        e.stopPropagation();
        increaseProduct(product);
        openModal({ type: CART });
    }

    return (
        <div className="product-card" onClick={() => history.push(`/${product.id}`)}>
            <Rate rate={product.rating.rate} className="product-card__rate" />
            <div>
                <Image src={product.images.main} alt={product.title} />
            </div>
            <p> {product.title} </p>
            <div>
                {
                    product.status === "out_of_stock" ?
                        <span> -- ناموجود -- </span> :
                        <>
                            <Button onClick={addToCartHandler} startIcon={<CartSvg />} />
                            <Price price={product.price.selling_price} originalPrice={product.price.rrp_price} />
                        </>
                }
            </div>
        </div>
    );
}

const mapDispatchToProps = { increaseProduct, openModal };

export default connect(null, mapDispatchToProps)(ProductCard);
