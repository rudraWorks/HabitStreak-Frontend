import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`;


const LoadBadge = styled.div`
  min-width: 100px;
  min-height: 100px;

  position: relative;
  float: left;
  background: linear-gradient(120deg, #FFDD49 30%, #f0f0f0 38%, #f0f0f0 40%, #FFDD49 48%);
  border-radius: 50%;
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${rotateAnimation} 2s infinite;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family:Montserrat,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"!important;
  font-size:1.2rem;
  margin:10px;
  &>div:nth-child(1){
    font-weight:500;
    font-size:1rem;
  }
  &>div:nth-child(2){
    font-size:.8rem;
  } 
  &>div:nth-child(3){ 
    font-size:.8rem;
  } 
  &>div:nth-child(4){
    background:redl;
    position:absolute;
    top:0px;
    bottom:0;
    left:0;
    right:0;
    font-size:6rem;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    font-weight:100;
    &>img{
      height:100px;
      // display:none;
    }
  }
`;

const Genesis = styled(LoadBadge)`
  background: linear-gradient(120deg, #89E5FF 30%, #f0f0f0 38%, #f0f0f0 40%, #89E5FF 48%);
  background-size: 200% 100%;
  background-position: 100% 0;
`
const Explorer = styled(LoadBadge)`
  background: linear-gradient(120deg, #88F0B3 30%, #f0f0f0 38%, #f0f0f0 40%, #88F0B3 48%);
  background-size: 200% 100%;
  background-position: 100% 0;
`
const Achiever = styled(LoadBadge)`
  background: linear-gradient(120deg, #FED59A 30%, #f0f0f0 38%, #f0f0f0 40%, #FED59A 48%);
  background-size: 200% 100%;
  background-position: 100% 0;
`
const Centurion = styled(LoadBadge)`
  background: linear-gradient(120deg, #FC95A1 30%, #f0f0f0 38%, #f0f0f0 40%, #FC95A1 48%);
  background-size: 200% 100%;
  background-position: 100% 0;
`
const Zenith = styled(LoadBadge)`
  background: linear-gradient(120deg, #FB5ABC 30%, #f0f0f0 38%, #f0f0f0 40%, #FB5ABC 48%);
  background-size: 200% 100%;
  background-position: 100% 0;
`
const Badge = ({ name, days, maxStreak }) => {

  // return (
  //   <LoadBadge>
  //     <div>{name}</div>
  //     <div style={{ fontSize: '.8rem', textAlign: 'center', marginTop: '3px' }}>{days} days</div>
  //     <div style={{ fontSize: '.8rem', textAlign: 'center' }}>streak</div>
  //   </LoadBadge>
  // ) 

  switch (name) {
    case 'Genesis': return (
      <Genesis>
        <div>{name}</div>
        <div>{days} days</div>
        <div>streak</div>
        <div>
          {maxStreak<10 && <img src='/icons/cross.png'/>}
        </div>
      </Genesis>
    )

    case 'Explorer': return (
      <Explorer>
        <div>{name}</div>
        <div>{days} days</div>
        <div>streak</div>
        <div>
          {maxStreak<30 && <img src='/icons/cross.png'/>}
        </div>
      </Explorer>
    )

    case 'Achiever': return (
      <Achiever>
        <div>{name}</div>
        <div>{days} days</div>
        <div>streak</div>
        <div>
          {maxStreak<50 && <img src='/icons/cross.png'/>}
        </div>
      </Achiever>
    )

    case 'Centurion': return (
      <Centurion>
        <div>{name}</div>
        <div>{days} days</div>
        <div>streak</div>
        <div>
          {maxStreak<100 && <img src='/icons/cross.png'/>}
        </div>
      </Centurion>
    )

    case 'Zenith': return (
      <Zenith>
        <div>{name}</div>
        <div>{days} days</div>
        <div>streak</div>
        <div>
          {maxStreak<180 && <img src='/icons/cross.png'/>}
        </div>
      </Zenith>
    )
  }

};

export default Badge;
