import styled from "styled-components";

export const Container = styled.div`
    width:980px;
    min-height:500px;
    max-width:100%;
    background:bluel;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media only screen and (max-width: 600px) {
        width:100%;
        padding:0;
    }
`

export const CalendarContainer = styled.div`
    margin-top:auto;
    background:redl;
    width:100%;
    padding-top:0px;
`
export const Calendar = styled.div`
    margin-top:20px;
    text-align:right;
    background:bluel;
    &>span{
        margin:5px;
        margin-right:15px;
    }
    display:flex;
    justify-content:center;
    flex-direction:column;
    aligin-items:center;
    overflow:auto;

`


export const HabitTitle = styled.h1`
    background:white;
    width:100%;
    position:sticky;
    top:69px; 
    font-size:2.3rem;
    padding:0px;
    z-index:999;
    margin-bottom:10px;
    opacity:.9;
    @media only screen and (max-width: 600px) {
        font-size:1.6rem;
    }
    padding-bottom:5px;
    padding-top:5px;
    color:#E40046;
    display:flex;
    align-items:center;
    &>img{
        margin-left:auto;
        height:2rem;
        @media only screen and (max-width: 600px) {
            height:1.4rem;
        }
    }
    
`   

export const Streak = styled.div`
    width:100%;
    background:bluel;
    display:flex;
    align-items:center;
    position:relative;
    @media only screen and (max-width: 600px) {
        flex-direction:column-reverse;
        align-items:center;
        justify-content:center;
    }
    &>img{
        height:100px;
        margin-left:auto;
        @media only screen and (max-width: 600px) {
            transform:scale(.7);
        }
    }    

`

export const Today = styled.div`
    background:#EEF2FF;
    padding:10px;
    border-radius:10px;
    background:redl;
    display:flex;
    align-items:center;
    justify-content:center;
    
    &>span{
        align-self:center;
        font-size:1.2rem;
        @media only screen and (max-width: 600px) {
            font-size:1.1rem;
        }
    }
    &>div>input{
       width:150px;
       margin:8px;
       padding:5px;
       background-color: #fff;
       background-clip: padding-box;
       border: 1px solid #ced4da;
       appearance: none;
       border-radius: 4px;
       transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
       &:focus{
           color: #212529;
           background-color: #fff;
           border-color: #86b7fe;
           outline: 0;
           box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
       }
   
    }
    @media only screen and (max-width: 600px) {
        flex-direction:column;
        font-size:1.5rem;
        width:100%;
    }

    &>div>button{
        height:28px;
        align-self:center;
        padding:5px 10px;
        display: flex;
        align-items: center;

        cursor:pointer;
        border:1px solid gray;
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 1rem;
        border-radius: 1000px;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #0d6efd;
        border-color: #0d6efd;
    
        &:hover {
            color: #fff;
            background-color: #0d6efd;
            border-color: #0d6efd;
        }
    }
`
export const StreakDetails = styled.div`
    background:#FEF3C7;
    margin-top:15px;
    display:flex;
    flex-direction:column;
    align-self:start;
    padding:10px;
    border-radius:10px;
    font-size:1.4rem;
    justify-content:start;
    align-items:start;
    @media only screen and (max-width: 600px) {
        font-size:1.2rem;
        align-items:center;
        justify-content:center;
        width:100%;
        align-self:center;
    }
    &>div{
        background:redl;
        justify-content:center;
        display:flex;
        text-align:center;
        align-items:center;
    }
    &>div>span{
        margin-right:20px;
        font-size:1.2rem;
        @media only screen and (max-width: 600px) {
            font-size:1.1rem;
            margin-right:0px;
        }
    }
    &>div>div{
        @media only screen and (max-width: 600px) {
            transform:scale(.9);
            margin-top:5px;
        }
    }
`
export const Emoji = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:auto;
    background:redl;
    position:absolute;
    right:0;
    top:-25px;
    font-size:4rem;
    &>div{
        margin-top:10px;
    }
    &>span{
        font-size:1.8rem;
        color:orange;
        font-weight:bolder;
        @media only screen and (max-width: 600px) {
            font-size:1.5rem;
        }
    }
    @media only screen and (max-width: 600px) {
        font-size:3rem;
        position:relative;
        width:100%;
        align-self:center; 
        margin:0;
        justify-self:center;
        // margin-bottom:10px;
        // background:#e6fcf3;
        // padding:10px;
        // border-radius:10px;
        top:-10px;
    }
`
export const SelectYear = styled.div`
    display:flex;
    align-items:center;
    margin-right:5px;
    padding-left:5px;
    padding-right:5px;
    cursor:pointer;
    margin-bottom:2px;
`

export const StreaklineContainer = styled.div`
    margin-top:15px;
    background:#d9ffec;
    width:100%;
    padding:10px;
    min-height:105px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    &>div>span{
        font-size:1.2rem;
        text-align:left;
        @media only screen and (max-width: 600px) {
            font-size:1.1rem;
            margin-right:0px;
            text-align:center;
        }
    }
    &>div{
        display:flex;
    }
`
export const BadgesButton = styled.div`
    background:#6EE7B7;
    margin-left:auto;
    border-radius:1000px;
    padding:1px;
    padding-left:10px;
    padding-right:10px;
    color:#064E3B;
    cursor:pointer;
    display:flex;
    align-items: center;
    &:hover{
        background:#34D399;
    }
`

export const TodayCheckboxAndButtonContainer = styled.div`
    display:flex;
`
export const CurrentStreakAndCircularProgressContainer = styled.div`
    @media only screen and (max-width: 600px) {
        display:flex;
        width:100%;
        &>div{
            margin-left:20px;
        }
    }
`