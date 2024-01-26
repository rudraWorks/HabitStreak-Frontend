import styled from 'styled-components';

export const ModalContainer = styled.div`
  text-align: center;
  padding: 0px 10px;
`;

export const Message = styled.p`
  margin-bottom: 20px;
  font-size: 1.3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  margin-right: 10px;
  padding: 7px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const CancelButton = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
