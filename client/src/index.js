import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import store from './store';
import { Provider } from 'react-redux';


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducer';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
var store = createStore(rootReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));
 sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

