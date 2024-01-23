import React from 'react';
import styled from 'styled-components';
import { getBackgroundColor, getMondayDate, getTodaysEpoch } from '../../utils/utils';

const Box = styled.div`
    width: 24px;
  max-width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-left: 25px;
  margin-right: 25px;
  @media only screen and (max-width: 600px) {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 7px;
    width: 24px;
    max-width: 24px;
    height: 24px;
  }
`;


const WeekComponent = ({ weekInfo }) => {

    let ans = []
    let weekStartEpoch = new Date(getMondayDate()).getTime()
    for (let i = 0; i < 7; ++i) {
        const p = weekInfo.filter((day) => day.epoch === weekStartEpoch)
        if (p.length) {
            ans.push({
                value: p[0].value,
                epoch: weekStartEpoch
            })
        }
        else{
            ans.push({
                value:'0',
                epoch:weekStartEpoch
            })
        }
        weekStartEpoch += 24 * 60 * 60 * 1000
    }

    weekInfo = ans 

    const dayValues = weekInfo.map((day) => {
        return {
            color: getBackgroundColor(day.value, weekInfo),
            value: day.value
        }
    })

    while (dayValues.length < 7) {
        dayValues.push({ color: '#fff', value: '?' })
    }

    const minValue = Math.min(...dayValues);
    const maxValue = Math.max(...dayValues);


    return (
        <div style={{ display: 'flex', background: 'redl', flexWrap: 'wrap', justifyContent: 'center' }}>
            {dayValues.map((item, index) => (
                <div key={index} style={{ background: 'grayl' }}>

                    <Box style={{ backgroundColor: item.color }}>
                    </Box>
                    <span style={{ marginTop: '3px', fontSize: '.8rem', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        {item.value}
                    </span>
                    {
                        (index === (getTodaysEpoch() - new Date(getMondayDate()).getTime()) / (24 * 60 * 60 * 1000)) && <span style={{ color: 'red' }}>&#9650;</span>
                    }
                </div>
            ))}
        </div>
    );
};

export default WeekComponent;
