import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import {Router, Route, hashHistory} from 'react-router'
import reducers from './reducers/index'
import App from './components/app'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const logger = createLogger()

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, promiseMiddleware,logger))
)


//非按需加载
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)

