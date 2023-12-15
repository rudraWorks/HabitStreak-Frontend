import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background:grlay;
  font-size:1.5rem;
  &>img{
    height:8rem;
    @media only screen and (max-width: 600px) {
        height:5rem;
    }
  }
  flex-direction:column;
  align-items:center;
  word-wrap:break-word;
  @media only screen and (max-width: 600px) {
    font-size:1.1rem;
  }
`

function AuthFailed() {
  return (
    <Container>
      <img  src='/icons/loginfirst.png' />
      <br/>
      <h3>Login to continue</h3>
    </Container>
  )
}

export default AuthFailed