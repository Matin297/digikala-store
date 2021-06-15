import React from 'react';
// COMPONENTS
import ProductDetails from 'components/product/details';

const FAKE_PRODUCT = {
    id: 5960229,
    title: "ساک سفری گوگانا کد 200210",
    rating: {
        rate: 86,
        count: 2
    },
    status: "marketable",
    images: {
        main: "http://dkstatics-public.digikala.com/digikala-products/6c8e994747761dfcdba7aff25aad0f00de43e6ea_1619939432.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
    },
    price: {
        selling_price: 1250000,
        rrp_price: 3250000
    }
}

function ProductDetailsPage() {
    return (
        <div>
            <ProductDetails {...FAKE_PRODUCT} />
        </div>
    );
}

export default ProductDetailsPage;
