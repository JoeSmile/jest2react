import React from 'react'
import { shallow, mount } from 'enzyme'

import {AddTodoView, List} from './AddTodoView'
import * as actions from  '../actions'
import * as types from '../constants'

jest.mock('../backend/api')
const setup = () => {
    const props = {
        list: [1,2,3,4,5,6],
        onAddClick: jest.fn(),
        onAddOne: jest.fn(),
        num: 100
    }

    const wrapper = mount(<AddTodoView {...props}/>)
    return {
        props,
        wrapper
    }
}


describe('addtodoview', () => {
    const { wrapper, props } = setup()

    it('12313', () => {
        expect(wrapper.find('input').exists())
    })


    it('when the enter key was pressed, onAddClick should be called', () => {
        const mockEvent = {
            keyCode: 13,
            target: {
                value: 'Test'
            }
        }

        wrapper.find('input').simulate('keyup',mockEvent)
        expect(props.onAddClick).toBeCalled()
    })


    it('AddToView contains List component or not', () => {
        expect(wrapper.prop('list')).toMatchObject([1,2,3,4,5,6])
        expect(wrapper.prop('list')).toEqual([1,2,3,4,5,6])
        expect(wrapper.find(List).children().length).toBe(6)
        expect(wrapper.find(List).children()).toHaveLength(6)
    })


    it('AddOne test', () => {
        const num = wrapper.find('.addone').simulate('click')
        expect(wrapper.state('num')).toBe(100)
    })

    it('.one equal test', () => {
        const one = wrapper.find('.one')
        expect(one.containsMatchingElement(<div className="one"></div>)).toBe(true)
    })

})


