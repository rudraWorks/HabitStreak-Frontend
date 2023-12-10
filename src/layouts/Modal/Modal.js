import React from 'react'
import ReactDom from 'react-dom'
import useModal from '../../hooks/useModal'
import { Button,BACKGROUND_STYLES,MODAL_STYLES } from './Styles'

function Modal() {

    const {modal,dispatchModal } = useModal()

    return ReactDom.createPortal(
        <>
                <div style={BACKGROUND_STYLES}></div>
                <div style={MODAL_STYLES}>
                    {modal}
                    <Button onClick={() => dispatchModal({ type: 'CLOSE' })}>x</Button>
                </div>
        </>, 
        document.getElementById('modal')
    )
}

export default Modal 