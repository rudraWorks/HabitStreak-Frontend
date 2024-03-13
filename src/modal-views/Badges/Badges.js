import { Container } from "./Styles";
import Badge from "../../components/Badge";
import React from 'react'

function Badges({ maxStreak }) {
  // alert(maxStreak)
  return (
    <div style={{width:'690px',textAlign:'center',background:'redl',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
      <h2 style={{  marginBottom: '10px' }}>Your maximum streak is {maxStreak} days</h2>
      <h4 style={{ textAlign: 'center',display:'flex',flexWrap:'wrap',justifyContent:'center' }}>
      <span style={{ color: maxStreak >= 10 ? 'orange' : 'black' }}>
  &nbsp;<span style={{ textDecoration: maxStreak < 10 ? 'line-through' : 'normal' }}>Genesis</span>
  <sup>10</sup>
  &nbsp;
</span>
<span style={{ color: maxStreak >= 30 ? 'orange' : 'black' }}>
  &nbsp;<span style={{ textDecoration: maxStreak < 30 ? 'line-through' : 'normal' }}>Explorer</span>
  <sup>30</sup>
  &nbsp;
</span>
<span style={{ color: maxStreak >= 50 ? 'orange' : 'black' }}>
  &nbsp;<span style={{ textDecoration: maxStreak < 50 ? 'line-through' : 'normal' }}>Achiever</span>
  <sup>50</sup>
  &nbsp;
</span>
<span style={{ color: maxStreak >= 100 ? 'orange' : 'black' }}>
  &nbsp;<span style={{ textDecoration: maxStreak < 100 ? 'line-through' : 'normal' }}>Centurion</span>
  <sup>100</sup>
  &nbsp;
</span>
<span style={{ color: maxStreak >= 180 ? 'orange' : 'black' }}>
  &nbsp;<span style={{ textDecoration: maxStreak < 180 ? 'line-through' : 'normal' }}>Zenith</span>
  <sup>180</sup>
  &nbsp;
</span>

      </h4>
      <Container>
        <Badge name={"Genesis"} maxStreak={maxStreak} days={10} />
        <Badge name={"Explorer"} maxStreak={maxStreak} days={30} />
        <Badge name={"Achiever"} maxStreak={maxStreak} days={50} />
        <Badge name={"Centurion"} maxStreak={maxStreak} days={100} />
        <Badge name={"Zenith"} maxStreak={maxStreak} days={180} />
      </Container>
    </div>
  )
}

export default Badges