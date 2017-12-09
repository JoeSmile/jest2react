import {connect} from 'react-redux'

import AddTooView from '../components/AddTodoView'

import {addTodo, getAsyncData} from '../actions'

const mapState2Props = (state) => {
    return {
        ...state.add
    }
}

const mapDispatch2Props = (dispatch) => {
    return {
        onAddClick: (text) => {
            dispatch(addTodo(text))
        },
        handleGetAsyncRedux: () => {
            //dispatch one promist
            dispatch(getAsyncData())
        }
    }
}


export default connect(
    mapState2Props,
    mapDispatch2Props
)(AddTooView)