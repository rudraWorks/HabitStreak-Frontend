import React, { useEffect, useState } from 'react'
import HabitCard from '../../components/Habits'
import { Container, HabitsContainer, Img, Heading, ArchivedButton } from './Styles'
import { useNavigate,Link } from 'react-router-dom'
import AuthFailed from '../../components/AuthFailed'
import Loading from '../../components/Loading'
import useUser from '../../hooks/useUser'
import useNotificationBar from '../../hooks/useNotificationBar'
import { capitalize, getCurrentStreak, denomiator, isDoneToday } from '../../utils/utils'
import useTitle from '../../hooks/useTitle'

function Habits() {
  useTitle('My habits')
  const navigate = useNavigate() 
  const { user } = useUser()
  const { dispatchNotificationBar } = useNotificationBar()

  const [fetching,setFetching] = useState(false)
  const [habitsArr, setHabitsArr] = useState([])
  const [showArr, setShowArr] = useState([])

  const [toggleArchived,setToggleArchived] = useState(false)

  const showHabitDetails = (habitName) => {
    navigate(habitName)
  }

  useEffect(() => {
    setFetching(true)
    const fetchHabits = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/myhabits`, {
          method: 'GET',
          headers: {
            "authorization": user.token
          }
        })

        const json = await response.json()
        // console.log(json)
        if (!response.ok)
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })

        else {
          setHabitsArr(json.message)
        }
      }
      catch (e) {
        dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
      }
      setFetching(false)
    }
    if (user && user !== 'LOADING')
      fetchHabits()
  }, [user])

  useEffect(()=>{
    if(toggleArchived){
      setShowArr(habitsArr.filter((habit)=>habit.archived===1).sort((a, b) => ( isDoneToday(a.calendar) && !isDoneToday(b.calendar)) ? -1 : (!isDoneToday(a.calendar) && isDoneToday(b.calendar)) ? 1 : 0))
    }
    else {
      setShowArr(habitsArr.filter((habit)=>habit.archived===-1).sort((a, b) => ( isDoneToday(a.calendar) && !isDoneToday(b.calendar)) ? -1 : (!isDoneToday(a.calendar) && isDoneToday(b.calendar)) ? 1 : 0))
    } 
  },[habitsArr,toggleArchived])


  if (!user)
    return <AuthFailed />

  if (user === 'LOADING' || fetching)
    return <Loading />

  return (
    <center>
      <Heading>
        <span>My Habits</span>
        <ArchivedButton showArchived={toggleArchived} onClick={()=>setToggleArchived((p)=>!p)}>Archived habits</ArchivedButton>
      </Heading>

      <Container>
        <HabitsContainer>

          {
            showArr.map((habit,index)=>{
              return (
                <HabitCard key={index} onClick={() => showHabitDetails(capitalize(habit.name))} name={capitalize(habit.name)}   streak={getCurrentStreak(habit.calendar)} emoji={habit.emoji} current={getCurrentStreak(habit.calendar)} target={denomiator(getCurrentStreak(habit.calendar))} isDoneToday = {isDoneToday(habit.calendar)} />
              ) 
            })
          }
          {
            habitsArr.length===0 && (<div>
              <br/><br/>
              <Img src='/icons/magnifyingglassquestionmark.png'/>
              <br/><br/>
              <h3>You have not created any habit.</h3> 
              <br/>
              <Link to="/add">create now</Link>
            </div>)
          }

        </HabitsContainer>

      </Container>
    </center>
  )
}

export default Habits