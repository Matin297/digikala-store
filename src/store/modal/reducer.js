import { OPEN_MODAL, CLOSE_MODAL } from './types';

const initialState = { isOpen: false, data: {} };

const modalReducer = (modal = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...modal,
                isOpen: true,
                data: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...modal,
                isOpen: false,
                data: {}
            }
        default:
            return modal;
    }
}

export default modalReducer;
