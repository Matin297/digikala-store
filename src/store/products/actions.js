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

// GET ALL
export const fetchProducts = payload => ({ type: FETCH_PRODUCTS, payload });
export const fetchProductsFail = payload => ({ type: FETCH_PRODUCTS_FAIL, payload });
export const fetchProductsSuccess = payload => ({ type: FETCH_PRODUCTS_SUCCESS, payload });

// GET ONE
export const fetchProduct = payload => ({ type: FETCH_PRODUCT, payload });
export const fetchProductFail = payload => ({ type: FETCH_PRODUCT_FAIL, payload });
export const fetchProductSuccess = payload => ({ type: FETCH_PRODUCT_SUCCESS, payload });

// FILTERS
export const setFilters = payload => ({ type: SET_FILTER, payload });

// RESET
export const resetProduct = () => ({ type: RESET_PRODUCT });
