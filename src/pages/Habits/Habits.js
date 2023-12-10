import React from 'react'
import HabitCard from '../../components/Habits'
import CalendarComponent from '../../components/Cal'
import { Container, HabitsContainer } from './Styles'

function Habits() {
  return (
    <center>
      <Container>
        <h1>My Habits</h1>
        <HabitsContainer>

          <HabitCard name="Meditation you will do" streak="23" emoji="🚀" current="10" target="21" />
          <HabitCard name="Excercise" streak="10" emoji="💪"  current="10" target="21" />
          <HabitCard name="Run" streak="3" emoji="✍️"  current="300" target="365" />
          <HabitCard name="Excercise" streak="10" emoji="💪"  current="50" target="75"  />
          <HabitCard name="what is my name please te" streak="3" emoji="✍️" current="140" target="200" />
        </HabitsContainer>

        <center>
          {/* <div style={{position:'absolute',bottom:'30px',left:'50%',transform:'translateX(-50%)'}}> */}
          {/* <CalendarComponent/> */}
          {/* </div> */}
        </center>
      </Container>
    </center>
  )
}

export default Habits