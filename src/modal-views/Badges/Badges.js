import { Container } from "./Styles";
import Badge from "../../components/Badge";
import React from 'react'

function Badges({maxStreak}) {
  return (
    <Container>
        <Badge name={"Genesis"} maxStreak={maxStreak} days={10}/>
        <Badge name={"Explorer"} maxStreak={maxStreak} days={30}/>
        <Badge name={"Achiever"} maxStreak={maxStreak} days={50}/>
        <Badge name={"Centurion"} maxStreak={maxStreak} days={100}/>
        <Badge name={"Zenith"} maxStreak={maxStreak} days={180}/>
    </Container>
  )
}

export default Badges