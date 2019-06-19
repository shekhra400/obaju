import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducer';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
var store = createStore(rootReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));
 sagaMiddleware.run(rootSaga);
export default store;