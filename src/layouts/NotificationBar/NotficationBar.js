import React, { useState } from 'react';
import { NotificationWrapper, CloseButton } from './Styles';
import useNotificationBar from '../../hooks/useNotificationBar';

const NotificationBar = () => {
  
  const {notificationBar, dispatchNotificationBar} = useNotificationBar()

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'alert':
        return '#fed59a'; // orange
      case 'error': 
        return '#fc95a1'; // red
      case 'success':
        return '#aaf4c8'; // green
      case 'info':
        return '#89e5ff'; // blue
      default:
        return '#2196f3'; // default to blue for unknown types
    }
  };

  const handleClose = () => {
      dispatchNotificationBar({type:'CLOSE'})
  };


  return (
    <NotificationWrapper backgroundColor={getBackgroundColor(notificationBar.type)} >
      <div>{notificationBar.message}</div>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
    </NotificationWrapper>
  );
};



export default NotificationBar;
