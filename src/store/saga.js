import { all } from 'redux-saga/effects';
// Import the sagas
import productsSaga from './products/saga';

function* rootSaga() {
    yield all([
        productsSaga()
    ]);
}

export default rootSaga;
