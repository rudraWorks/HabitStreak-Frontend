import styled from "styled-components";
import { Container as C, Heading as H } from "../Habits/Styles";
import { rotateAnimation } from "../../components/Habits";

export const Container = styled(C)`
    /* background: skyblue; */
    width:840px;
    user-select: none;
`
export const Heading = styled(H)`
    /* background-color: red; */
    width: 100%;
    display:flex;
    align-items: center;
    @media only screen and (max-width: 600px) {
        width:100%;
        flex-direction: row;
    }
    margin-bottom: 20px;
    border-radius: 0;
    &>button{
        margin-left: auto;
        padding:3px;
        width:35px;
        height:35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        background-color: #13a05f;
        font-size: 1.3rem;
        line-height: 0;
        color:white;
        &:hover{
            background-color: #057642;
        }
        transition: all .3s;
    }
`

export const Note = styled.div`
    /* width: 100%; */
    /* font-weight: 900; */
    display: inline;
    width:200px;
    max-width: 100%;
    margin: 5px;
    display:flex;
    flex-direction: column;
    padding: 5px;
    color:#1F2937;
    height: 100px;
    
    /* margin-bottom: 10px; */
    /* border-radius: 10000px; */
    /* border: 1px solid gray; */
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        transform:scale(1.05);
    }
    display:flex;
    align-items: center;
    transition: all .3s;
    /* padding:3px 5px; */
    background: linear-gradient(120deg, aliceblue 30%, #F9FAFB 38%, #F9FAFB 40%, aliceblue 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${rotateAnimation} 2s infinite;
    @media only screen and (max-width: 600px) {
        width:800px; 
    }
`
export const Delete = styled.div`
    /* transform: scale(.4); */
    /* height:30px; */
    transition: all .3s;
    margin-left: auto;
    margin-right: 5px;
    &>button{
        /* border-radius: 1000px; */
        border-radius: 5px;
        cursor: pointer;
        padding: 2px 7px;
        /* border: none; */
        /* background-color: #F8BDCF; */
        border: 1px solid #F8BDCF;
        background:aliceblue;
        &:hover{
            background-color: #F17FA2;
            color: white;
        }
    }
    &:hover{
        /* transform: scale(.5); */
    }
`
export const Date = styled.div`
    /* width: 70px; */
    /* height: 30px; */
    padding:2px 5px;
    /* background-color: #ff9466; */
    /* border: 1px solid skyblue; */
    /* border-radius: 1000px; */
    /* margin-left: auto; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: gray; */
    font-size:.8rem;
    /* transform: scale(.7); */
`
export const Text = styled.div`
    /* color: gray; */
    /* background-color: red; */
    display: flex;
    overflow: hidden;
    width:100%;
    max-height: 100%;
    text-align: left;
    /* margin-right: 10px; */
    padding: 5px;
    /* word-break: break-all; */
    word-wrap: break-word;
    /* white-space: nowrap; */
    
`
export const Controls = styled.div`
    display:flex;
    /* background:#FEF3C7; */
    /* border-top: 1px solid gray; */
    /* margin-top: 5px; */
    height: 30px;
    width: 100%;
    padding: 0;
    align-items: center;
    margin-top: auto;
    /* font-weight: bolder; */
`
export const NotesContainer = styled.div`
    /* background:gray; */
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`