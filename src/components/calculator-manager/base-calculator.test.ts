import { BaseCalculator } from './base-calculator'
import { paramsMock } from '../__mocks__/calculator'

describe('BaseCalculator', () => {
  let baseCalculator: BaseCalculator

  describe('calculateSum', () => {
    beforeEach(() => {
      baseCalculator = new BaseCalculator(paramsMock)
    })

    afterAll(() => {
      jest.resetAllMocks()
    })

    describe('when valueA:true, valueB: true, valueC:false', () => {
      const expectedResult = '76.62'

      it('calculates the sum for the given configuration', () => {
        expect(baseCalculator.calculateSum()).toEqual(expectedResult)
      })
    })

    describe('when valueA:true, valueB:true, valueC:true', () => {
      const newMock = {
        ...paramsMock,
        valueC: true,
      }
      const expectedResult = '30.48'

      beforeEach(() => {
        baseCalculator = new BaseCalculator(newMock)
      })

      it('calculates the sum for the given configuration', () => {
        expect(baseCalculator.calculateSum()).toEqual(expectedResult)
      })
    })

    describe('when valueA:false, valueB:true, valueC:true', () => {
      const newMock = {
        ...paramsMock,
        valueA: false,
        valueC: true,
      }
      const expectedResult = '1.88'

      beforeEach(() => {
        baseCalculator = new BaseCalculator(newMock)
      })

      it('calculates the sum for the given configuration', () => {
        expect(baseCalculator.calculateSum()).toEqual(expectedResult)
      })
    })

    describe('when valueA:false, valueB:false, valueC:true', () => {
      const newMock = {
        ...paramsMock,
        valueA: false,
        valueB: false,
        valueC: true,
      }
      const expectedResult = 'error'

      beforeEach(() => {
        baseCalculator = new BaseCalculator(newMock)
      })

      it('returns error', () => {
        expect(baseCalculator.calculateSum()).toEqual(expectedResult)
      })
    })
  })
})
