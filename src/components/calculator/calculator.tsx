import React, { useCallback, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'
import { useCalculatorState } from './use-calculator-state'
import { useCalculate } from '../calculator-manager/use-calculate'
import { Checkbox, RadioButton, NumberInput, FloatingNumberInput, Button } from '../../blocks'

const CalculatorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1.5rem;
  background-color: #f4f4f4;
  height: 100vh;
  width: 68rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`
CalculatorWrapper.displayName = 'Calculator'

const H2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 5rem;
`
H2.displayName = 'PageHeading'

const CalculationTypeWrapper = styled.div`
  display: flex;
  padding: 2.5rem 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: -2px 8px 13px -9px rgba(0, 0, 0, 0.33);
`

const CalculationInputsWrapper = styled.div`
  display: flex;
  padding: 4rem 0;
  line-height: 2rem;
`

const CalculationSumInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Result = styled.div<{ hasError: boolean }>`
  font-size: 1.8rem;
  padding: 2rem;
  margin-bottom: 1rem;
  border: 1px solid #000;
  border-radius: 1rem;

  ${({ hasError }) =>
    hasError &&
    css`
      background-color: #f6c6ce;
      border-color: #f6c6ce;
    `}
`

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
    selectedCheckboxes,
  } = useCalculatorState()

  const calculate = useCalculate()

  const checkboxInputs = [
    inputsState.inputs.valueD,
    inputsState.inputs.valueE,
    inputsState.inputs.valueF,
  ]

  const onGetResultsClick = useCallback(() => {
    setResult(calculate(calculatorMode.mode, inputsState.inputs))
  }, [calculate, calculatorMode.mode, inputsState.inputs])

  const isButtonDisabled = useMemo(
    () => checkboxInputs.some((item) => item === '') || selectedCheckboxes.size === 0,
    [checkboxInputs, selectedCheckboxes.size]
  )

  return (
    <CalculatorWrapper>
      <H2>Select calculation type</H2>
      <CalculationTypeWrapper>
        <RadioButton
          value="base"
          onModeChange={handleModeChange}
          selectedValue={calculatorMode.mode}
          inputLabel="Base"
        />
        <RadioButton
          value="custom1"
          onModeChange={handleModeChange}
          selectedValue={calculatorMode.mode}
          inputLabel="Custom 1"
        />
        <RadioButton
          value="custom2"
          onModeChange={handleModeChange}
          selectedValue={calculatorMode.mode}
          inputLabel="Custom 2"
        />
      </CalculationTypeWrapper>
      <CalculationInputsWrapper>
        <Checkbox
          value="value A"
          id="valueA"
          data-id="valueA"
          checked={inputsState.inputs.valueA}
          onInputChange={handleInputsChange}
        />
        <Checkbox
          value="value B"
          id="valueB"
          data-id="valueB"
          checked={inputsState.inputs.valueB}
          onInputChange={handleInputsChange}
        />
        <Checkbox
          value="value C"
          id="valueC"
          data-id="valueC"
          checked={inputsState.inputs.valueC}
          onInputChange={handleInputsChange}
        />
      </CalculationInputsWrapper>
      <CalculationSumInputsWrapper>
        <FloatingNumberInput
          label="value D"
          onBlur={onFloatFieldChange}
          onInputChange={handleInputsNumberChange}
          id="valueD"
          value={inputsState.inputs.valueD}
        />
        <NumberInput
          label="value E"
          id="valueE"
          onInputChange={handleInputsNumberChange}
          value={inputsState.inputs.valueE}
        />
        <NumberInput
          label="value F"
          id="valueF"
          onInputChange={handleInputsNumberChange}
          value={inputsState.inputs.valueF}
        />
      </CalculationSumInputsWrapper>
      <div>
        <Result hasError={result === 'error'}>
          Result:{' '}
          {result === 'error'
            ? "Something is not right with the calculation parameters you've selected. Try adjusting them"
            : result}
        </Result>
      </div>
      <Button onClick={onGetResultsClick} disabled={isButtonDisabled} data-id="submit-button">
        Calculate
      </Button>
    </CalculatorWrapper>
  )
}
