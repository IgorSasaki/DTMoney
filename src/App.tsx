// External Modules
import React from 'react'

// Internal Modules
import { Header } from './components/Header'

// Styling
import { GlobalStyle } from './styles/global'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  )
}
