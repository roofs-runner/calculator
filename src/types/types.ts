export type calculationMode = 'base' | 'custom1' | 'custom2'

export enum CalculatorModes {
  BASE = 'base',
  CUSTOM_1 = 'custom1',
  CUSTOM_2 = 'custom2',
}

export type Weight = 'light' | 'regular' | 'semibold' | 'bold'
export type Weights = { [key in Weight]: number }
