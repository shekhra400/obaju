import { all } from 'redux-saga/effects';
// import { postsSaga,addPostSaga, getCurrentPost } from './sagas/commonSaga';
import { testSaga } from './components/home/testsaga';
// import watchers from other files
export default function* rootSaga() {
  yield all([
    testSaga(),
    // postsSaga(),
    // addPostSaga(),
    // getCurrentPost()
  ]);
}