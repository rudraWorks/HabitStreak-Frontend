import React from 'react'
import { Container, List } from './Style'
import useModal from '../../hooks/useModal'

function SelectYear({yearsArr,setCurrentYear}) {
    const {dispatchModal} = useModal()
    const handleYear = (year) => {
        setCurrentYear(year)
        dispatchModal({type:'CLOSE'})
    }
  return (
    <Container>
        <h2>Select Year</h2>
        {
            yearsArr.map((year)=>{ 
                return <List onClick={()=>handleYear(year)}>{year}</List>
            })
        }
    </Container>
  )
}

export default SelectYear