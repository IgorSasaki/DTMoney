// External Modules
import React from 'react'

// Assets
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

// Styling
import * as Styled from './styles'

export const Summary: React.FC = () => {
  return (
    <Styled.Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>

          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Styled.Container>
  )
}
