import { fromJS } from "immutable";
import { 
   USER_ACTION_LOGIN,
   USER_ACTION_LOGIN_ERROR,
   USER_ACTION_LOGIN_SUCCESS,
   USER_ACTION_REGISTER,
   USER_ACTION_REGISTER_SUCCESS,
   USER_ACTION_REGISTER_ERROR,
} from '../../common/constants/userConstants';
const initialState = fromJS({
      token:localStorage.getItem('token'),
      isAutherticated: false,
      isFetching:false,
      error: null,
 });
 export function loginReducer(state = initialState, action){
    console.log(action);
   let updatedState;
   switch (action.type) {
     case 'updateToken':
         localStorage.setItem('token', action.token);
      //   updatedState = Object.assign({}, state, { token:action.token });
      updatedState = state.setIn(["token"], action.data.token);
        break;
     default:
         updatedState = state;
        break;
   }
    return updatedState;
 }