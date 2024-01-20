import React, { useEffect, useState } from 'react'
import HabitCard from '../../components/Habits'
import { Container, HabitsContainer, Img, Heading, ArchivedButton, HabitsContainerRowView, Row, HabitNameInRow, ViewButton, Controls, ControlButton } from './Styles'
import { useNavigate, Link } from 'react-router-dom'
import AuthFailed from '../../components/AuthFailed'
import Loading from '../../components/Loading'
import useUser from '../../hooks/useUser'
import useNotificationBar from '../../hooks/useNotificationBar'
import { capitalize, getCurrentStreak, denomiator, isDoneToday, getCurrentMonthAndYear, getAvailableMonthsAndYears, enableRowModeInLocalStorage, isRowModeEnabledInLocalStorage } from '../../utils/utils'
import useTitle from '../../hooks/useTitle'
import { DayBoxesContainer, MonthDatesRow } from './Components'
import useModal from '../../hooks/useModal'
import SelectYear from '../../modal-views/SelectYear/SelectYear'
import SelectMonth from '../../modal-views/SelectMonth/SelectMonth'
import GridTheme from '../../modal-views/GridTheme/GridTheme'

function Habits() {
  useTitle('My habits')
  const navigate = useNavigate()
  const { user } = useUser()
  const { dispatchNotificationBar } = useNotificationBar()

  const [fetching, setFetching] = useState(false)
  const [habitsArr, setHabitsArr] = useState([])
  const [showArr, setShowArr] = useState([])

  const [toggleArchived, setToggleArchived] = useState(false)
  const [toggleRowView, setToggleRowView] = useState(isRowModeEnabledInLocalStorage())

  const [currentMonth, setCurrentMonth] = useState(getCurrentMonthAndYear().month)
  const [currentYear, setCurrentYear] = useState(getCurrentMonthAndYear().year)

  const [availableMonths, setAvailableMonths] = useState([])
  const [availableYears, setAvailableYears] = useState([])

  const {dispatchModal} = useModal()

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

  useEffect(() => {
    if (toggleArchived) {
      setShowArr(habitsArr.filter((habit) => habit.archived === 1).sort((a, b) => (isDoneToday(a.calendar) && !isDoneToday(b.calendar)) ? -1 : (!isDoneToday(a.calendar) && isDoneToday(b.calendar)) ? 1 : 0))
    }
    else {
      setShowArr(habitsArr.filter((habit) => habit.archived === -1).sort((a, b) => (isDoneToday(a.calendar) && !isDoneToday(b.calendar)) ? -1 : (!isDoneToday(a.calendar) && isDoneToday(b.calendar)) ? 1 : 0))
    }

    // console.log(getAvailableMonthsAndYears(habitsArr))
    const availableMonthsAndYear = getAvailableMonthsAndYears(habitsArr)
    setAvailableMonths(availableMonthsAndYear.months)
    setAvailableYears(availableMonthsAndYear.years)

  }, [habitsArr, toggleArchived]) 

  useEffect(()=>{
    enableRowModeInLocalStorage(toggleRowView)
  },[toggleRowView])

  if (!user)
    return <AuthFailed />

  if (user === 'LOADING' || fetching)
    return <Loading />

  // console.log(getCurrentMonthAndYear())

  return (
    <center>
      <Heading>
        <span>My Habits</span>
        <div>
          <ViewButton showRow={toggleRowView} onClick={() => setToggleRowView((p) => !p)}>Row view</ViewButton>
          <ArchivedButton showArchived={toggleArchived} onClick={() => setToggleArchived((p) => !p)}>
            Archived habits
          </ArchivedButton>
        </div>
      </Heading>

      <Container>
        {showArr.length===0 && habitsArr.length!==0 && <div>No result!</div>}
        {
          toggleRowView && showArr.length!==0 &&
          <HabitsContainerRowView>
            <Row style={{ background: 'transparent', width: '100%', display: 'flex', marginBottom: '15px', border: 'none', justifyContent: 'center', position: 'sticky', left: '0' }}>
              <Controls>
                <ControlButton onClick={()=>dispatchModal({type:'SET_CONTENT',content:<SelectMonth monthsArr={availableMonths} setCurrentMonth={setCurrentMonth} />})}>{currentMonth} <span>&#9660;</span></ControlButton>
                &nbsp; 
                <ControlButton  onClick={()=>dispatchModal({type:'SET_CONTENT',content:<SelectYear yearsArr={availableYears} setCurrentYear={setCurrentYear} />})}>{currentYear} <span>&#9660;</span></ControlButton>
                &nbsp; 
                <ControlButton  onClick={()=>dispatchModal({type:'SET_CONTENT',content:<GridTheme/>})}>Theme <span>&#9660;</span></ControlButton>


              </Controls>
            </Row>
            <Row index="toprow" style={{ background: '#BFDBFEl', marginBottom: '3px', borderRadius: '5px' }}>
              <HabitNameInRow style={{ background: '#6B7280l', color: 'black', fontWeight: 'bolder', color: 'white', background: 'white' }}>
              </HabitNameInRow>
              <MonthDatesRow month={currentMonth} year={currentYear} />
            </Row>
            {
              showArr.map((habit, index) => {
                return (
                  <Row key={index} >
                    <HabitNameInRow onClick={() => showHabitDetails(capitalize(habit.name))}>
                      {habit.emoji}&nbsp;
                      <span style={{ background: 'redl' }}>{habit.name.length > 15 ? capitalize(habit.name.slice(0, 15)) + '..' : capitalize(habit.name)}</span>
                    </HabitNameInRow>
                    <DayBoxesContainer name={habit.name}  habits={habitsArr} month={currentMonth} year={currentYear} />
                  </Row>
                )
              })
            }
          </HabitsContainerRowView>
        }
        <HabitsContainer>
          {
            !toggleRowView &&
            showArr.map((habit, index) => {
              return (
                <HabitCard key={index} onClick={() => showHabitDetails(capitalize(habit.name))} name={capitalize(habit.name)} streak={getCurrentStreak(habit.calendar)} emoji={habit.emoji} current={getCurrentStreak(habit.calendar)} target={denomiator(getCurrentStreak(habit.calendar))} isDoneToday={isDoneToday(habit.calendar)} />
              )
            })
          }
          {
            habitsArr.length === 0 && (<div>
              <br /><br />
              <Img src='/icons/magnifyingglassquestionmark.png' />
              <br /><br />
              <h3>You have not created any habit.</h3>
              <br />
              <Link to="/add">create now</Link>
            </div>)
          }
        </HabitsContainer>
      </Container>
    </center>
  )
}

export default Habits