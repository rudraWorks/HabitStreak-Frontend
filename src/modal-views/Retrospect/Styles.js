import styled from "styled-components";
import { Input as Inpt } from "../../pages/Add/Styles";
import { TimeTravel } from "../../pages/HabitDetails/Styles";

export const Day = styled.span`
    background: ${props => props.isSelected ? '#D1D5DB' : '#F3F4F6'};
    border: ${props=>props.isEmpty?'3px dotted red':'1px solid #D1D5DB'};
    margin: 5px;
    width:80px; 
    padding: 3px 4px;
    display:flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 10000px; */
    border-radius: 10px;
    cursor: pointer;
` 

export const Container = styled.div`
    background: grayl;
    text-align: center;
    user-select: none;
    /* display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    &>h3{
        margin-bottom: 15px;
    }
    &>h2{
        margin-bottom: 15px;
    }
`
export const DaysContainer = styled.div`
    /* max-width: 300px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
`

export const Input = styled(Inpt)`
    width:200px;
    margin:0;
    align-self: center;
`
export const Controls = styled.div`
    display:flex;
    background:grayl;
    /* align-items: center; */
    justify-content: center;
`
export const Button = styled(TimeTravel)`
    align-self: center; 
    margin: 0;
    margin-left: 10px;
    height: 38px;
    font-weight: normal;
`

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-left:20px;
  transform:scale(.8);
`;

export const RadioInput = styled.input`
  margin-right: 8px;
  cursor: pointer;
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-right: 16px; /* Adjust the margin as needed */
`;