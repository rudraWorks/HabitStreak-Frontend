import { Container } from "./Styles";
import Badge from "../../components/Badge";
import React from 'react'

function Badges({maxStreak}) {
  // alert(maxStreak)
  return ( 
    <div> 
    <h3 style={{textAlign:'center',marginBottom:'10px',fontWeight:'200'}}>Your maximum streak is {maxStreak} days</h3> 
    <Container>
        <Badge name={"Genesis"} maxStreak={maxStreak} days={10}/>
        <Badge name={"Explorer"} maxStreak={maxStreak} days={30}/>
        <Badge name={"Achiever"} maxStreak={maxStreak} days={50}/>
        <Badge name={"Centurion"} maxStreak={maxStreak} days={100}/>
        <Badge name={"Zenith"} maxStreak={maxStreak} days={180}/>
    </Container>
    </div>
  )
}

export default Badges