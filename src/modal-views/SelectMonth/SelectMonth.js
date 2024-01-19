import React from 'react'
import { Container, List } from '../SelectYear/Style'
import useModal from '../../hooks/useModal'

function SelectMonth({monthsArr,setCurrentMonth}) {
    const {dispatchModal} = useModal()
    const handleMonth = (month) => {
        setCurrentMonth(month)
        dispatchModal({type:'CLOSE'})
    }
  return (
    <Container>
        <h2>Select Month</h2>
        {
            monthsArr.map((month)=>{ 
                return <List onClick={()=>handleMonth(month)}>{month}</List>
            })
        }
    </Container>
  )
}

export default SelectMonth