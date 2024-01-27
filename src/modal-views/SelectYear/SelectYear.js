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
            yearsArr.map((year,index)=>{ 
                return <List key={index} onClick={()=>handleYear(year)}>{year}</List>
            })
        }
        {
            (yearsArr?.length===0) && <List onClick={()=>handleYear(new Date().getFullYear())}>{new Date().getFullYear()}</List>
        }
    </Container>
  )
}

export default SelectYear