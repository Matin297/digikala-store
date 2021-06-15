import { OPEN_LOADER, CLOSE_LOADER } from './types';

export const openLoader = () => ({ type: OPEN_LOADER });
export const closeLoader = () => ({ type: CLOSE_LOADER });