import React, { useEffect, useState } from 'react';
import { Container, Input, Left, Right, Button, ThemeButton } from './Styles';
import ToggleButton from './Toggle';
import useModal from '../../hooks/useModal';
import HabitType from '../../modal-views/HabitType/HabitType';
import AuthFailed from '../../components/AuthFailed';
import Loading from '../../components/Loading';
import useUser from '../../hooks/useUser';
import useNotificationBar from '../../hooks/useNotificationBar'
import { EmojiContainer } from './Styles';
import Emoji from '../../modal-views/Emoji/Emoji';

function Add() {
  const [chars, setChars] = useState(25);
  const { dispatchNotificationBar } = useNotificationBar()

  const [habitName, setHabitName] = useState('');
  const [habitType, setHabitType] = useState('Binary')
  const [emoji, setEmoji] = useState('✨')



  const [startedTyping, setStartedTyping] = useState(false);

  const [submit, setSubmit] = useState(false)




  const { dispatchModal } = useModal();
  const { user } = useUser();

  const handleInput = (e) => {
    const len = e.target.value.length;
    setChars(25 - len);
    setHabitName(e.target.value);
    setStartedTyping(true);
  };



  const handleSubmit = () => {
    setSubmit(true)
    const addHabit = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/add`, {
          method: 'POST',
          headers: {
            "authorization": user.token,
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify({ habitName, habitType, habitEmoji:emoji })
        })

        const json = await response.json()
        if (!response.ok) {
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'error' } })
        }
        else {
          dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: json.message, type: 'success' } })
          setHabitName('')
        }
      }
      catch (e) {
        dispatchNotificationBar({ type: 'SET_CONTENT', content: { message: e.message, type: 'error' } })
      }
      setSubmit(false)
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

            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', background: 'redl', width: '90%' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  onClick={() => dispatchModal({ type: 'SET_CONTENT', content: <HabitType /> })}
                  style={{ height: '25px', cursor: 'pointer',marginRight:'3px' }}
                  src='/icons/question.png'
                />
                Habit type &nbsp;
                <span style={{ color: 'navy', fontWeight: 'bolder' }}>{habitType}</span>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <ToggleButton setHabitType={setHabitType} />
              </div>
            </div>
            <br />
            <div style={{ display: 'flex',alignItems:'center' }}>
              <EmojiContainer>{emoji}</EmojiContainer>
              <ThemeButton onClick={()=>dispatchModal({type:'SET_CONTENT',content:<Emoji setEmoji={setEmoji}/>})}>Change theme</ThemeButton>
            </div>
            <Button disabled={submit} onClick={handleSubmit}>{submit ? "Submitting..." : "Submit"}</Button>
          </>
        ) : (
          <AuthFailed />
        )}

      </Right>
    </Container>
  );
}

export default Add;
