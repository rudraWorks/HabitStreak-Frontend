import styled from "styled-components";

export const Container = styled.div`

    padding:20px;
    & img{
        max-width:90%;
        max-height:300px;
    }
    &>h2{
        text-align:left;
        margin-left:10px;
        @media only screen and (max-width: 600px) {
            margin-left:5px;
        }
        display:flex;
        align-items:center;
    }
    &>p{
        margin-left:10px;
        text-align:left;
        margin-top:10px;
    }
    &>h2>img{
        height:2.2rem;
        margin-right:10px;
    }
    @media only screen and (max-width: 600px) {
        padding:5px;

    }
`
export const Section = styled.div`
    text-align:left;
    padding:10px;
    & li{
        margin:5px;
        margin-left:20px;
    }
    &>h3{
        display:flex;
        align-items:center;
        background:#F9FAFB;
        width:fit-content;
        padding:5px;
        padding-left:10px;
        padding-right:10px;
        // border-radius:5px;
        margin-bottom:15px;
        position:sticky;
        top:70px;
        width:100%;
        @media only screen and (max-width: 600px) {
            width:100%;
            display:flex;
            justify-content:center;
        }
    }
    &>img{
        margin-top:5px;
    }
    &>h3>img{
        height:1.8rem;
        margin-right:10px;
    }

    @media only screen and (max-width: 600px) {
        padding:5px;
        &>img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 99%;
        }
    }
    padding-bottom:10px;
    padding-top:10px;
    margin-bottom:10px;
    & button{
        width:200px;
        margin-top:0;
    }
`
export const ButtonContainer = styled.div`
    display:flex;
    @media only screen and (max-width: 600px) {
        justify-content:center;
    }
`

export const SectionInner = styled.div`
    // background:red;
    display:flex;
    flex-wrap:wrap;
    @media only screen and (max-width: 1000px) {
        flex-direction:column;
    }
    &>ul{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:30%;
        @media only screen and (max-width: 1000px) {
            display:block;
            width:100%;
        }
    }
    &>img{
        margin-left:auto;
        @media only screen and (max-width: 1000px) {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 99%;
            margin-top:10px;
        }
    }
`
export const VideoContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    & video{
        width:70%;
        border:1px solid skyblue;
        @media only screen and (max-width: 1000px) {
            width:100%;
        }
        border-radius:10px;
    }
`