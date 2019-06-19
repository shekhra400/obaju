const initialPostState = {};

 export function loginReducer(state = initialPostState,action){
   let updatedState;
   switch (action.type) {
     case 'updateToken':
        updatedState = Object.assign({}, state, { token:action.token });
        break;
     default:
        updatedState = state;
        break;
   }
    return updatedState;
 }