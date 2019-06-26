
import { 
    USER_ACTION_LOGIN_REQUEST,
    USER_ACTION_LOGIN_ERROR,
    USER_ACTION_LOGIN_SUCCESS,
    USER_ACTION_REGISTER_REQUEST,
    USER_ACTION_REGISTER_SUCCESS,
    USER_ACTION_REGISTER_ERROR,
 } from '../../common/constants/userConstants';
export function loginAction(payload = { email: "abc@abc.coms", password:"abcde11"}){
    console.log(payload);
    return {
        type: USER_ACTION_LOGIN_REQUEST,
        payload
    };
}

export function userLoginSuccess(data){
    // console.log(data);
    return {
        type: USER_ACTION_LOGIN_SUCCESS,
        data,
    }
}

export function userLoginError(error){
    return {
        type: USER_ACTION_LOGIN_ERROR,
        error,
    }
}