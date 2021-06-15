import React from 'react';
// COMPONENTS
import ProductCard from 'components/product/card';
// STYLES
import './home.css';

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
        }
    },
    {
        id: 5060227,
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
    },
    {
        id: 5060229,
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
    },
    {
        id: 5154519,
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
        }
    },
    {
        id: 5060297,
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
    },
    {
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
]

function HomePage() {
    return (
        <div className="home">
            <ul className="home__products">
                {
                    TEST_PRODUCTS.map(product => (
                        <li key={product.id} className="home__product">
                            <ProductCard {...product} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default HomePage;
