import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'
import { Calculator } from './components/calculator/calculator'

describe('App', () => {
  let component: ShallowWrapper
  let calculator: ShallowWrapper

  beforeEach(() => {
    component = shallow(<App />)
    calculator = component.find(<Calculator />)
  })

  it('renders Calculator component', () => {
    expect(component.exists()).toBe(true)
  })
})
