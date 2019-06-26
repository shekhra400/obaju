import { fromJS } from "immutable";
import { 
   USER_ACTION_LOGIN_REQUEST,
   USER_ACTION_LOGIN_ERROR,
   USER_ACTION_LOGIN_SUCCESS,
   USER_ACTION_REGISTER_REQUEST,
   USER_ACTION_REGISTER_SUCCESS,
   USER_ACTION_REGISTER_ERROR,
} from '../../common/constants/userConstants';

const initialState = fromJS({
      token:localStorage.getItem('token'),
      isAutherticated: false,
      isFetching:false,
      error: null,
 });

 export function loginReducer(state = initialState, {type, data , error}){
   let updatedState;
   switch (type) {
     case USER_ACTION_LOGIN_REQUEST:
         updatedState = state.set('isFetching', true).set('error', null);
      case USER_ACTION_LOGIN_SUCCESS:
         if(data){
            localStorage.setItem('token', data.token);
            updatedState = state.set('token', data.token).set('isFetching', false);
         }else{
            updatedState = state.set('isFetching',false);
         }
        break;
      case USER_ACTION_LOGIN_ERROR:
         localStorage.removeItem('token');
         updatedState = state.set('error',error)
         break;
     default:
         updatedState = state;
        break;
   }
    return updatedState;
 }