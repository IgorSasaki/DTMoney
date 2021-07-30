// External Modules
import React from 'react'

// Assets
import logo from '../../assets/images/logo.svg'

// Styling
import * as Styled from './styles'

export const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logo} alt="dt money" />
        <button type="button">Nova transação</button>
      </Styled.Content>
    </Styled.Container>
  )
}
