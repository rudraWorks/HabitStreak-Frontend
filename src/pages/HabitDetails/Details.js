import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'
import { Container, CalendarContainer, Calendar, HabitTitle, Streak, Today, StreakDetails, Emoji } from './Styles'
import Checkbox from '../../components/Checkbox'
import CircularProgress from '../../components/CircularProgress'
import StreakLine from '../../components/StreakLine'
import useNotficationBar from '../../hooks/useNotificationBar'
import AuthFailed from '../../components/AuthFailed'
import Loading from '../../components/Loading'
import useUser from '../../hooks/useUser'
import { capitalize, todaysEpoch } from '../../utils/utils'
import Notfound from '../../components/Notfound'
import EmojiModal from '../../modal-views/Emoji/Emoji'
import useModal from '../../hooks/useModal'
import Settings from '../../modal-views/Settings/Settings'

function Details() {
  const { habitName } = useParams()
  const [habit,setHabit] = useState(habitName) 
  const { dispatchNotificationBar } = useNotficationBar()
  const [submitting, setSubmitting] = useState(false)
  const [progressValue, setProgressValue] = useState(null)
  const [notfound, setNotfound] = useState(false)
  const [emoji,setEmoji] = useState(null)
  const [calendar,setCalendar] = useState([])
  const hoverRef = useRef(null)
  const [streak,setStreak] = useState(0)



  const [fetching, setFetching] = useState(false)
  const { user } = useUser()
  const {dispatchModal} = useModal()

  const [fetchedResponse, setFetchedResponse] = useState(null)




  const handleSubmit = () => {
    setSubmitting(true)
    const addTodaysProgress = async (req, res) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/today`, {
          method: 'PUT',
          headers: {
            "authorization": user.token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ type: fetchedResponse.type, value: progressValue, epoch: todaysEpoch(), habit: habit })
        })
        const json = await response.json()
        console.log(json);
        if (!response.ok)
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })
        else{
          dispatchNotificationBar({type:'SET_CONTENT',content:{message:'Today\'s progress is saved',type:'success'}})
          setCalendar((p)=>{
            if(progressValue===0)
              return [...p.filter((item)=>item.epoch!==todaysEpoch())]
            p = p.filter((item)=>item.epoch !== todaysEpoch())
            return [...p,{epoch:todaysEpoch(),value:progressValue}]
          })
        }
      }
      catch (e) {
        dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
      }
      setSubmitting(false)
    }
    addTodaysProgress()
  }


  useEffect(() => {
    setFetching(true)
    const fetchHabitDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/details?habitName=${habit}`, {
          method: 'GET',
          headers: {
            "authorization": user.token
          }
        })

        const json = await response.json()
        console.log(json)

        if (response.status === 404)
          setNotfound(true)
        else if (!response.ok)
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })
        else
          setFetchedResponse(json)
      }
      catch (e) {
        dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
      }
      setFetching(false)
    }
    if (user && user !== 'LOADING')
      fetchHabitDetails()
      setHabit(habitName)
  }, [habitName, user])

  useEffect(() => {
    if (fetchedResponse) {
      let flag = 0
      let value

      for (let i = 0; i < fetchedResponse.calendar.length; ++i) {
        if (fetchedResponse.calendar[i].epoch === todaysEpoch()) {
          flag = 1
          value = fetchedResponse.calendar[i].value
          break
        }
      }
       
      if(flag)
        setProgressValue(value)

      setEmoji(fetchedResponse.emoji)
      setCalendar(fetchedResponse.calendar.filter((item)=>item.value!==0))

    }
  }, [fetchedResponse])

  useEffect(()=>{ 
    let index = -1
    for(let i=0;i<calendar.length;++i){
      if(calendar[i].epoch===todaysEpoch()-1000*60*60*24){
        index=i
        break
      }
    }
    let str = 0
    if(index!==-1){
      let cnt=1
      for(let i=index;i>=1;--i){
        if(calendar[i].epoch-calendar[i-1].epoch===1000*60*60*24)
          ++cnt 
        else break
      }
      str+=cnt
    }
    if(progressValue)
      setStreak(str+1)
    else 
      setStreak(str)
  },[calendar])

  const updateEmoji = async (newEmoji) => {
    try{
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/updateEmoji`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization':user.token
        },
        body:JSON.stringify({habit,emoji:newEmoji})
      })
      const json = await response.json()

      dispatchNotificationBar({type:'SET_CONTENT',content:{message:json.message,type:!response.ok?'error':'success'}})
    }
    catch(e){
      dispatchNotificationBar({type:'SET_CONTENT',content:{message:e.message,type:'error'}})
    }
  }

  if (!user)
    return <AuthFailed />

  if (user === 'LOADING' || fetching) 
    return <Loading />

  if (notfound)
    return <Notfound />

  return (
    <center>
      <Container> 
          <HabitTitle>
            {capitalize(habit)}
            <img style={{cursor:'pointer'}} onClick={()=>dispatchModal({type:'SET_CONTENT',content:<Settings setHabit={setHabit} habit={habit} user={user} />})} src='/icons/settings.png' />
          </HabitTitle>
        <Streak>
          <Today>
            <span>Today</span>
            {fetchedResponse?.type === 'Integer' ? <input value={progressValue} type='Number' onInput={(e) => setProgressValue(parseInt(e.target.value))} /> : <Checkbox progressValue={progressValue} setProgressValue={setProgressValue} />}
            <button disabled={submitting} onClick={handleSubmit}>{submitting ? "Submitting..." : "Submit"}</button>

          </Today>
          {/* <img src='/icons/fire2.png' /> */}
          <Emoji >
            <div style={{cursor:'pointer'}}  onClick={()=>dispatchModal({type:'SET_CONTENT',content:<EmojiModal updateEmoji={updateEmoji} setEmoji={setEmoji}/>})}>
              {emoji}
            </div>
            <div></div>
            <span>{streak}</span> 
            <span>days streak!</span>
          </Emoji>

        </Streak>

        <StreakDetails>
          <div>
            <span>Current Streak</span>
            <div>
              <CircularProgress x={streak} y={10}></CircularProgress>
            </div>
          </div>
          {/* <span>Longest streak <b><small>140</small></b></span> */}
        </StreakDetails>

        <StreakLine streak={streak} />

        <CalendarContainer>

          <Calendar>
            <div style={{display:'flex'}}>
            <span style={{marginRight:'auto',marginLeft:'10px'}} ref={hoverRef}></span><span>2023</span>
            </div>
            <CalendarComponent hoverRef={hoverRef} calendar={calendar} /> 
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