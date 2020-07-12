import { renderHook, cleanup, RenderHookResult } from '@testing-library/react-hooks'
import { useCalculate } from './use-calculate'
import { paramsMock } from '../__mocks__/calculator'

jest.mock('./base-calculator', () => ({
  BaseCalculator: jest.fn(() => ({
    calculateSum: () => 10,
  })),
  CustomCalculatorTwo: jest.fn(() => ({
    calculateSum: () => 1000,
  })),
}))

jest.mock('./custom-calculator-one', () => ({
  CustomCalculatorOne: jest.fn(() => ({
    calculateSum: () => 100,
  })),
  CustomCalculatorTwo: jest.fn(() => ({
    calculateSum: () => 1000,
  })),
}))

jest.mock('./custom-calculator-two', () => ({
  CustomCalculatorTwo: jest.fn(() => ({
    calculateSum: () => 1000,
  })),
}))

describe('useCalculate', () => {
  let hook: RenderHookResult<any, any>

  beforeEach(() => {
    hook = renderHook(() => useCalculate())
    // console.log('hook.result.current', hook.result.current('base', paramsMock));
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  describe('hook', () => {
    describe('when calculation mode is base', () => {
      let baseCalculator: any

      beforeEach(() => {
        baseCalculator = hook.result.current('base', paramsMock)
      })

      it('calculates sum using base class', () => {
        expect(baseCalculator).toEqual(10)
      })
    })

    describe('when calculation mode is custom1', () => {
      let customCalculator1: any

      beforeEach(() => {
        customCalculator1 = hook.result.current('custom1', paramsMock)
      })

      it('calculates sum using custom class 1', () => {
        expect(customCalculator1).toEqual(100)
      })
    })

    describe('when calculation mode is custom2', () => {
      let customCalculator2: any

      beforeEach(() => {
        customCalculator2 = hook.result.current('custom2', paramsMock)
      })

      it('calculates sum using custom class 1', () => {
        expect(customCalculator2).toEqual(1000)
      })
    })

    describe('when calculation mode is unknown', () => {
      let customCalculator3: any

      beforeEach(() => {
        customCalculator3 = hook.result.current('custom3', paramsMock)
      })

      it('calculates nothing', () => {
        expect(customCalculator3).toBe(null)
      })
    })
  })
})
