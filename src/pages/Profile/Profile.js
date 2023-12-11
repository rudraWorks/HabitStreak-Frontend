import React from 'react'
import { Container, Left, Right } from '../Add/Styles'
import useUser from '../../hooks/useUser'
import Loading from '../../components/Loading'
import { Button } from '../Add/Styles'
import AuthFailed from '../../components/AuthFailed'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const { user, dispatchUser } = useUser()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatchUser({type:'LOGOUT'})
    navigate('/')
  }


  if(user==='LOADING')
    return <Loading/> 
  if(!user)
    return <AuthFailed/>

  return (
    <Container>
      <Left>
        <img src={user.picture} style={{borderRadius:'50%'}} referrerPolicy="no-referrer" />
      </Left>
      <Right>
        <h2 style={{marginBottom:'10px'}}>{user.name}</h2>
        <h3>{user.email}</h3>
        <Button style={{width:'150px'}} onClick={handleLogout}>Logout</Button>
      </Right>
    </Container>
  )
}

export default Profile