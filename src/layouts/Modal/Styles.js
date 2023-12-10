import styled from "styled-components"

export const MODAL_STYLES = {
    position: 'fixed',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%,-30%)',
    minWidth: '300px',
    minHeight: '200px',
    maxWidth: '95%',
    maxHeight: '95%',
    zIndex: '3000000', 
    background: 'white',
    borderRadius: '10px',
    padding: '30px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}
export const BACKGROUND_STYLES = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'rgba(0,0,0,0.5)',
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