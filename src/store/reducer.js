import { combineReducers } from 'redux';
// Import the reducers
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer
});