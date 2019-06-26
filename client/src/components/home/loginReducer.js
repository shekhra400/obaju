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
      // token:null,
      isAuthenticated: false,
      isFetching:false,
      error: null,
 });

 export function loginReducer(state = initialState, {type, data , error}){
   let updatedState;
   switch (type) {
     case USER_ACTION_LOGIN_REQUEST:
         updatedState = state.set('error', null).set('isFetching', true);
         break;
      case USER_ACTION_LOGIN_SUCCESS:
      console.log(data);
         if(data){
            localStorage.setItem('token', data.token);
            updatedState = state.set('token', data.token).set('isFetching', false).set('isAuthenticated',true);
         }else{
            updatedState = state.set('isFetching',false);
         }
        break;
      case USER_ACTION_LOGIN_ERROR:
         localStorage.removeItem('token');
         updatedState = state.set('error',error).set('token',null).set('isFetching', false).set('isAuthenticated',false);
         break;
     default:
         updatedState = state;
        break;
   }
    return updatedState;
 }