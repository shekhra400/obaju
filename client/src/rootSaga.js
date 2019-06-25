import { all } from 'redux-saga/effects';
// import { postsSaga,addPostSaga, getCurrentPost } from './sagas/commonSaga';
import { loginSaga } from './components/home/loginsaga';
// import watchers from other files
export default function* rootSaga() {
  yield all([
    loginSaga(),
    // postsSaga(),
    // addPostSaga(),
    // getCurrentPost()
  ]);
}