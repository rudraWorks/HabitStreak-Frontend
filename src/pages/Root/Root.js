import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { OutletContainer, Img } from './Styles'
import useModal from '../../hooks/useModal'
import Modal from '../../layouts/Modal/Modal'
import TimeLeft from '../../modal-views/Time-left/TimeLeft'
import Footer from '../../components/Footer'

function Root() {
  const {modal,dispatchModal} = useModal() 

  const handleSandtimer = () => {
    dispatchModal({type:'SET_CONTENT',content:<TimeLeft/>})
  }

  if(modal){
    document.getElementsByTagName('body')[0].style.overflow='hidden'
  }
  else{
    document.getElementsByTagName('body')[0].style.overflow='auto'

  }

  return (
    <div style={{minHeight:'100vh',background:'grayl',display:'flex',flexDirection:'column'}}>
        {modal && <Modal />}
        <Navbar/> 
        <OutletContainer>
          {<Outlet/>}
        </OutletContainer>
        <Footer/>
        <Img onClick={handleSandtimer} src='/icons/sand.png'/>
    </div>
  )
}

export default Root