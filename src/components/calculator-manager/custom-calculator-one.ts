import { BaseCalculator } from './base-calculator'

export class CustomCalculatorOne extends BaseCalculator {
  calculateP() {
    console.log('CustomCalculatorOne.calculateP')
    return 2 * this.valD + (this.valD * this.valE) / 100
  }
}
