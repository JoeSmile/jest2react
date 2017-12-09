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
    return createAction(
        GET_ASYNC_DATA,
        async () => {
            const ret = await request()
            return ret
        }
    )
}


