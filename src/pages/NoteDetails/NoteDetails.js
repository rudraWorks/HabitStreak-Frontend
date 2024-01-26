import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import AuthFailed from '../../components/AuthFailed'
import Loading from '../../components/Loading'
import { Back, Container, Delete, Edit, ImageContainer, ImageWrapper, Text, Title } from './Styles'
import useModal from '../../hooks/useModal'
import Confirm from '../../modal-views/Confirm/Confirm'
import useNotificationBar from '../../hooks/useNotificationBar'
import { useNavigate } from 'react-router-dom'
import AddNote from '../../modal-views/AddNote/AddNote'

function NoteDetails() {
    const { noteId } = useParams()
    const { user } = useUser()
    const [fetching, setFetching] = useState(false)
    const [details, setDetails] = useState(null)
    const [error, setError] = useState('')
    const { dispatchModal } = useModal()
    const { dispatchNotificationBar } = useNotificationBar()
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchDetails() {
            setFetching(true)
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/details/${noteId}`, {
                    method: 'GET',
                    headers: {
                        Authorization: user.token
                    }
                })
                const json = await response.json()
                // console.log(json);
                if (response.ok) {
                    setDetails(json)
                }
                else {
                    setError(json.message)
                }
            }
            catch (e) {
                setError(e.message)
            }
            setFetching(false)
        }
        if (user && user !== 'LOADING')
            fetchDetails()
    }, [user, noteId])

    const deleteHandler = async (_id) => {

        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/delete/${_id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: user.token
                }
            })

            const json = await response.json()
            if (response.ok) {
                dispatchNotificationBar({
                    type: 'SET_CONTENT',
                    content: {
                        message: json.message,
                        type: 'success'
                    }
                })
                navigate('/pages')
            }
            else {
                dispatchNotificationBar({
                    type: 'SET_CONTENT',
                    content: {
                        message: json.message,
                        type: 'error'
                    }
                })
            }
        }
        catch (e) {
            dispatchNotificationBar({
                type: 'SET_CONTENT',
                content: {
                    message: e.message,
                    type: 'error'
                }
            })
        }
    }

    if (error)
        return <div>{error}</div>
    if (!user)
        return <AuthFailed />

    if (user === 'LOADING' || fetching)
        return <Loading />

    return (
        <center>
            <Container>
                <Title>
                    <h3>
                        {/* <Back onClick={() => navigate('/notes')}>&#9668;</Back> */}
                        {details?.title}
                    </h3>
                    <div>
                        <Edit
                            onClick={()=>{
                             return dispatchModal({type:'SET_CONTENT',content:<AddNote edit details={details} setDetails={setDetails} />})
                            }}
                        >
                            Edit
                        </Edit>
                        <Delete
                            onClick={
                                () => dispatchModal({ type: 'SET_CONTENT', content: <Confirm onConfirm={() => deleteHandler(details._id)} /> })}
                        >
                            Delete
                        </Delete>
                        <span>{details && new Date(details.epoch).toLocaleDateString('en-GB')}</span>
                    </div>

                </Title>
                <ImageContainer>
                    {
                        details?.images?.map((img) => {
                            return ( 
                                <ImageWrapper key={img}>
                                    <img 
                                    onClick={()=>dispatchModal({type:'SET_CONTENT',content:<img src={img}/>})} src={img} 
                                    />
                                </ImageWrapper>
                            )
                        })
                    }
                </ImageContainer>
                <Text >
                    <pre>
                        {details?.text}
                    </pre>
                </Text>
            </Container>
        </center>

    )
}

export default NoteDetails


