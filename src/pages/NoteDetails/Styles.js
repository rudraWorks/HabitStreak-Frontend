import styled from "styled-components";
import {Container as C} from '../Notes/Styles'
// import { Container as C } from "../Habits/Styles";

export const Container = styled(C)`
    background:#F9FAFB;
    /* width: 100%; */ 
    /* text-align: left; */
    padding:15px 25px; 
    position: relative;
    /* border: 1px solid #D1D5DB; */
    border-radius: 10px;
    user-select: auto;
    /* font-family: 'Times New Roman', Times, serif;  */
    /* background-image: url('/images/paper.avif'); */
`
export const ImageWrapper = styled.div`
    max-width: 100%;
    /* border:1px solid black; */
    display: flex;
    justify-content: center;
    align-self: center;

    &>img{
        max-width: 100%;
        max-height: 200px;
        cursor: pointer;
    }
    margin: 10px;
`
export const Text = styled.div`
    /* background:lightgray; */
    padding:5px;
    /* margin-top: 5px; */
    text-align: left;
    font-size: 1rem;
    /* word-wrap: break-word; */
    user-select:auto;
    &>pre{
        white-space: pre-wrap;
        font-size: 1.1rem;
        font-family: 'Times New Roman', Times, serif; 
        // user-select:auto;
    }
    /* border-radius: 5px; */
`
export const Title = styled.div`
    /* border-bottom: 1px solid #B8C4C2; */
    /* margin-bottom: 10px; */
    padding:5px;
    text-align: left;
    position: sticky; 
    /* font-weight: bolder; */
    top:69px;
    background-color:#F9FAFB ;
    /* background-image: url('/images/paper.avif'); */

    /* background:red; */
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    /* flex-direction: column; */
    /* width:100%; */
    &>h3{
        font-weight: normal;
        font-size: 1.5rem;
        @media only screen and (max-width: 600px) {
            margin-bottom: 10px;
        }
        text-align: left;
        /* background:red; */
        width: 95%;
    }
    &>div>span{
        font-size:1rem;
        margin-left: 10px;
        @media only screen and (max-width: 600px) {
            margin-left: auto;
        }
        /* background-color: gray; */
        padding: 1px 4px;
        /* border: 1px solid lightgray; */
        /* border-radius: 1000px; */
        /* border-bottom: 1px solid lightgray;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray; */
    }
    &>div{
        /* background-color: blue; */
        margin-left: auto;
        display: flex;
        align-items: center;
        /* flex-direction: column; */
        /* justify-content: center; */
        @media only screen and (max-width: 600px) {
            margin-right:auto ;
            width: 100%;
        }
    }
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        /* text-align: center; */
    }
`
export const ImageContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    /* justify-content: center; */
`
export const Edit = styled.div`
    cursor: pointer;
    padding:3px 10px;
    border-radius: 10000px;
    font-size: 1rem;
    &:hover{
        background-color: pink;
    }
    user-select: none;
`
export const Delete = styled(Edit)`
    &:hover{
        background-color: pink;
    }
`
export const Back = styled.span`
    margin-right: 10px;
    cursor: pointer;
    &:hover{
        color:red;
    }
    display: inline-block;
`