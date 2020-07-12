import React, { FC } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Open Sans', -apple-system;
  border: none;
  border-radius: 1rem;
  box-shadow: -2px 8px 13px -9px rgba(0, 0, 0, 0.33);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

interface FloatingNumberInputProps {
  label: string
  value: string
  id: string
  onBlur: (event: React.SyntheticEvent<HTMLElement>) => void
  onInputChange: (event: React.SyntheticEvent<HTMLElement>, inputid: string) => void
}

export const FloatingNumberInput: FC<FloatingNumberInputProps> = ({
  label,
  value,
  onBlur,
  onInputChange,
  id,
}) => {
  return (
    <Input
      placeholder={label}
      type="number"
      onBlur={onBlur}
      onChange={(e) => onInputChange(e, id)}
      id={id}
      value={value}
    />
  )
}
