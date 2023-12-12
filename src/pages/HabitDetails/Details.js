import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'
import { Container, CalendarContainer, Calendar, HabitTitle, Streak, Today, StreakNumber, StreakDetails, DaysStreak } from './Styles'
import Checkbox from '../../components/Checkbox'
import CircularProgress from '../../components/CircularProgress'

function Details() {
  const { habitName } = useParams()
  const [toggle, setToggle] = useState(true)

  return (
    <center>
      <Container>

        <HabitTitle>{habitName}</HabitTitle>

        <Streak>
          <Today>
            <span>Today</span>
            {toggle ? <input /> : <Checkbox />} <button onClick={() => setToggle((p) => !p)}>Done</button>
          </Today>
          <img src='/icons/fire2.png' />
          <StreakNumber>60</StreakNumber>
          <DaysStreak>day streak! </DaysStreak>

        </Streak>

        <StreakDetails>
          <span>Current streak <b><small>60/100</small></b></span>
          <span>Longest streak <b><small>140</small></b></span>
        </StreakDetails>
 
        <CircularProgress x={50} y={100}></CircularProgress>
        <CalendarContainer>

          <Calendar>
            <span>2023</span>
            <CalendarComponent />
          </Calendar>

          {/* <Calendar>
            <span>2024</span>
            <CalendarComponent />
          </Calendar> */}
        </CalendarContainer>

      </Container>
    </center>
  )
}

export default Details