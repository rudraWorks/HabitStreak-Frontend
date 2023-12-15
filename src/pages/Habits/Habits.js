import React, { useEffect, useState } from 'react'
import HabitCard from '../../components/Habits'
import { Container, HabitsContainer } from './Styles'
import { useNavigate } from 'react-router-dom'
import AuthFailed from '../../components/AuthFailed'
import Loading from '../../components/Loading'
import useUser from '../../hooks/useUser'
import useNotificationBar from '../../hooks/useNotificationBar'

function Habits() {

  const navigate = useNavigate()
  const { user } = useUser()
  const { dispatchNotificationBar } = useNotificationBar()

  const [habitsArr, setHabitsArr] = useState([])

  const showHabitDetails = (habitName) => {
    navigate(habitName)
  }

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/myhabits`, {
          method: 'GET',
          headers: {
            "authorization": user.token
          }
        })

        const json = await response.json()
        console.log(json)

        if (!response.ok)
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })

        else {
          setHabitsArr(json.message)
        }
      }
      catch (e) {
        dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
      }
    }
    if (user && user !== 'LOADING')
      fetchHabits()
  }, [user])

  if (user === 'LOADING')
    return <Loading />
  if (!user)
    return <AuthFailed />


  return (
    <center>
      <Container>
        <h1>My Habits</h1>

        <HabitsContainer>

          {
            habitsArr.map((habit,index)=>{
              return (
                <HabitCard key={index} onClick={() => showHabitDetails('excercise')} name={habit.name}   streak="10" emoji={habit.emoji} current="10" target="21" />
              )
            })
          }


        </HabitsContainer>

      </Container>
    </center>
  )
}

export default Habits