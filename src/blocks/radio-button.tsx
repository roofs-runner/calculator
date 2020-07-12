import React, { FC } from 'react'
import { calculationMode } from '../types'
import styled from 'styled-components'

const RadioButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const Input = styled.input``

const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

const RadioButtonItem = styled.label`
  display: block;
  position: relative;
  padding-left: 3.5rem;
  cursor: pointer;
  font-size: 2.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    ${Input} {
      ~ ${Checkmark} {
        background-color: #ccc;
      }
    }
  }

  ${Input} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      ~ ${Checkmark} {
        background-color: #7aa76a;

        &:after {
          display: block;
        }
      }
    }
  }

  ${Checkmark} {
    &:after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }
`

interface RadioButtonProps {
  inputLabel: string
  value: calculationMode
  selectedValue: calculationMode
  onModeChange: (calculationMode: calculationMode) => void
}

export const RadioButton: FC<RadioButtonProps> = ({
  inputLabel,
  value,
  onModeChange,
  selectedValue,
}) => {
  return (
    <RadioButtonWrapper>
      <RadioButtonItem>
        <Input
          type="radio"
          value={value}
          onChange={() => onModeChange(value)}
          checked={value === selectedValue}
          aria-checked={value === selectedValue}
          id={value}
        />
        <Checkmark />
        <Label>{inputLabel}</Label>
      </RadioButtonItem>
    </RadioButtonWrapper>
  )
}
