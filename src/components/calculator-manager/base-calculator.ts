import { parseFloatingSting } from '../../utils/helpers'
import { CalculatorOptions } from './calculator-options'

export class BaseCalculator {
  valA: boolean
  valB: boolean
  valC: boolean
  valD: number
  valE: number
  valF: number

  constructor(readonly options: CalculatorOptions) {
    this.valA = options.valueA
    this.valB = options.valueB
    this.valC = options.valueC
    this.valD = parseFloatingSting(options.valueD)
    this.valE = Number(options.valueE)
    this.valF = Number(options.valueF)
  }

  calculateM() {
    return this.valD + (this.valD * this.valE) / 10
  }

  calculateP() {
    return this.valD + (this.valD * (this.valE - this.valF)) / 25.5
  }

  calculateT() {
    return this.valD - (this.valD * this.valF) / 30
  }

  calculateSum() {
    if (this.valA && this.valB && !this.valC) {
      console.log('this.valA && this.valB && !this.valC')
      return this.calculateM()
    }
    if (this.valA && this.valB && this.valC) {
      return this.calculateP()
    }
    if (!this.valA && this.valB && this.valC) {
      return this.calculateT()
    }

    return null
  }
}
