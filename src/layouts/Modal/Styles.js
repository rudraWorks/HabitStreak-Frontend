import styled from "styled-components"

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  min-height: 100px;
  max-width: 95%;
  max-height: 95%;
  z-index: 3000000;
  background: white;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  @media only screen and (max-width: 600px) {
    top:30%;
    transform:translate(-50%,-30%);
    width:90%;
  }
  & img{
    max-width:97%;
    /* max-width: 2000px; */
    /* max-height: 500px; */
  }
  overflow: auto;
`

export const BACKGROUND_STYLES = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0.4)',
    zIndex: '100000',
    // backdropFilter:'blur(1px)'
}

export const Button = styled.button`
    position:absolute;
    top:0;
    right:0;
    width:30px;
    height:30px;
    border-radius:50%;
    border:none;
    font-weight:bolder;
    background:transparent;
    font-size:20px;
    cursor:pointer;
    &:hover{
        background:#F3F4F6;
    }
`