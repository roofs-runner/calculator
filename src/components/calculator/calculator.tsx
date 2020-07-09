import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { RadioButton } from '../../blocks/RadioButton'
import { CalculatorModes } from '../../types'
import { BaseCalculator, CustomCalculatorOne, CustomCalculatorTwo } from '../calculator-manager'
import { useCalculatorState } from './use-calculator-state'

const CalculatorWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const CalculationTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const RadioButtonItem = styled.div`
  display: flex;
`

const CalculationInputsWrapper = styled.div``

export const Calculator = () => {
  const [result, setResult] = useState<number | null>(null)
  const {
    calculatorMode,
    handleModeChange,
    handleInputsChange,
    inputsState,
    handleInputsNumberChange,
    onFloatFieldChange,
  } = useCalculatorState()

  const onGetResultsClick = () => {
    switch (calculatorMode.mode) {
      case CalculatorModes.BASE:
        const baseCalculator = new BaseCalculator(inputsState.inputs)
        setResult(baseCalculator.calculateSum())
        break
      case CalculatorModes.CUSTOM_1:
        const customCalculator1 = new CustomCalculatorOne(inputsState.inputs)
        setResult(customCalculator1.calculateSum())
        break
      case CalculatorModes.CUSTOM_2:
        const customCalculator2 = new CustomCalculatorTwo(inputsState.inputs)
        setResult(customCalculator2.calculateSum())
        break
      default:
        return
    }
  }

  const isButtonDisabled = useMemo(
    () => !inputsState.inputs.valueD || !inputsState.inputs.valueE || !inputsState.inputs.valueF,
    [inputsState.inputs.valueD, inputsState.inputs.valueE, inputsState.inputs.valueF]
  )

  return (
    <CalculatorWrapper>
      <label>Select calculation type</label>
      <CalculationTypeWrapper>
        <RadioButtonItem>
          <RadioButton
            value="base"
            onModeChange={handleModeChange}
            selectedValue={calculatorMode.mode}
          />
          <label>Base variant</label>
        </RadioButtonItem>
        <RadioButtonItem>
          <RadioButton
            value="custom1"
            onModeChange={handleModeChange}
            selectedValue={calculatorMode.mode}
          />
          <label>Custom variant 1</label>
        </RadioButtonItem>
        <RadioButtonItem>
          <RadioButton
            value="custom2"
            onModeChange={handleModeChange}
            selectedValue={calculatorMode.mode}
          />
          <label>Custom variant 2</label>
        </RadioButtonItem>
      </CalculationTypeWrapper>
      <CalculationInputsWrapper>
        <input
          type="checkbox"
          data-id="valueA"
          onChange={(e) => handleInputsChange(e, 'valueA')}
          id="valueA"
          checked={inputsState.inputs.valueA}
          aria-checked={inputsState.inputs.valueA}
          placeholder="value A"
        />
        <input
          type="checkbox"
          data-id="valueB"
          onChange={(e) => handleInputsChange(e, 'valueB')}
          id="valueB"
          checked={inputsState.inputs.valueB}
          aria-checked={inputsState.inputs.valueB}
          placeholder="value B"
        />
        <input
          type="checkbox"
          data-id="valueC"
          onChange={(e) => handleInputsChange(e, 'valueC')}
          id="valueC"
          checked={inputsState.inputs.valueC}
          aria-checked={inputsState.inputs.valueC}
          placeholder="value C"
        />
        <input
          onBlur={(e) => onFloatFieldChange(e)}
          placeholder="Value D"
          type="text"
          onChange={(e) => handleInputsNumberChange(e, 'valueD')}
          id="valueD"
          value={inputsState.inputs.valueD}
          inputMode="decimal"
        />
        <input
          placeholder="value E"
          type="text"
          onChange={(e) => handleInputsNumberChange(e, 'valueE')}
          id="valueE"
          value={inputsState.inputs.valueE}
          inputMode="decimal"
        />
        <input
          placeholder="value F"
          type="text"
          onChange={(e) => handleInputsNumberChange(e, 'valueF')}
          id="valueF"
          value={inputsState.inputs.valueF}
          inputMode="decimal"
        />
      </CalculationInputsWrapper>
      <div>Result: {result}</div>
      <button onClick={onGetResultsClick} disabled={isButtonDisabled}>
        Calculate
      </button>
    </CalculatorWrapper>
  )
}
