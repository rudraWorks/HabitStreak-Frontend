import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'
import { Container, CalendarContainer, Calendar, HabitTitle, Streak, Today, StreakNumber, StreakDetails, DaysStreak } from './Styles'
import Checkbox from '../../components/Checkbox'
import CircularProgress from '../../components/CircularProgress'
import StreakLine from '../../components/StreakLine'
import useNotficationBar from '../../hooks/useNotificationBar'
import AuthFailed from '../../components/AuthFailed'
import Loading from '../../components/Loading'
import useUser from '../../hooks/useUser'
import { capitalize } from '../../utils/utils'

function Details() {
  const { habitName } = useParams()
  const [toggle, setToggle] = useState(true)
  const { dispatchNotificationBar } = useNotficationBar()
  const [submitting, setSubmitting] = useState(false)
  const { user } = useUser()



  const handleSubmit = () => {
    setSubmitting(true)
    // const addHabit = async () => {
    //   try {
    //     const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/add`, {
    //       method: 'POST',
    //       headers: { 
    //         "authorization": user.token,
    //         "Content-Type": "application/json"
    //       }, 
    //       body: JSON.stringify({ habitName, habitType, habitEmoji:emoji })
    //     })

    //     const json = await response.json()
    //     if (!response.ok) {
    //       dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })
    //     }
    //     else {
    //       dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'success' } })
    //       setHabitName('')
    //     }
    //   }
    //   catch (e) {
    //     dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
    //   }
    //   setSubmitting(false)
    // }
    // addHabit()
  }


  useEffect(()=>{
    const loadHabitDetails = async () => {
      try{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/details?habitName=${habitName}`, {
          method: 'GET',
          headers: {
            "authorization": user.token
          }
        })
        
        const json = await response.json()
        console.log(json)
      }
      catch(e){
        dispatchNotificationBar({type:'SET_CONTENT',content:{message:e.message,type:'error'}})
      }
    }
    if(user && user!=='LOADING')
      loadHabitDetails()
  },[habitName,user])
 
  if (user === 'LOADING')
    return <Loading />
  if (!user)
    return <AuthFailed />

  return (
    <center>
      <Container>

        <HabitTitle>{capitalize(habitName)}</HabitTitle>

        <Streak>
          <Today>
            <span>Today</span>
            {toggle ? <input /> : <Checkbox />}             
            <button disabled={submitting} onClick={handleSubmit}>{submitting ? "Submitting..." : "Submit"}</button>

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