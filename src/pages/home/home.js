import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'store/products/actions';
// COMPONENTS
import ProductCard from 'components/product/card';
import Pagination from 'components/ui/pagination';
// STYLES
import './home.css';

function HomePage({ fetchProducts, products }) {

    function onChangePageHandler(page) {
        fetchProducts({ page });
    }

    useEffect(() => {
        if (products.params.page === 1)
            fetchProducts({ page: 1 });

        window.scrollTo(0, 0);
    }, [fetchProducts, products.params.page]);

    return (
        <div className="home">
            <ul className="home__products">
                {
                    products.data.map(product => (
                        <li key={product.id} className="home__product">
                            <ProductCard {...product} />
                        </li>
                    ))
                }
            </ul>
            {
                !!products.params.total_pages &&
                <Pagination
                    currentPage={products.params.page}
                    onChangePageHandler={onChangePageHandler}
                    numOfPages={products.params.total_pages}
                />
            }
        </div>
    );
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = {
    fetchProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
