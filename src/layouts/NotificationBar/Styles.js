import styled from "styled-components";

export const NotificationWrapper = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  opacity: 0.95;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
`;