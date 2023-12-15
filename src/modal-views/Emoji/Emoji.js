import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import { Container } from './Style'
import useModal from '../../hooks/useModal'

function Emoji({setEmoji}) {
    const {dispatchModal}  = useModal()
    const emojiHandler  = (e) => {
        setEmoji(e.emoji)
        dispatchModal({type:'CLOSE'})
    }
  return (
    <Container>
        <EmojiPicker emojiStyle="native" width='100%' onEmojiClick={emojiHandler} />
    </Container>
  )
}

export default Emoji