import React, {Component} from 'react'

export default class LiftCircleComponent extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps:', nextProps)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }


    render() {
        console.log('render')
        return (
            <div>
                {'hello ' + (this.props.greeting || 'world')}
            </div>
        )
    }
}