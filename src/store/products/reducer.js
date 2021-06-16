import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_FAIL,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT,
    FETCH_PRODUCT_FAIL,
    FETCH_PRODUCT_SUCCESS,
    RESET_PRODUCT,
    SET_FILTER
} from './types';

const initialState = {
    data: [],
    loading: false,
    product: {},
    errors: {},
    params: {
        page: 1
    },
    total_pages: 0,
    price_options: {
        min: 0,
        max: 0
    }
};

function productsReducer(products = initialState, action) {
    switch (action.type) {

        case FETCH_PRODUCT:
        case FETCH_PRODUCTS:
            return {
                ...products,
                loading: true
            };

        case FETCH_PRODUCTS_FAIL:
        case FETCH_PRODUCT_FAIL:
            return {
                ...products,
                loading: false
            };

        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...products,
                data: action.payload.products,
                total_pages: action.payload.pager.total_pages,
                price_options: action.payload.filters.price?.options || { min: 0, max: 0 },
                loading: false,
            };

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...products,
                loading: false,
                product: action.payload
            };

        case RESET_PRODUCT:
            return {
                ...products,
                product: {}
            };

        case SET_FILTER: {
            return {
                ...products,
                params: {
                    ...products.params,
                    ...action.payload
                }
            }
        }

        default:
            return products;
    }
}

export default productsReducer;
