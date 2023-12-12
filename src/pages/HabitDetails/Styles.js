import styled from "styled-components";

export const Container = styled.div`

    width:75%;
    min-height:500px;
    background:redl;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media only screen and (max-width: 600px) {
        width:100%;
    }

    
`

export const Calendar = styled.div`
    margin-top:auto;
    background:pinkl;
    width:100%;
    display:flex;
    justify-content:center;
`
export const HabitTitle = styled.h1`
    background:white;
    width:100%;
    position:sticky;
    top:69px; 
    font-size:2rem;
    padding:5px;
    z-index:999;
    margin-bottom:10px;
    opacity:.9;
    @media only screen and (max-width: 600px) {
        font-size:1.8rem;
    }
`

export const Streak = styled.div`
    width:100%;
    background:bluel;
    display:flex;
    align-items:center;
    position:relative;
    &>img{
        height:100px;
        margin-left:auto;
        @media only screen and (max-width: 600px) {
            transform:scale(.7);
        }
    }    

`

export const StreakNumber = styled.div`

    // background:#FBBF24;
    height:60px;
    width:60px;
    color:black;
    border-radius:50%;
    font-size:2.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    right:18px;
    bottom:-55px;
    // border:2px solid black;
    font-weight:bolder;
    color:#F59E0B;
    @media only screen and (max-width: 600px) {
        right:19px;
        bottom:-40px;
        transform:scale(.7);
    }

`

export const DaysStreak = styled.div`
    background:redl;
    position:absolute;
    right:-6px;
    bottom:-75px;
    font-size:1.5rem;
    font-weight:bolder;
    color:#F59E0B;
    @media only screen and (max-width: 600px) {
        bottom:-50px;
        transform:scale(.9);
    }
`
export const Today = styled.div`
    margin-right:auto;
    margin-left:0;
    background:redl;
    font-size:2rem;
    display:flex;
    align-items:center;
    &>input{
       width:150px;
       margin:10px;
       padding:5px;
       @media only screen and (max-width: 600px) {
        margin-left:0;
       }

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
        justify-content:start;
        align-items:start;
    }
    &>button{
        height:28px;

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
    background:orangel;
    margin-top:20px;
    width:100%;
    display:flex;
    flex-direction:column;
    font-size:1.4rem;
    justify-content:start;
    align-items:start;
    @media only screen and (max-width: 600px) {
        font-size:1.2rem;
    }
    &>span{
        margin-top:5px;
    }
`