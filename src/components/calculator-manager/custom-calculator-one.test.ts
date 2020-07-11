import { CustomCalculatorOne } from './custom-calculator-one'
import { paramsMock } from '../__mocks__/calculator'

describe('CustomCalculatorOne', () => {
  let customCalculatorOne: CustomCalculatorOne

  describe('calculateSum', () => {
    beforeEach(() => {
      customCalculatorOne = new CustomCalculatorOne(paramsMock)
    })

    afterAll(() => {
      jest.resetAllMocks()
    })

    describe('when valueA:true, valueB:true, valueC:true', () => {
      const newMock = {
        ...paramsMock,
        valueC: true,
      }
      const expectedResult = '13.63'

      beforeEach(() => {
        customCalculatorOne = new CustomCalculatorOne(newMock)
      })

      it('calculates the sum for the given configuration', () => {
        expect(customCalculatorOne.calculateSum()).toEqual(expectedResult)
      })
    })
  })
})
