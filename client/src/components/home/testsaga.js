import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects';
import { updateToken } from './actions';

export function* testSaga(){
    yield takeLatest('testAction', testSagaWatcher);
}

function* testSagaWatcher(action){
    try {
        //call - call(fn, ...args)
    const { data } = yield call(axios.post,'api/auth/login', action.payload);
        console.log(data);
        if(data){
        return yield put(updateToken(data));
        }
    } catch (error) {
        console.error(error.message);
    }
}