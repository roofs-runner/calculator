import React, { FC } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Open Sans', -apple-system, serif;
  border: none;
  border-radius: 1rem;
  box-shadow: -2px 8px 13px -9px rgba(0, 0, 0, 0.33);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

interface NumberInputProps {
  label: string
  value: string
  id: string
  onInputChange: (event: React.SyntheticEvent<HTMLElement>, inputid: string) => void
}

export const NumberInput: FC<NumberInputProps> = ({ label, value, onInputChange, id }) => {
  return (
    <Input
      placeholder={label}
      type="number"
      onChange={(e) => onInputChange(e, id)}
      id={id}
      value={value}
    />
  )
}
