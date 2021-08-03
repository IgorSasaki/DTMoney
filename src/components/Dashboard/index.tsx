// External Modules
import React from 'react'

// Internal Modules
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

// Styling
import * as Styled from './styles'

export const Dashboard: React.FC = () => {
  return (
    <Styled.Container>
      <Summary />

      <TransactionsTable />
    </Styled.Container>
  )
}
