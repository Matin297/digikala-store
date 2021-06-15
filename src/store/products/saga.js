import { takeLatest, put, all, call } from 'redux-saga/effects';
import endpoints from 'config/endpoints';
import request from 'config/request';
import { fetchProductsFail, setFilters, fetchProductsSuccess, fetchProductFail, fetchProductSuccess } from './actions';
import { openLoader, closeLoader } from '../loader/actions';
import { FETCH_PRODUCTS, FETCH_PRODUCT } from './types';

// GET ALL
function* fetchProducts(action) {
    try {

        yield put(openLoader());

        const res = yield call(
            request,
            'get',
            endpoints.products.getAll,
            {
                ...action.payload,
                rows: 25
            }
        );

        yield put(closeLoader());

        if (res.status === 200) {
            yield put(fetchProductsSuccess(res.data.data));
            yield put(setFilters({
                ...action.payload,
                total_pages: res.data.data.pager.total_pages
            }));
        } else
            yield put(fetchProductsFail());

    } catch (e) {
        yield put(closeLoader());
        yield put(fetchProductsFail());
    }

}

function* fetchProductsWatcher() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

// GET ALL
function* fetchProduct(action) {
    try {

        yield put(openLoader());

        const res = yield call(
            request,
            'get',
            endpoints.products.getOne(action.payload)
        );

        yield put(closeLoader());

        if (res.status === 200)
            yield put(fetchProductSuccess(res.data.data.product));
        else
            yield put(fetchProductFail());

    } catch (e) {
        yield put(closeLoader());
        yield put(fetchProductFail());
    }

}

function* fetchProductWatcher() {
    yield takeLatest(FETCH_PRODUCT, fetchProduct);
}

export default function* productsSaga() {
    yield all([
        fetchProductsWatcher(),
        fetchProductWatcher()
    ]);
}
