import styled from "styled-components";
import { ArchivedButton } from "../../pages/Habits/Styles";


export const Container = styled.div`
    /* background-color: gray; */
    position:relative;
    width: 700px;
    /* height:fit-content; */
    /* min-height: 300px;  */
    /* height:400px; */
    max-height: 100%;
    max-width: 95%;
    margin: 20px;

`
export const Heading = styled.div`
    width:100%;
    display:flex;
    /* background-color: gray; */
    margin-bottom: 10px;
    align-items: center;
    flex-wrap: wrap;
`
export const Stats = styled.div`
        margin-left: auto; 
        margin-right: 10px;
        font-size: .9rem;

        &>span{
            /* background:#c9d1d9; */
            border: 1px solid #c9d1d9;
            padding: 2px 10px;
            border-radius: 5px; 
        } 
        @media only screen and (max-width: 600px) {
                margin-left: 0; 
                margin-top: 10px;
                /* font-size: .7rem; */
                /* transform: scale(.5); */
            }
`
export const AddImages = styled(ArchivedButton)`
        background:${(props) => (props.show ? '#BFDBFE' : '#fff')};
        border-radius: 5px;
        @media only screen and (max-width: 600px) {
            margin-top: 5px;
        }
`

export const UploadImages = styled.div`
    width: 100%;
    /* height: 150px; */
    /* background:red; */
    /* border:1px solid gray; */
`

export const Submit = styled.button`
    padding: 5px 10px;
    margin-top: 10px;

    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
`
export const ImagesContainer = styled.div`
    /* background:gray; */
    /* max-height: 200px; */
    min-height: 200px;
    max-height: 300px; 
    /* height: 300px; */
    display:flex;
    padding: 10px; 
    overflow-x: auto;
    /* width:fit-content; */
    /* flex-wrap: wrap; */
    /* margin-top: 10px;
    margin-bottom: 10px; */
`
export const Img = styled.img`
    height: 100%; 
    /* margin-left: px; */
    border: 1px solid lightgray;-
`
export const ImgWrapper = styled.div`
    position:relative; 
    /* background: lightgray; */
    max-width: 300px;
    /* width: auto; */
    flex: 0 0 auto; 
    margin-right: 5px;
    align-self: self-start;
`
export const Remove = styled.div`
    width:20px;
    height:20px;
    background:skyblue;
    position: absolute;
    left:-7px;
    top: -5px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Uploading = styled.div`
    background-color: lightgray;
    opacity: .9;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color:white; 
    cursor: wait;
    z-index: 1000;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */

    &>textarea{
        width: 100%; 
        height: 70%;
        height:200px;
        /* max-height: 200px; */
        padding: 15px;
        resize: none;
        font-size: 1rem;
        font-family: 'Times New Roman', Times, serif;
    }
    &>input{
        margin-bottom: 5px;
        width: 100%;
        padding: 8px 15px;
    }
`