import React from 'react';
// COMPONENTS
import ProductCartCard from 'components/product/cart-card';
import CartResult from 'components/cart-page/result';
// STYLES
import './cart.css';

const TEST_PRODUCTS = [
    {
        id: 5154511,
        title: "کوله پشتی 50 لیتری گوگانا کد 30309",
        rating: {
            rate: 80,
            count: 0
        },
        status: "marketable",
        images: {
            main: "http://dkstatics-public.digikala.com/digikala-products/89b3060c2b29598a493ec3e5d51c25ece70569fb_1620822493.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
        },
        price: {
            selling_price: 1790000,
            rrp_price: 5490000
        },
        count: 2
    }
];

function CartPage() {
    return (
        <div className="cart">
            <ul className="cart__products">
                {
                    TEST_PRODUCTS.map(product => (
                        <li key={product.id} className="cart__product">
                            <ProductCartCard {...product} />
                        </li>
                    ))
                }
            </ul>
            <CartResult className="cart__result" />
        </div>
    );
}

export default CartPage;
