import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'
import { Container, CalendarContainer, Calendar, HabitTitle, Streak, Today, StreakNumber, StreakDetails, DaysStreak } from './Styles'
import Checkbox from '../../components/Checkbox'
import CircularProgress from '../../components/CircularProgress'
import StreakLine from '../../components/StreakLine'
import useNotficationBar from '../../hooks/useNotificationBar'

function Details() {
  const { habitName } = useParams()
  const [toggle, setToggle] = useState(true)
  const {dispatchNotificationBar} = useNotficationBar()

  useEffect(()=>{
    dispatchNotificationBar({type:'SET_CONTENT',content:{message:'info',type:'success'}})
  },[])
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
          <div>
            <span>Current Streak</span>        
            <div>
              <CircularProgress x={30} y={100}></CircularProgress>
            </div>
          </div>
          {/* <span>Longest streak <b><small>140</small></b></span> */}
        </StreakDetails>

        <StreakLine streak={13} />
 
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