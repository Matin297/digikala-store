import { OPEN_LOADER, CLOSE_LOADER } from './types';

const initialState = {
    isOpen: false
};

const loaderReducer = (loader = initialState, action) => {
    switch (action.type) {
        case OPEN_LOADER:
            return {
                ...loader,
                isOpen: true
            }

        case CLOSE_LOADER:
            return {
                ...loader,
                isOpen: false
            }

        default:
            return loader;
    }
}

export default loaderReducer;
