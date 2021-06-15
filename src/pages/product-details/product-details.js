import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProduct, resetProduct } from 'store/products/actions';
// COMPONENTS
import ProductDetails from 'components/product/details';

function ProductDetailsPage({ fetchProduct, resetProduct, product }) {

    const { productId } = useParams();

    useEffect(() => {
        if (productId)
            fetchProduct(productId);
        return () => resetProduct();
    }, [productId, fetchProduct, resetProduct]);

    return (
        <div>
            <ProductDetails {...product} />
        </div>
    );
}

const mapStateToProps = state => ({
    product: state.products.product
});

const mapDispatchToProps = { fetchProduct, resetProduct }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);
