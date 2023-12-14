import NotificationBarContext from './Context'
import React, { useReducer } from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case 'CLOSE': return null 
        case 'SET_CONTENT': {
            // console.log(action.content);
            return {message:action.content.message,type:action.content.type}
        }
    }
}

function ModalState({ children }) { 
    const [notificationBar, dispatchNotificationBar] = useReducer(reducer, null)
    return (
        <NotificationBarContext.Provider value={{notificationBar,dispatchNotificationBar}}>{children}</NotificationBarContext.Provider>
    )
}  

export default ModalState