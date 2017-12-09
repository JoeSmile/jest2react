import React, {Component, PropTypes} from 'react'
import request from '../backend/api'

export class List extends Component {
    render() {
       const list = this.props.list.length ? this.props.list : ['empty']
       const ret = list.map((item,index) => {
                return <li key={index}>{item}</li>
            })

        return <ul>{ret}</ul>
    }
}

export default class AddTodoView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: this.props.num || 0,
            data: ''
        }
    }

    componentReceiveProps(nextProps) {
        console.log(nextProps)
    }

    handleClick = (e) => {
        if (e.keyCode === 13) {
            const node = e.target
            const text = node.value && node.value.trim()
            text && this.props.onAddClick(text)
            node.value = ''

        }
    }

    addOne = () => {
        //对比redux
        this.setState({
            num: ++this.state.num
        })
    }

    doGetData = () => {
        // 不用redux
        request().then(ret => {
            this.setState({
                data: ret
            })
        })
    }

    testAsyncRedux = () => {
        const {handleGetAsyncRedux} = this.props
        if (handleGetAsyncRedux) {
            handleGetAsyncRedux()
        }
    }

    render() {
        const {list,asyncData} = this.props
        return (
            <div>
                <List list={this.props.list}/>
                <div onClick={this.doGetData}>{ this.state.data || 'get async data'}</div>
                <div className="addone" onClick={this.addOne}>click me  {this.state.num}</div>
                <div>how many items {list.length}</div>
                <div onClick={this.testAsyncRedux}>{asyncData||'click me test Async Redux'}</div>
                <input
                    type="text"
                    placeholder='input todo item'
                    onKeyUp={this.handleClick}
                    ref={(inputRef) => this.inputRef = inputRef}/>
            </div>
        )
    }
}

AddTodoView.propTypes = {
    onAddClick: PropTypes.func.isRequired,
    handleGetAsyncRedux: PropTypes.func,
    list: PropTypes.array,
    num: PropTypes.number
}