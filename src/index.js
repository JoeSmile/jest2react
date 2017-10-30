import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'todomvc-app-css/index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import reducers from './reducers/index'
import App from './components/app'

const store = createStore(
    reducers,
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
