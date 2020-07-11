import { CustomCalculatorTwo } from './custom-calculator-two'
import { paramsMock } from '../__mocks__/calculator'

describe('CustomCalculatorTwo', () => {
  let customCalculatorTwo: CustomCalculatorTwo

  describe('calculateSum', () => {
    beforeEach(() => {
      customCalculatorTwo = new CustomCalculatorTwo(paramsMock)
    })

    afterAll(() => {
      jest.resetAllMocks()
    })

    describe('when valueA:true, valueB: true, valueC:false', () => {
      const expectedResult = '1.88'

      it('calculates the sum for the given configuration', () => {
        expect(customCalculatorTwo.calculateSum()).toEqual(expectedResult)
      })
    })

    describe('when valueA:true, valueB:true, valueC:true', () => {
      const newMock = {
        ...paramsMock,
        valueB: false,
        valueC: true,
      }
      const expectedResult = '22.49'

      beforeEach(() => {
        customCalculatorTwo = new CustomCalculatorTwo(newMock)
      })

      it('calculates the sum for the given configuration', () => {
        expect(customCalculatorTwo.calculateSum()).toEqual(expectedResult)
      })
    })

    describe('when configuration is not covered by extending class', () => {
      const newMock = {
        ...paramsMock,
        valueC: true,
      }
      const expectedResult = '30.48'

      beforeEach(() => {
        customCalculatorTwo = new CustomCalculatorTwo(newMock)
      })

      it('calculates the sum using method from parent class', () => {
        expect(customCalculatorTwo.calculateSum()).toEqual(expectedResult)
      })
    })

    describe('when configuration is not covered by extended class', () => {
      const newMock = {
        ...paramsMock,
        valueA: false,
        valueB: false,
        valueC: false,
      }
      const expectedResult = 'error'

      beforeEach(() => {
        customCalculatorTwo = new CustomCalculatorTwo(newMock)
      })

      it('returns error from the parent class', () => {
        expect(customCalculatorTwo.calculateSum()).toEqual(expectedResult)
      })
    })
  })
})
