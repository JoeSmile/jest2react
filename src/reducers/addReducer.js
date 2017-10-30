import createReducer from '../reducers/createReducer'
import {ADD_TODO} from '../constants'

const initialState = {
    list: [],
    text: ''
}

export default createReducer(initialState, {
    [ADD_TODO](state, {text}) {
        let list = state.list.concat()
        list.push(text)
        return {...state, list: list}
    }
})




