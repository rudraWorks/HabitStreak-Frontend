import React from 'react'
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`;

const Container = styled.div`
  width:auto;
  min-width:250px;
  height:125px;
  background:#F3F4F6;
  border-radius:10px;
  color:#1F2937;
  margin:10px;
  cursor:pointer;
  /* border:1px solid #D1D5DB; */

  @media only screen and (max-width: 600px) {
    width:100%;
  }
  position:relative;
  transition:all .15s ease-in-out;
  &:hover{
    transform:scale(1.05);
  }

  background: linear-gradient(120deg, #F3F4F6 30%, #F9FAFB 38%, #F9FAFB 40%, #F3F4F6 48%);
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${rotateAnimation} 2s infinite;
`

const Emoji = styled.span`
  position:absolute;
  top:0px;
  right:10px;
  font-size:2.2rem;
`
export const Streak = styled.div`
  width:fit-content;
  font-size:1rem;
  display:flex;
  align-items:center;
  background:#D1D5DB;
  padding:3px;
  padding-left:8px;
  /* border: 1px solid #9CA3AF; */
  padding-right:8px;
  border-radius:10000px;
  &>img{
    height:20px;
    margin-right:5px;
  }

  margin-left:auto;
  display:flex;
  align-items:center;
`
const Name = styled.h2`
  position:absolute;
  width:170px;
  text-align:left;
  background:redl;
  white-space: pre-wrap;
  overflow-wrap:break-word;

  top:20px;
  font-size:1.3rem;
  font-weight:400;
  left:10px;
  @media only screen and (max-width: 600px) {
    font-size:1.2rem;
  }

`

const Bottom = styled.div`
  background:redl;
  position:absolute;
  bottom:5px;
  display:flex;
  width:100%;
  padding-left:5px;
  padding-right:5px;
`
const Img = styled.img`
  height:23px;
  position:absolute;
  right:-10px;
  top:-10px;
`

function HabitCard({ name, streak, emoji, current, target, onClick, isDoneToday }) {
  return (
    <Container onClick={onClick}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
      {isDoneToday?<Img src='/icons/donetoday.png'/>:<></>}
      <Bottom>
        <Streak style={{marginRight:'auto',marginLeft:'0'}}>
          <img src='/icons/goal.png'/>
          {current}/{target}
        </Streak>
        <Streak>
          <img src='/icons/fire.png' />
          {streak}
        </Streak>
      </Bottom>

    </Container>
  )
}

export default HabitCard