// External Modules
import React from 'react'
import Modal from 'react-modal'

// Assets
import closeIcon from '../../assets/close.svg'

// Styling
import * as Styled from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose(): void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => onRequestClose()}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar Modal" />
      </button>

      <Styled.Container>
        <h2>Cadastrar Informação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Styled.Container>
    </Modal>
  )
}
