import { useContext } from "react";
import NotificationBarContext from "../contexts/NotificationBar/Context";

function useNotificationBar() {
    const {notificationBar,dispatchNotificationBar} = useContext(NotificationBarContext)
    return {notificationBar,dispatchNotificationBar} 
}

export default useNotificationBar 