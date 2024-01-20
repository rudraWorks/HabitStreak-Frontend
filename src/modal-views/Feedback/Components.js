import React from 'react';
import styled from 'styled-components';

const SuccessMessageContainer = styled.div`
  background-color: #d9fbd9; 
  color: #008000; /* Dark green text color */
  border: 1px solid #4caf50; 
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SuccessMessage = ({ children }) => {
    return (
        <SuccessMessageContainer>
            <img src='/icons/feedbacksubmitted.png'/>
            <br/>
            {children}
        </SuccessMessageContainer>
    )
};

