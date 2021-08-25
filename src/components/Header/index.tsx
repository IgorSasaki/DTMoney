// External Modules
import React from 'react'

// Assets
import logo from '../../assets/logo.svg'

// Styling
import * as Styled from './styles'

interface HeaderProps {
  onOpenNewTransactionModal(): void
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNewTransactionModal
}) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={() => onOpenNewTransactionModal()}>
          Nova transação
        </button>
      </Styled.Content>
    </Styled.Container>
  )
}
