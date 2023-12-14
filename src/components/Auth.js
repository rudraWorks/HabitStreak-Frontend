import React,{useEffect} from 'react'
import styled from 'styled-components'
import { jwtDecode } from "jwt-decode"
import useUser from '../hooks/useUser'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'
 
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
` 

function Auth() {
 
    const {user,dispatchUser} = useUser()
    const navigate = useNavigate()

    async function handleCallbackResponse(userData) {
        const userObject = jwtDecode(userData.credential)
        const { name, picture, email } = userObject
        

        console.log(name,picture,email);

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,picture,email})
        })

        const json = await response.json() 

        if(response.ok){
            dispatchUser({type:'LOGIN',name,picture,email,token:json.token})
            navigate('/') 
        }
        else{
            // toast.error(json.message)
            alert(json.message)
        }
        // dispatchUser({type:'LOGIN',name,picture,email,token:'test-token-123'})
        // navigate('/') 
    }
    useEffect(() => {  

        const loadButton = () => {
            setTimeout(() => {
                window.google.accounts.id.initialize({
                    client_id:'488871700296-s99bcv7h5vgda1irc0pthfr43l5q9ano.apps.googleusercontent.com',
                    callback: handleCallbackResponse
                })
    
                window.google.accounts.id.renderButton(
                    document.getElementById('signinDiv'),
                    {
                        theme: "dark",
                        size: "large",
                    }
                )
            }, 1000)
        }
        if(!user)
            loadButton()
        else    
            navigate('/')
    }, [user])

    
    if(user === 'LOADING')
        return <Loading/>
        
    return (
        <Container>
            <h2>Login / Signup</h2>
            <br/>
            <br/>
            <div id='signinDiv'><b>Loading...</b></div> 
        </Container>
    )
}

export default Auth