import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Calculator } from './calculator'
import { act } from 'react-dom/test-utils'
import { useCalculatorState } from './use-calculator-state'

const INPUTS_STATE = {
  inputs: {
    valueA: true,
    valueB: true,
    valueC: false,
    valueD: '3.14',
    valueE: '23',
    valueF: '2',
  },
}

const mockInputChange = jest.fn()
jest.mock('./use-calculator-state', () => ({
  useCalculatorState: jest.fn(() => ({
    calculatorMode: {
      mode: 'base',
    },
    inputsState: {
      inputs: {
        valueA: false,
        valueB: false,
        valueC: false,
        valueD: '',
        valueE: '',
        valueF: '',
      },
    },
    handleInputsChange: mockInputChange,
    selectedCheckboxes: {
      size: '',
    },
  })),
}))

const mockCalculate = jest.fn()
jest.mock('../calculator-manager/use-calculate', () => ({
  useCalculate: () => mockCalculate,
}))

describe('Calculator', () => {
  let component: ShallowWrapper
  let radioButton: ShallowWrapper
  let button: ShallowWrapper

  afterAll(() => {
    jest.clearAllMocks()
  })

  describe('when mounted', () => {
    beforeEach(() => {
      renderComponent()
      radioButton = component.find('RadioButton')
    })

    it('renders page heading text', () => {
      expect(component.find('PageHeading').text()).toBe('Select calculation type')
    })

    it('sets radio button value to base', () => {
      expect(radioButton.at(0).prop('selectedValue')).toBe('base')
    })

    describe('when configuration of inputs is invalid', () => {
      beforeEach(() => {
        mockCalculate.mockReset()
        renderComponent()
        button = component.find('*[data-id="submit-button"]')
      })

      it('renders submit button in disabled state', () => {
        expect(component.find('Button').prop('disabled')).toBe(true)
      })
    })
  })

  describe('when mode is base and inputs have valid configuration', () => {
    beforeEach(() => {
      ;(useCalculatorState as jest.Mock).mockImplementationOnce(() => ({
        calculatorMode: {
          mode: 'base',
        },
        inputsState: INPUTS_STATE,
        selectedCheckboxes: {
          size: '',
        },
      }))
      renderComponent()
      findButton()
      clickOnButton()
      component.update()
    })

    it('calculates sum in the base mode', () => {
      expect(mockCalculate).toHaveBeenCalledWith('base', INPUTS_STATE.inputs)
    })
  })

  describe('when mode is changed to custom 1', () => {
    beforeEach(() => {
      ;(useCalculatorState as jest.Mock).mockImplementationOnce(() => ({
        calculatorMode: {
          mode: 'custom1',
        },
        inputsState: INPUTS_STATE,
        selectedCheckboxes: {
          size: '',
        },
      }))
      renderComponent()
      findButton()
      clickOnButton()
      component.update()
    })

    it('calculates sum in custom1 mode', () => {
      expect(mockCalculate).toHaveBeenCalledWith('custom1', INPUTS_STATE.inputs)
    })
  })

  describe('when input is changed', () => {
    beforeEach(() => {
      ;(useCalculatorState as jest.Mock).mockImplementationOnce(() => ({
        calculatorMode: {
          mode: 'base',
        },
        inputsState: INPUTS_STATE,
        handleInputsChange: mockInputChange,
        selectedCheckboxes: {
          size: '',
        },
      }))
      renderComponent()
      act(() => {
        ;(component.find('*[data-id="valueA"]').props() as any).onInputChange()
      })
      component.update()
    })

    it('calls checkbox onChange handler', () => {
      expect(mockInputChange).toHaveBeenCalled()
    })
  })

  function renderComponent() {
    component = shallow(<Calculator />)
  }

  function findButton() {
    button = component.find('*[data-id="submit-button"]')
  }

  function clickOnButton() {
    act(() => {
      button.simulate('click')
    })
  }
})
