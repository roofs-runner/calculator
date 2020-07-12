import React, { FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  background-color: #7aa76a;
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Open Sans', -apple-system, serif;
  border: none;
  border-radius: 1rem;

  &:disabled {
    background-color: #bababa;
  }
`

interface ButtonProps {
  children: string
  disabled: boolean
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ disabled, onClick, children }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
