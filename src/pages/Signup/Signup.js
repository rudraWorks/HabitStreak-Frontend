import React from 'react'
import { Container, Left, Right } from '../Add/Styles'
import Auth from '../../components/Auth'
import useTitle from '../../hooks/useTitle'

function Signup() {
  useTitle('Login/Signup') 
  return (
    <Container>
        <Left>
            <img src='/icons/clap.png' />
        </Left>
        <Right>
          <Auth/>
        </Right>
    </Container>
  )
}

export default Signup