import { combineReducers } from "redux";
// import { testSaga } from './components/home/testsaga';
import { loginReducer as login} from './components/home/loginReducer';

export default combineReducers({
    login
//   posts:postsReducer,
//   currentPost: currentPostsReducer
});