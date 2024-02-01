import React, { useState } from "react";
import { getValueFromEpoch, todaysEpoch } from "../../utils/utils";
import { Day, DaysContainer, RadioLabel,RadioContainer,RadioInput } from "./Styles";

export const Edit = ({ setEpoch, calendar }) => {
  const [selectDay, setSelectDay] = useState(null);

  const selectDayHandler = (date) => {
    setSelectDay(date);
    setEpoch(date);
  };

  const days = []; 
  let today = todaysEpoch() - 24 * 60 * 60 * 1000;
  for (let i = 0; i < 14; ++i) {
    days.push(today);
    today -= 24 * 60 * 60 * 1000;
  }

  return (
    <DaysContainer>
      {days.map((date) => (
        <Day
          onClick={() => selectDayHandler(date)}
          isSelected = {selectDay===date}
          isEmpty = {getValueFromEpoch(calendar,date)===0}
          key={date}
        >
          {new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
          })}
        </Day>
      ))}
    </DaysContainer>
  );
};




export const RadioButtons = ({setProgressValue,progressValue}) => {
    return (
      <RadioContainer>  
        <RadioInput
          type="radio" 
          id="yes-retro"
          name="options-retro"
          checked={progressValue}
          onChange={() => setProgressValue(1)}
        />
        <RadioLabel htmlFor="yes-retro">Yes</RadioLabel>
  
        <RadioInput
          type="radio"
          id="no-retro"
          name="options-retro" 
          checked={!progressValue}
          onChange={() => setProgressValue(0)}
        />
        <RadioLabel htmlFor="no-retro">No</RadioLabel>
      </RadioContainer>
    );
  };