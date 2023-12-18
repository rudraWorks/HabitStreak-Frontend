import EmojiPicker from 'emoji-picker-react'
import React, {  useState } from 'react'
import { Container } from './Style'
import useModal from '../../hooks/useModal'

function Emoji({setEmoji,updateEmoji}) {
    const {dispatchModal}  = useModal()
    const emojiHandler  = (e) => {
        setEmoji(e.emoji)   
        dispatchModal({type:'CLOSE'})
        if(updateEmoji)
          updateEmoji(e.emoji)
    }

  return (
    <Container>
        <EmojiPicker emojiStyle="native" width='100%' onEmojiClick={emojiHandler} />
    </Container>
  )
}

export default Emoji