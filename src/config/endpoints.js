const PRODUCTS = 'search/';
const PRODUCT = 'product/';

const endpoints = {
    products: {
        getAll: PRODUCTS,
        getOne: id => `${PRODUCT}/${id}/`
    }
};

export default endpoints;
