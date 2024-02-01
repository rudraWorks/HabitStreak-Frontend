import React, { useEffect, useState } from 'react'
import { Edit, RadioButtons } from './Components'
import { Container, Controls } from './Styles'
import { Input, Button } from './Styles'
import { getValueFromEpoch } from '../../utils/utils'
import Message from '../../components/SuccessFailureMessageBox'
import useModal from '../../hooks/useModal'
import useUser from '../../hooks/useUser'

function Retrospect({habit, type, calendar, setCalendar }) {
    const [epoch, setEpoch] = useState(null)
    const [error, setError] = useState('')
    const { dispatchModal } = useModal()
    const [progressValue, setProgressValue] = useState(0)
    const {user} = useUser()
    const [submitting,setSubmitting] = useState(false)

    useEffect(() => {
        if (epoch === null)
            setProgressValue('')
        else
            setProgressValue(getValueFromEpoch(calendar, epoch))
    }, [epoch])


    const submitHandler = async () => {
        if (!epoch)
            return setError('Select a date!')
        if (progressValue !== 0 && !progressValue)
            return setError('Input field can\'t be empty!')
        setSubmitting(true)
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/habit/today`, {
                method: 'PUT', 
                headers: {
                  "authorization": user.token,
                  "Content-Type": "application/json"
                }, 
                body: JSON.stringify({  value: progressValue, epoch: epoch, habit: habit })
              })
              const json = await response.json()
              if(response.ok){
                setCalendar((p) => {
                    let flag = false
                    for (let i = 0; i < p.length; ++i) {
                        if (p[i].epoch === epoch) {
                            p[i].value = progressValue
                            flag = true
                            break
                        }
                    } 
                    if (flag)
                        return [...p]
                    return [...p, { epoch: epoch, value: progressValue }]
                })
                dispatchModal({ type: 'CLOSE' })
              }
              else{ 
                setError(json.message)
              }

        }
        catch (e) {
            setError(e.message)
        }
        setSubmitting(false)
    }

    return (
        <Container>
            <h2>#floodFillGreen</h2>
            <h3>Edit your progress by navigating back in time (2 weeks), in case you missed recording any day. DON'T CHEAT</h3>
            <Edit setEpoch={setEpoch} calendar={calendar} />
            <Controls>
                {
                    type === 'Integer' ?
                        <Input type='number' onChange={(e) => setProgressValue(parseInt(e.target.value))} value={parseInt(progressValue)} disabled={epoch === null} />
                        :
                        <RadioButtons progressValue={progressValue} setProgressValue={setProgressValue} />
                }

                <Button disabled={submitting} onClick={submitHandler}>
                    {
                        submitting ?'Submitting...':'Submit'
                    }
                </Button>
            </Controls>
            {
                error && <Message error onClose={setError} showCloseButton>{error}</Message>
            }
        </Container>
    )
}

export default Retrospect


