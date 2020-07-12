import React, { useCallback, useState } from 'react'
import { calculationMode, CalculatorModes } from '../../types'
import { convertToFloat, parseFloatingSting } from '../../utils/helpers'

interface CalculationModeState {
  mode: calculationMode
}

interface InputsProps {
  valueA: boolean
  valueB: boolean
  valueC: boolean
  valueD: string
  valueE: string
  valueF: string
}

interface CalculationValuesState {
  inputs: InputsProps
}

export const useCalculatorState = () => {
  const [calculatorMode, setCalculatorMode] = useState<CalculationModeState>({
    mode: CalculatorModes.BASE,
  })
  const [inputsState, setInputsState] = useState<CalculationValuesState>({
    inputs: {
      valueA: false,
      valueB: false,
      valueC: false,
      valueD: '',
      valueE: '',
      valueF: '',
    },
  })
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set())

  const handleModeChange = (value: calculationMode) => {
    setCalculatorMode({ mode: value })
  }

  const handleInputsChange = useCallback(
    (event: React.SyntheticEvent<HTMLElement>, inputid: string) => {
      const value = (event.target as HTMLInputElement).dataset.id

      if (selectedCheckboxes.has(value)) {
        selectedCheckboxes.delete(value)
      } else {
        selectedCheckboxes.add(value)
      }

      const newInputs = {
        ...inputsState,
        inputs: {
          ...inputsState.inputs,
          [inputid]: selectedCheckboxes.has(value),
        },
      }

      setSelectedCheckboxes(selectedCheckboxes)
      setInputsState(newInputs)
    },
    [selectedCheckboxes, inputsState]
  )

  const handleInputsNumberChange = useCallback(
    (event: React.SyntheticEvent<HTMLElement>, inputid: string) => {
      const value = (event.target as HTMLInputElement).value

      const newInputs = {
        ...inputsState,
        inputs: {
          ...inputsState.inputs,
          [inputid]: value,
        },
      }

      setInputsState(newInputs)
    },
    [inputsState]
  )

  const onFloatFieldChange = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      const value = (event.target as HTMLInputElement).value

      const newInputs = {
        ...inputsState,
        inputs: {
          ...inputsState.inputs,
          valueD: convertToFloat(parseFloatingSting(value)),
        },
      }

      setInputsState(newInputs)
    },
    [inputsState]
  )

  return {
    calculatorMode,
    handleModeChange,
    inputsState,
    handleInputsChange,
    handleInputsNumberChange,
    onFloatFieldChange,
    selectedCheckboxes,
  }
}
