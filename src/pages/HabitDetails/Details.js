import React from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'
import { Container, Calendar, HabitTitle, Streak, Today, StreakNumber, StreakDetails, DaysStreak } from './Styles'
import { Streak as Sk } from '../../components/Habits'

function Details() {
  const { habitName } = useParams()

  return (
    <center>
      <Container>

        <HabitTitle>{habitName}</HabitTitle>

        <Streak>
          <Today>
            <span>Today</span>
            <input /> <button>Done</button>
          </Today>
          <img src='/icons/fire2.png' />
          <StreakNumber>60</StreakNumber>
          <DaysStreak>day streak! </DaysStreak>

        </Streak>

        <StreakDetails>
          <span>Current Streak <Sk style={{display:'inline-block',background:'#FBBF24', color:'white'}}>60/100</Sk></span>
          <span>Max Streak <Sk style={{display:'inline-block',background:'#FBBF24',color:'white'}}>140</Sk></span>

        </StreakDetails>

        <Calendar><CalendarComponent /></Calendar>

      </Container>
    </center>
  )
}

export default Details