// External Modules
import React from 'react'

// Internal Modules
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

// Styling
import { GlobalStyle } from './styles/global'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}
