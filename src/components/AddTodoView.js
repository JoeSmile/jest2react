import React, {Component, PropTypes} from 'react'
export class List extends Component {
    render() {
       const list = this.props.list.length ? this.props.list : ['empty']
       const ret = list.map((item,index) => {
                return <li key={index}>{item}</li>
            })

        return <ul>{ret}</ul>
    }
}

export class AddTodoView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            num: this.props.num || 0
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
        this.setState({
            num: this.state.num ++
        })
    }

    doGetData = () => {

    }

    render() {
        return (
            <div>
                <List list={this.props.list}/>
                <div className="one"></div>
                <div className="addone" onClick={this.addOne}>{this.state.num}</div>
                <div className="getData" onClick={this.doGetData}>getData</div>
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
    list: PropTypes.array,
    num: PropTypes.number
}