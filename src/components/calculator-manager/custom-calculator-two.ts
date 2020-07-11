import { BaseCalculator } from './base-calculator'

export class CustomCalculatorTwo extends BaseCalculator {
  calculateM() {
    return this.valF + this.valD + (this.valD * this.valE) / 100
  }

  calculateSum() {
    if (this.valA && this.valB && !this.valC) {
      console.log('CustomCalculatorTwo this.calculateT')
      return this.calculateT().toFixed(2)
    }
    if (this.valA && !this.valB && this.valC) {
      console.log('CustomCalculatorTwo this.calculateM')
      return this.calculateM().toFixed(2)
    }

    return super.calculateSum()
  }
}
