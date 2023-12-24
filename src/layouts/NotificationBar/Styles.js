import styled from "styled-components";

export const NotificationWrapper = styled.div`
  width: 100%;
  height:70px;
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  z-index: 100000;
  display: flex;
  justify-content: space-between;
  align-items:center;
  opacity: 0.97;
  position:fixed; 
  top:0px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8em;
`;