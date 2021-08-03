// External Modules
import React from 'react'

// Internal Modules
import { Summary } from '../Summary'

// Styling
import * as Styled from './styles'

export const Dashboard: React.FC = () => {
  return (
    <Styled.Container>
      <Summary />
    </Styled.Container>
  )
}
