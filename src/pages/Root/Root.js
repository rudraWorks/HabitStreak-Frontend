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

function Root() {
  const { modal, dispatchModal } = useModal()
  const { notificationBar } = useNotificationBar()

  const handleSandtimer = () => {
    dispatchModal({ type: 'SET_CONTENT', content: <TimeLeft /> })
  }

  if (modal) {
    disableScroll()
  }
  else {
    enableScroll()
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
      <Img onClick={handleSandtimer} src='/icons/sand.png'/>
    </div>
  )
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';


function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


export default Root