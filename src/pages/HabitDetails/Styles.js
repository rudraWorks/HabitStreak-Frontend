import styled from "styled-components";

export const Container = styled.div`

    width:75%;
    min-height:500px;
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
    background:pinkl;
    width:100%;
    // display:flex;
    // overflow:auto;
    // justify-content:center;
    // align-items:center;
    // flex-direction:column;
    padding-top:0px;
`
export const Calendar = styled.div`
    margin-top:20px;
    text-align:right;
    &>span{
        margin:5px;
        margin-right:15px;
    }
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
    &>input{
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
    &>button{
        height:28px;
        align-self:center;
        padding:5px;

        cursor:pointer;
        border:1px solid gray;
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 1rem;
        border-radius: .25rem;
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
        @media only screen and (max-width: 600px) {
            flex-direction:column;
        }
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
    top:0;
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
        margin-bottom:10px;
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