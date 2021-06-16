import { INCREASE_PRODUCT, DECREASE_PRODUCT, REMOVE_PRODUCT } from './types';

const initialState = {
    total_price: 0,
    total_cart: 0,
    total_items: 0,
    products: []
};

function cartReducer(cart = initialState, action) {
    switch (action.type) {
        case INCREASE_PRODUCT: {
            const clonedProducts = cart.products.map(product => ({ ...product }));
            let product = clonedProducts.find(product => product.id === action.payload.id);

            if (product)
                product.qnt += 1;
            else
                clonedProducts.push({ ...action.payload, qnt: 1 });

            return {
                ...cart,
                products: clonedProducts,
                total_cart: cart.total_cart + action.payload.price.selling_price,
                total_price: cart.total_price + action.payload.price.rrp_price,
                total_items: cart.total_items + 1
            };
        }

        case DECREASE_PRODUCT:
            return {
                ...cart,
                products: cart.products.map(item => {
                    if (item.id === action.payload.id)
                        return {
                            ...item,
                            qnt: item.qnt > 1 ? item.qnt - 1 : 1
                        }
                    return item;
                }),
                total_cart: cart.total_cart - action.payload.price.selling_price,
                total_price: cart.total_price - action.payload.price.rrp_price,
                total_items: cart.total_items - 1 < 0 ? 0 : cart.total_items - 1
            };

        case REMOVE_PRODUCT:
            return {
                ...cart,
                products: cart.products.filter(item => item.id !== action.payload.id),
                total_cart: cart.total_cart - action.payload.price.selling_price * action.payload.qnt,
                total_price: cart.total_price - action.payload.price.rrp_price * action.payload.qnt,
                total_items: cart.total_items - action.payload.qnt
            }

        default:
            return cart;
    }
}

export default cartReducer;
