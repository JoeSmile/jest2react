import createReducer from '../reducers/createReducer'
import {ADD_TODO, GET_ASYNC_DATA} from '../constants'

const initialState = {
    list: [],
    text: '',
    asyncData: ''
}

export default createReducer(initialState, {
    [ADD_TODO](state, {text}) {
        let list = state.list.concat()
        list.push(text)
        return {...state, list: list}
    },
    [GET_ASYNC_DATA](state, {data}) {
        state.asyncData = data
        return {...state}
    }
})




