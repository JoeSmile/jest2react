import {ADD_TODO, GET_ASYNC_DATA} from '../constants'
import { createAction } from 'redux-actions'
import request from '../backend/api'

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function getAsyncData() {
    return function (dispatch, getState) {
        request().then(ret => {
            dispatch({
                type: GET_ASYNC_DATA,
                ret
            })
        })
    }
}


