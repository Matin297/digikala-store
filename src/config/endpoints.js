const PRODUCTS = '/store/about-us';
const PRODUCT = '/store/appearance-manager';

const endpoints = {
    products: {
        getAll: PRODUCTS,
        getOne: id => `${PRODUCT}/${id}`
    }
};

export default endpoints;
