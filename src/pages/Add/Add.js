import React, { useEffect, useState } from 'react';
import { Container, Input, Left, Right, Button, ThemeButton, TypeContainer, ToggleButtonContainer, TypeLabelContainer } from './Styles';
import ToggleButton from './Toggle';
import useModal from '../../hooks/useModal';
import HabitType from '../../modal-views/HabitType/HabitType';
import AuthFailed from '../../components/AuthFailed';
import Loading from '../../components/Loading';
import useUser from '../../hooks/useUser';
import useNotificationBar from '../../hooks/useNotificationBar'
import { EmojiContainer } from './Styles';
import Emoji from '../../modal-views/Emoji/Emoji';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [chars, setChars] = useState(25);
  const { dispatchNotificationBar } = useNotificationBar()

  const [habitName, setHabitName] = useState('');
  const [habitType, setHabitType] = useState('Binary')
  const [emoji, setEmoji] = useState('✨')

  const navigate = useNavigate()

  const [startedTyping, setStartedTyping] = useState(false);

  const [submitting, setSubmitting] = useState(false)




  const { dispatchModal } = useModal();
  const { user } = useUser();

  const handleInput = (e) => {
    const len = e.target.value.length;
    setChars(25 - len);
    setHabitName(e.target.value);
    setStartedTyping(true);
  };



  const handleSubmit = () => {
    setSubmitting(true)
    const addHabit = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/add`, {
          method: 'POST',
          headers: {
            "Authorization": user.token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ habitName, habitType, habitEmoji: emoji })
        })

        const json = await response.json()
        if (!response.ok) {
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })
        }
        else {
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'success' } })
          setHabitName('')
          navigate(`/habits/${habitName}`)
        }
      }
      catch (e) {
        dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
      }
      setSubmitting(false)
    }
    addHabit()
  }

  useEffect(() => {
    if (chars <= 0) {
      setHabitName((p) => {
        return p.substring(0, 25);
      });
      setChars(0);
    }
  }, [chars]);


  if (user === 'LOADING') return <Loading />;

  return (
    <Container>
      <Left>
        <img src='/icons/dailyHabit.png' />
      </Left>
      <Right>
        {user ? (
          <>
            <h1>Start a daily habit</h1>

            <div>
              Habit name {startedTyping && <span style={{ marginLeft: 'auto' }}>({25 - chars}/25)</span>}
            </div>
            <Input value={habitName} onInput={handleInput} />

            <TypeContainer >
              <TypeLabelContainer>
                <img
                  onClick={() => dispatchModal({ type: 'SET_CONTENT', content: <HabitType /> })}
                  style={{ height: '35px', cursor: 'pointer', marginRight: '3px' }}
                  src='/icons/question.png'
                />
                <div style={{display:'flex',flexDirection:'column'}}> 
                  <span>Habit type &nbsp;</span>
                  <span style={{ color: 'navy', fontWeight: 'bolder' }}>{habitType}</span> 
                </div>

              </TypeLabelContainer>
              <ToggleButtonContainer>
                <ToggleButton setHabitType={setHabitType} />
              </ToggleButtonContainer>
            </TypeContainer>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <EmojiContainer>{emoji}</EmojiContainer>
              <ThemeButton onClick={() => dispatchModal({ type: 'SET_CONTENT', content: <Emoji setEmoji={setEmoji} /> })}>Change theme</ThemeButton>
            </div>
            <Button disabled={submitting} onClick={handleSubmit}>{submitting ? "Submitting..." : "Submit"}</Button>
          </>
        ) : (
          <AuthFailed />
        )}

      </Right>
    </Container>
  );
}

export default Add;
