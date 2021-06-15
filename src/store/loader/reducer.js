import { TOGGLE_LOADER } from './types';

const initialState = {
    isOpen: false
};

const loaderReducer = (loader = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADER:
            return {
                ...loader,
                isOpen: !loader.isOpen
            }

        default:
            return loader;
    }
}

export default loaderReducer;
