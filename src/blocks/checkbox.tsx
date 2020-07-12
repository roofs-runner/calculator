import React, { FC } from 'react'
import styled from 'styled-components'

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const Label = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
`

const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover ${InputCheckbox} {
    background-color: #ccc;
    ~ ${Checkmark} {
      background-color: #ccc;
    }
  }

  ${InputCheckbox} {
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
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`

interface RadioButtonProps {
  value: string
  id: string
  checked: boolean
  onInputChange: (event: React.SyntheticEvent<HTMLElement>, inputid: string) => void
}

export const Checkbox: FC<RadioButtonProps> = ({ value, onInputChange, id, checked }) => {
  return (
    <CheckboxWrapper>
      <CheckboxContainer>
        <Label>{value}</Label>
        <InputCheckbox
          type="checkbox"
          onChange={(e) => onInputChange(e, id)}
          data-id={id}
          id={id}
          checked={checked}
          aria-checked={checked}
          placeholder={value}
        />
        <Checkmark />
      </CheckboxContainer>
    </CheckboxWrapper>
  )
}
