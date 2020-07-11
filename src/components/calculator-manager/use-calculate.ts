import { CalculatorOptions } from './calculator-options'
import { BaseCalculator, CustomCalculatorOne, CustomCalculatorTwo } from '../calculator-manager'
import { CalculatorModes, calculationMode } from '../../types'

export function useCalculate() {
  return (mode: calculationMode, inputs: CalculatorOptions) => {
    switch (mode) {
      case CalculatorModes.BASE:
        const baseCalculator = new BaseCalculator(inputs)
        return baseCalculator.calculateSum()
      case CalculatorModes.CUSTOM_1:
        const customCalculator1 = new CustomCalculatorOne(inputs)
        return customCalculator1.calculateSum()
      case CalculatorModes.CUSTOM_2:
        const customCalculator2 = new CustomCalculatorTwo(inputs)
        return customCalculator2.calculateSum()
      default:
        return null
    }
  }
}
