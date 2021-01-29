import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import slice from './FormSlice';
import mySaga from './saga';
import {all} from 'redux-saga/effects'

export default function configureStore() {
    const mw = createSagaMiddleware();
    //run et lui ajouter des saga
    const store = createStore(slice, applyMiddleware(mw));
    mw.run(rootSaga);
    return store;
}

function* rootSaga() {
    yield all([mySaga()]);
}