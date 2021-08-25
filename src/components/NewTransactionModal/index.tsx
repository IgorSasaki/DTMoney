// External Modules
import React from 'react'
import Modal from 'react-modal'

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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Cadastrar Informação</h2>
    </Modal>
  )
}
