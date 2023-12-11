import { useContext } from "react";
import UserContext from "../contexts/User/Context";

function useUser() {
    const {user,dispatchUser} = useContext(UserContext)
    return {user,dispatchUser} 
}

export default useUser 