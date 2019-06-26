// import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects';
import { userLoginSuccess, userLoginError } from './actions';
import ApiUtils from '../../common/utils/apiUtils';
import { STATUS_SUCCESS_200 } from '../../common/constants/commonConstants';
import { USER_ACTION_LOGIN_REQUEST } from '../../common/constants/userConstants';

export function* loginSaga(){
    yield takeLatest(USER_ACTION_LOGIN_REQUEST , loginSagaWatcher);
}

function* loginSagaWatcher(action){
    // try {
        //call - call(fn, ...args)
        const { payload } = action; 
    const { serviceStatus, errorMessages, data } = yield call(ApiUtils.post,'api/auth/login', payload);
    if(serviceStatus === STATUS_SUCCESS_200){
    // console.log('tanoy loginsaga 1',data);

        return yield put(userLoginSuccess(data));
    }
    return yield put(userLoginError(errorMessages));
    // console.log('tanoy loginsaga 1',errorMessages);
    // console.log('tanoy loginsaga 1',data);
        // console.log(data);
        // if(data){
        // return yield put(updateToken(data));
        // }
    // } catch (err) {
    //     console.log('tanoy loginsaga',err);
    //     // console.error(error.message);
    //     const response = (typeof err.body === 'object') ? err.body.response : err.body;
    //     // return yield put(orderDetailsLoadingError(response));
    // }
}