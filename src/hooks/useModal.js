import { useContext } from "react";
import ModalContext from '../contexts/Modal/Context'

function useModal() {
    const {modal,dispatchModal} = useContext(ModalContext)
    return {modal,dispatchModal}
} 

export default useModal 