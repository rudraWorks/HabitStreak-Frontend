import React from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'
import { Container, Calendar, HabitTitle, Streak, Today, StreakNumber, StreakDetails, DaysStreak } from './Styles'

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
          <span>Current Streak <b><small>60/100</small></b></span>
          <span>Max Streak <b><small>140</small></b></span>

        </StreakDetails>

        <Calendar><CalendarComponent /></Calendar>

      </Container>
    </center>
  )
}

export default Details