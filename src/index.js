import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    todoApp,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
