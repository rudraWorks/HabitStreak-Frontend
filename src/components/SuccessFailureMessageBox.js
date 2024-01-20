import styled from 'styled-components';
import React, { useState } from 'react';

const MessageContainer = styled.div`
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: ${(props) => (props.success ? 'green' : props.error ? 'red' : 'black')};
  background-color: ${(props) => (props.success ? '#d9fbd9' : props.error ? '#fddddd' : 'transparent')};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer; 
`;

 const Message = ({ children, success, error, onClose }) => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true); 
    onClose && onClose();
  };

  return !closed ? (
    <MessageContainer success={success} error={error}>
      {/* <CloseButton onClick={handleClose}>&times;</CloseButton> */}
      {children}
    </MessageContainer>
  ) : null;
};

export default Message