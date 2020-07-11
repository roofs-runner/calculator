import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { RadioButton } from '../../blocks/RadioButton'
import { useCalculatorState } from './use-calculator-state'
import { useCalculate } from '../calculator-manager/use-calculate'

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

type calculatorState = number | null | string

export const Calculator = () => {
  const [result, setResult] = useState<calculatorState>(null)
  const {
    calculatorMode,
    handleModeChange,
    handleInputsChange,
    inputsState,
    handleInputsNumberChange,
    onFloatFieldChange,
  } = useCalculatorState()

  const calculate = useCalculate()

  const onGetResultsClick = useCallback(() => {
    console.log('I am inside onGetResultsClick')

    setResult(calculate(calculatorMode.mode, inputsState.inputs))

    // switch (calculatorMode.mode) {
    //   case CalculatorModes.BASE:
    //     return setResult(calculate(calculatorMode.mode, inputsState.inputs))
    //   case CalculatorModes.CUSTOM_1:
    //     const customCalculator1 = new CustomCalculatorOne(inputsState.inputs)
    //     setResult(customCalculator1.calculateSum())
    //     break;
    //   case CalculatorModes.CUSTOM_2:
    //     const customCalculator2 = new CustomCalculatorTwo(inputsState.inputs)
    //     setResult(customCalculator2.calculateSum())
    //     break;
    //   default:
    //     return
    // }
  }, [calculate, calculatorMode.mode, inputsState.inputs])

  console.log('--------inputsState---------', inputsState)

  const isButtonDisabled = useMemo(
    () => !inputsState.inputs.valueD || !inputsState.inputs.valueE || !inputsState.inputs.valueF,
    [inputsState.inputs.valueD, inputsState.inputs.valueE, inputsState.inputs.valueF]
  )

  return (
    <CalculatorWrapper>
      <h2>Select calculation type</h2>
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
          type="number"
          onChange={(e) => handleInputsNumberChange(e, 'valueD')}
          id="valueD"
          value={inputsState.inputs.valueD}
        />
        <input
          placeholder="value E"
          type="number"
          onChange={(e) => handleInputsNumberChange(e, 'valueE')}
          id="valueE"
          value={inputsState.inputs.valueE}
        />
        <input
          placeholder="value F"
          type="number"
          onChange={(e) => handleInputsNumberChange(e, 'valueF')}
          id="valueF"
          value={inputsState.inputs.valueF}
        />
      </CalculationInputsWrapper>
      <div>
        Result:{' '}
        {result === 'error'
          ? "Something is not right with the calculation parameters you've selected. Try adjusting them"
          : result}
      </div>
      <button onClick={onGetResultsClick} disabled={isButtonDisabled} data-id="submit-button">
        Calculate
      </button>
    </CalculatorWrapper>
  )
}
