import React, {Component, PropTypes} from 'react'

export default class AddTodoView extends Component {

    constructor(props) {
        super(props)
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

    renderList = () => {
        return this.props.list.map((item) => {
            return <li>{item}</li>
        })
    }

    render() {
        const list = this.renderList()
        return (
            <div>
                {
                    list
                }
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
    onAddClick: PropTypes.func.isRequired
}