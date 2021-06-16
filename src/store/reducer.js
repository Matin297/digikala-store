import { combineReducers } from 'redux';

import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

import loaderReducer from './loader/reducer';
import modalReducer from './modal/reducer';
import snackbarReducer from './snackbar/reducer';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    loader: loaderReducer,
    modal: modalReducer,
    snackbar: snackbarReducer
});
