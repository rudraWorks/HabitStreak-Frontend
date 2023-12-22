import React from 'react'
import { Container, Section } from './Styles'
import {Button} from '../Add/Styles'
import { useNavigate } from 'react-router-dom'
import InstallPWAButton from '../../components/InstallApp'
import useModal from '../../hooks/useModal'

function About() {
  const navigate = useNavigate()
  const {dispatchModal} = useModal()
  return (
    <Container>
      <h2> <img src='/icons/docs.png' /> DailyStreak Documentation </h2>
      <p>
      Build habits, track your progress, get badges and achieve your goals with DailyStreak.
      </p>
      <br/> 
      <Section>
        <h3> <img src='/icons/calendar.png' /> Calendar Heatmap</h3>
        <ul>
          <li>Easily track daily habits and see progress at a glance.</li>
          <li>Visual progress tracking</li>
          <li>Different color shades for different intensities.</li>
        </ul> 
        <img src='/images/heatmap.png' onClick={()=>dispatchModal({type:'SET_CONTENT',content:<div><img src='/images/heatmap.png'/></div>})} />
      </Section>
        <br/>
      <Section>
        <h3><img src='/icons/fire.png' /> Streaks and badges</h3>
        <ul>
          <li>Aligned with goals, badges track progress, encouraging you to strive for the next achievement.</li>
          <li>Earning badges boosts self-esteem, fostering a positive self-perception.</li>
          <li>Achieving longer streaks provides you a sense of accomplishment, motivating continued positive behavior.</li>
        </ul> 
        <img src='/images/streak.png' onClick={()=>dispatchModal({type:'SET_CONTENT',content:<div><img src='/images/streak.png'/></div>})} />
        <br/>
        <img src='/images/streakline.png' onClick={()=>dispatchModal({type:'SET_CONTENT',content:<div><img src='/images/streakline.png'/></div>})} />
        <br/>
        <img src='/images/badgesgif.gif' onClick={()=>dispatchModal({type:'SET_CONTENT',content:<div><img src='/images/badgesgif.gif'/></div>})}/>
      </Section>
      <br/>
      <Section>
        <h3><img src='/icons/sand.png' /> Countdown (Hour, Day, Month and Year) </h3>
        <ul>
          <li>Promotes mindfulness, aiding in hourly efficiency and daily time management.</li>
          <li>Aligns with goals, aiding in monthly progress tracking and yearly perspective.</li>
          <li>Serves as a motivational tool, encouraging commitment and deadline management.</li>
        </ul> 
        <img src='/images/countdowngif.gif' onClick={()=>dispatchModal({type:'SET_CONTENT',content:<div><img src='/images/countdowngif.gif'/></div>})} />
      </Section>

      <br/>
      <Section>
        <h3><img src='/icons/features.png' /> Upcoming features</h3>
        <ul>
          <li>Leaderboard</li>
          <li>Community forum</li>
          <li>Productivity templates</li>
          <li>Dark mode</li>
          <li>Collaborate habits</li>
          <li>Reminders</li>
        </ul>
      </Section>
      <br/>
      <Section>
        <h3><img src='/icons/dollor.png' /> Pricing</h3>
        <Button style={{width:'200px',marginTop:'0'}} onClick={()=>navigate('/pro')} >Go to pricing page</Button>
      </Section>


      <br/>
      <Section>
        <h3><img src='/icons/app.png' /> Install App</h3>
        <InstallPWAButton/> 
      </Section>
 


    </Container>
  )
}

export default About