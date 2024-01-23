import React from 'react';
import styled from 'styled-components';
import { getBackgroundColor, getMondayDate, getTodaysEpoch } from '../../utils/utils';

const Box = styled.div`
    width: 35px;
  max-width: 35px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-left: 25px;
  margin-right: 25px;
  @media only screen and (max-width: 600px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 7px;
    width: 30px;
    max-width: 30px;
    height: 30px;
  }
`;


const WeekComponent = ({ weekInfo }) => {

    let weekStartEpoch = new Date(getMondayDate()).getTime()
    
    const weekInfoTemp = []
    while(weekInfo.length && weekInfo[0].epoch>weekStartEpoch){
        weekInfoTemp.push({color:'#fff',value:'0'})
        weekStartEpoch+=24*60*60*1000
    }
    weekStartEpoch = new Date(getMondayDate()).getTime()

    if(weekInfo.length===0){
        const todaysEpoch = getTodaysEpoch()
        while(weekStartEpoch<todaysEpoch){
            weekInfoTemp.push({color:'#fff',value:'0'})
            weekStartEpoch+=24*60*60*1000
        }
    }

    for(let i=0;i<weekInfo.length;++i){
        weekInfoTemp.push(weekInfo[i])
    } 
    // console.log(weekInfo)
    weekInfo = weekInfoTemp
    // console.log(weekInfoTemp)

    const dayValues = weekInfo.map((day)=>{
        return {
            color: getBackgroundColor(day.value,weekInfo),
            value: day.value
        }
    })

    while(dayValues.length<7){
        dayValues.push({color:'#fff',value:'?'})
    }

    const minValue = Math.min(...dayValues);
    const maxValue = Math.max(...dayValues);


    return (
        <div style={{ display: 'flex', background: 'redl', flexWrap: 'wrap', justifyContent: 'center' }}>
            {dayValues.map((item, index) => (
                <div key={index} style={{background:'grayl'}}>

                    <Box style={{ backgroundColor: item.color }}>
                    </Box>
                    <span style={{marginTop:'3px',fontSize:'.8rem',display:'flex',justifyContent:'center',flexDirection:'column'}}>
                        {item.value}
                    </span>
                    { 
                    (index   === (getTodaysEpoch()-new Date(getMondayDate()).getTime())/(24*60*60*1000)) &&  <span style={{color:'red'}}>&#9650;</span>
                    } 
                </div> 
            ))}
        </div> 
    ); 
};

export default WeekComponent;
