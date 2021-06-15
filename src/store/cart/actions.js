import { INCREASE_PRODUCT, DECREASE_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT_TO_CART } from './types';

export const addProductToCart = payload => ({ type: ADD_PRODUCT_TO_CART, payload });
export const increaseProduct = payload => ({ type: INCREASE_PRODUCT, payload });
export const decreaseProduct = payload => ({ type: DECREASE_PRODUCT, payload });
export const removeProduct = payload => ({ type: REMOVE_PRODUCT, payload });