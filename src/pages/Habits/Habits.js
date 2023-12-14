import React from 'react'
import HabitCard from '../../components/Habits'
import { Container, HabitsContainer } from './Styles'
import { useNavigate } from 'react-router-dom'

function Habits() {

  const navigate = useNavigate()

  const showHabitDetails = (habitName) => {
    navigate(habitName)
  }
  
  return (
    <center>
      <Container>
        <h1>My Habits</h1>

        <HabitsContainer>
          
          <HabitCard onClick={()=>showHabitDetails('Meditation Meditation are you r')} name="Meditation you will do" streak="23" emoji="🚀" current="10" target="21" />

          <HabitCard  onClick={()=>showHabitDetails('excercise')} name="Excercise" streak="10" emoji="💪"  current="10" target="21" />

          <HabitCard  onClick={()=>showHabitDetails('running')} name="Run" streak="3" emoji="✍️"  current="300" target="365" />

          <HabitCard  onClick={()=>showHabitDetails('sleep')} name="Excercise" streak="10" emoji="💪"  current="50" target="75"  />

          <HabitCard  onClick={()=>showHabitDetails('study')} name="what is my name please te" streak="3" emoji="✍️" current="140" target="200" />
        </HabitsContainer>

      </Container>
    </center>
  )
}

export default Habits