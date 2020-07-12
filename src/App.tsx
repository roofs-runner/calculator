import React from 'react'
import styled from 'styled-components'
import { Calculator } from './components/calculator/calculator'
import { GlobalStyle } from './core/global-style'

const AppWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Calculator />
    </AppWrapper>
  )
}

export default App
