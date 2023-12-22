import React, { useReducer, useEffect } from "react";
import UserContext from "./Context";

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const {email,picture,token,name,_id,pro} = action
            localStorage.setItem('habitUser', JSON.stringify({email,picture,token,name,_id,pro}))
            return {email,picture,token,name,_id,pro}
        }
        case 'LOADING':{
            return 'LOADING'
        }
        case 'LOGOUT': {
            localStorage.removeItem('habitUser')
            return null
        }
        
    }
}
function UserState({ children }) {
    const [user, dispatchUser] = useReducer(reducer, null)

    useEffect(() => {
        const checkUser = async () => {
            try {
                const currentUser = localStorage.getItem('habitUser') 
                dispatchUser({type:'LOADING'})
                if (currentUser) {
                    const {token,name,email,picture} = JSON.parse(currentUser)
                    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/verifyToken`,{
                        method:'GET',
                        headers:{'Content-Type':'application/json',Authorization:token}
                    })
                    const json = await response.json() 

                    if(response.ok)
                        dispatchUser({type:'LOGIN',token,name,email,picture,_id:json._d,pro:json.pro})
                    
                    else
                        dispatchUser({type:'LOGOUT'})
                    
                } 
                else{ 
                    dispatchUser({type:'LOGOUT'})
                }
            }
            catch (e) {
                dispatchUser('LOGOUT')
            } 
        }
        checkUser()
    }, [])
    return <UserContext.Provider value={{ user, dispatchUser }}>{children}</UserContext.Provider>
}

export default UserState