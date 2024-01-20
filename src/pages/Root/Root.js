import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { OutletContainer, Img } from './Styles'
import useModal from '../../hooks/useModal'
import Modal from '../../layouts/Modal/Modal'
import TimeLeft from '../../modal-views/Time-left/TimeLeft'
// import Footer from '../../components/Footer'
import NotificationBar from '../../layouts/NotificationBar/NotficationBar'
import useNotificationBar from '../../hooks/useNotificationBar'
import Feedback from '../../modal-views/Feedback/Feedback'

function Root() {
  const { modal, dispatchModal } = useModal()
  const { notificationBar } = useNotificationBar()


  if (modal) {
      document.getElementsByTagName('body')[0].style.overflow="hidden"
  }
  else {
    document.getElementsByTagName('body')[0].style.overflow="auto"
  }


  return (
    <div style={{ minHeight: '100vh', background: 'grayl', display: 'flex', flexDirection: 'column' }}>
      {modal && <Modal />}
      {notificationBar && <NotificationBar />}
      <Navbar />
      <OutletContainer>
        {<Outlet />}
      </OutletContainer> 
      {/* <Footer/> */}
      <Img 
        style={{bottom:'70px'}} 
        onClick={()=>dispatchModal({type:'SET_CONTENT',content:<Feedback/>})} 
        src='/icons/feedback.png' 
      />
      <Img 
        onClick={()=>dispatchModal({ type: 'SET_CONTENT', content: <TimeLeft /> })} src='/icons/sand.png'
      />
    </div>
  )
}



export default Root