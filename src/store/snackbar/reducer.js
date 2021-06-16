import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './types';

const initialState = { isOpen: false, payload: { message: '', status: '' } };

const snackbarReducer = (snackbar = initialState, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                ...snackbar,
                isOpen: true,
                payload: action.payload
            }

        case CLOSE_SNACKBAR:
            return {
                ...snackbar,
                isOpen: false,
                status: ''
            }

        default:
            return snackbar;
    }
}

export default snackbarReducer;