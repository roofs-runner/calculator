import React, { FC } from 'react'
import { calculationMode } from '../types/types'

interface RadioButtonProps {
  value: calculationMode
  selectedValue: calculationMode
  onModeChange: (calculationMode: calculationMode) => void
}

export const RadioButton: FC<RadioButtonProps> = ({ value, onModeChange, selectedValue }) => {
  return (
    <input
      type="radio"
      value={value}
      onChange={() => onModeChange(value)}
      checked={value === selectedValue}
      aria-checked={value === selectedValue}
    />
  )
}
