import React from 'react'
import { useParams } from 'react-router-dom'
import CalendarComponent from '../../components/Cal'

function Details() {
    const {habitName} = useParams()
  return (
    <center>
        <h1 style={{marginBottom:'270px'}}>{habitName}</h1>
        <br/>
        <CalendarComponent/>
    </center>
  )
}

export default Details