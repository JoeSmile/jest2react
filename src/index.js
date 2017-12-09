import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise'
import {Router, Route, hashHistory} from 'react-router'
import reducers from './reducers/index'
import App from './components/app'

const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/(:filter)' component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;
