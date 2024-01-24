import React from 'react'
import ReactDom from 'react-dom'
import useModal from '../../hooks/useModal'
import { Button,BACKGROUND_STYLES,ModalContainer } from './Styles'

function Modal() {

    const {modal,dispatchModal } = useModal()

    return ReactDom.createPortal(
        <>
                <div onClick={() => dispatchModal({ type: 'CLOSE' })}  style={BACKGROUND_STYLES}></div> 
                <ModalContainer>
                    {modal}
                    <Button onClick={() => dispatchModal({ type: 'CLOSE' })}>x</Button>
                </ModalContainer>
        </>, 
        document.getElementById('modal')
    )
}

export default Modal 