import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'store/products/actions';
// COMPONENTS
import ProductCard from 'components/product/card';
import Pagination from 'components/ui/pagination';
import ProductsFilters from 'components/home-page/filters';
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
            <div>
                <ProductsFilters
                    requestFilter={fetchProducts}
                    price={products.price_options}
                    params={products.params}
                />
            </div>
            <div>
                <ul className="home__products">
                    {
                        products.data.length ?
                            products.data.map(product => (
                                <li key={product.id} className="home__product">
                                    <ProductCard product={product} />
                                </li>
                            )) :
                            <p> محصولی یافت نشد... </p>
                    }
                </ul>
                {
                    !!products.total_pages &&
                    <Pagination
                        currentPage={products.params.page}
                        onChangePageHandler={onChangePageHandler}
                        numOfPages={products.total_pages}
                    />
                }
            </div>
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
