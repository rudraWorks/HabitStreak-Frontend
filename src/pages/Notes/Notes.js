import React, { useEffect, useState } from 'react'
import { Container, Heading, Note, Delete, Date, Text, NotesContainer, Controls } from './Styles'
import DelSVG from '../../SVG/Delete'
import useModal from '../../hooks/useModal'
import AddNote from '../../modal-views/AddNote/AddNote'
import useUser from '../../hooks/useUser'
import Loading from '../../components/Loading'
import AuthFailed from '../../components/AuthFailed'
import Message from '../../components/SuccessFailureMessageBox'
import {  useNavigate } from 'react-router-dom'
import useNotificationBar from '../../hooks/useNotificationBar'
import Confirm from '../../modal-views/Confirm/Confirm'
import BetaTestingBadge from '../../components/BetaTestingFlag'
import { getDateFromEpoch } from '../../utils/utils'


function Notes() {
    const { dispatchModal } = useModal()
    const { user } = useUser()
    const [error,setError] = useState('')
    const [fetching,setFetching] = useState(false)
    const [titleArr,setTitleArr] = useState([])
    const navigate = useNavigate()
    const {dispatchNotificationBar} = useNotificationBar()
  
    useEffect(()=>{
        async function fetchTitles(){
            setFetching(true)

            try{
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/titles`,{ 
                    method:'GET',
                    headers:{
                        Authorization:user.token
                    }
                }) 
                const json = await response.json()
                // console.log(json);
                if(response.ok){ 
                    setTitleArr(json?.message?.notes?.reverse())
                }
                else{
                    setError(json.message)
                }

            }
            catch(e){
                setError(e.message)
            }

            setFetching(false)
        }
        if(user && user!=='LOADING')
            fetchTitles()
    },[user])

    // useEffect(()=>{
    //     console.log(titleArr);
    // },[titleArr]) 

    const deleteHandler = async (_id) => {

        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/notes/delete/${_id}`,{
                method:'DELETE',
                headers:{
                    Authorization:user.token
                }
            }) 

            const json = await response.json()
            if(response.ok){
                dispatchNotificationBar({
                    type:'SET_CONTENT',
                    content:{
                        message:json.message,
                        type:'success'
                    }
                })
                setTitleArr((p)=>{
                    return p.filter((item)=>item._id!==_id)
                })
            }
            else{
                dispatchNotificationBar({
                    type:'SET_CONTENT',
                    content:{
                        message:json.message,
                        type:'error'
                    }
                })
            }
        }
        catch(e){
            dispatchNotificationBar({
                type:'SET_CONTENT',
                content:{
                    message:e.message,
                    type:'error'
                }
            })
        }
    }



    if (!user)
        return <AuthFailed /> 

    if (user === 'LOADING' || fetching)
        return <Loading />

    return (
        <center>
            <Container>
                <Heading>
                    <span>My Pages <BetaTestingBadge/> </span>

                    <button 
                    onClick={() => dispatchModal({ type: 'SET_CONTENT', content: <AddNote titleArr={titleArr} 
                    setTitleArr={setTitleArr} /> })}
                    >
                        +
                    </button>
                </Heading>

                { 
                    error && (
                        <Message error >{error}</Message>
                    )
                }
                <NotesContainer>
                    {
                        (!titleArr || titleArr?.length===0) && <div>No page found!</div>
                    }    
                    {
                        titleArr?.map((item, index) => {
                            return ( 
                                <Note key={index} onClick={()=>navigate(item._id)}>
                                    <Text>
                                        {
                                        (item?.title?.length>50)?(item.title.slice(0,50)+"..."):item.title
                                        }
                                    </Text>

                                    <Controls>
                                        <Date>📅 {getDateFromEpoch(item.epoch)}</Date>  
                                        <Delete   
                                        onClick={(e)=>{
                                            e.stopPropagation(); 
                                            dispatchModal({
                                                type:'SET_CONTENT',
                                                content:<Confirm onConfirm={()=>deleteHandler(item._id)} />
                                            })
                                        }}
                                        >
                                            <button>delete</button>
                                        </Delete>
                                    </Controls>

                                </Note>
                            )
                        })
                    }
                </NotesContainer>
            </Container>
        </center> 

    )
}

export default Notes


