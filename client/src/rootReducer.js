// import { combineReducers } from "redux";
import { combineReducers } from 'redux-immutable';
// import { testSaga } from './components/home/testsaga';
import { loginReducer as login} from './components/home/loginReducer';

export default combineReducers({
    login
//   posts:postsReducer,
//   currentPost: currentPostsReducer
});