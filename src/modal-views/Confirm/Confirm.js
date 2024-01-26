import React from 'react';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import {
    ModalContainer,
    Message,
    ButtonContainer,
    ConfirmButton,
    CancelButton,
  } from './Styles';

function Confirm({ onConfirm }) {
  const { dispatchModal } = useModal();

  const handleConfirm = () => {
    if (onConfirm && typeof onConfirm === 'function') {
      onConfirm();
      dispatchModal({ type: 'CLOSE' });
    }
  };

  const handleCancel = () => {
    dispatchModal({ type: 'CLOSE' });
  };

  return (
    <ModalContainer>
      <Message>Are you sure you want to proceed?</Message>
      <ButtonContainer>
        <ConfirmButton onClick={handleConfirm}>Yes</ConfirmButton>
        <CancelButton onClick={handleCancel}>No</CancelButton>
      </ButtonContainer>
    </ModalContainer>
  );
}

export default Confirm;
