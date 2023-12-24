import React from 'react'
import { Container, Left, Right } from '../Add/Styles'
import useUser from '../../hooks/useUser'
import Loading from '../../components/Loading'
import { Button } from '../Add/Styles'
import AuthFailed from '../../components/AuthFailed'
import { useNavigate } from 'react-router-dom'
import { Buttons, Pro } from './Styles'
import useTitle from '../../hooks/useTitle'

function Profile() {

  const { user, dispatchUser } = useUser()
  useTitle("My profile")
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatchUser({ type: 'LOGOUT' })
    navigate('/')
  }


  if (user === 'LOADING')
    return <Loading />
  if (!user)
    return <AuthFailed />

  return (
    <Container>
      <Left>
        <img src={user.picture} style={{ borderRadius: '50%' }} referrerPolicy="no-referrer" />

      </Left>
      <Right>
        <h2 style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>{user.name}
          {user.pro && <Pro>PRO</Pro>}
        </h2>
        <h3>{user.email}</h3>
        <Buttons>
          {!user.pro && <Button  onClick={()=>navigate('/pro')}>Join Pro</Button>}
          <Button  onClick={handleLogout}>Logout</Button>
        </Buttons>
      </Right>
    </Container>
  )
}

export default Profile