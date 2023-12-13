import React, { useEffect, useState } from 'react'
import { Container, Input, Left, Right, Button } from './Styles'
import ToggleButton from './Toggle'
import useModal from '../../hooks/useModal'
import HabitType from '../../modal-views/HabitType/HabitType'

function Add() {

  const [integral, setIntegral] = useState(false)
  const [chars, setChars] = useState(25)
  const [habitName, setHabitName] = useState('')
  const [startedTyping, setStartedTyping] = useState(false)

  const { dispatchModal } = useModal()

  const handleInput = (e) => {
    const len = e.target.value.length
    setChars(25 - len)
    setHabitName(e.target.value)
    setStartedTyping(true)
  }

  useEffect(() => {
    if (chars <= 0) {
      setHabitName((p) => {
        return p.substring(0, 25)
      })
      setChars(0)
    }
  }, [chars])

  return (
    <Container>
      <Left>
        {/* <img src='/images/meditation.jpg' /> */}
        <img src='/icons/dailyHabit.png' />
      </Left>
      <Right>
        <h1>Start a daily habit</h1>
        <div>Habit name {startedTyping && <span style={{ marginLeft: 'auto' }}>({25 - chars}/25)</span>}</div>
        <Input value={habitName} onInput={handleInput} />

        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', background: 'redl', width: '90%' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              onClick={() => dispatchModal({ type: 'SET_CONTENT', content: <HabitType /> })}
              style={{ height: '25px',cursor:'pointer' }}
              src='/icons/question.png'
            />
            Habit type &nbsp;
            <span style={{ color: 'navy', fontWeight: 'bolder' }}>{integral ? 'integer' : 'binary'}</span>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <ToggleButton setIntegral={setIntegral} />
          </div>
        </div>


        <Button>Start</Button>
      </Right>
    </Container>
  )
}



export default Add