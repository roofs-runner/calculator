import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

describe('App', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<App />)
  })

  it('renders Calculator component', () => {
    expect(component.exists()).toBe(true)
  })
})
