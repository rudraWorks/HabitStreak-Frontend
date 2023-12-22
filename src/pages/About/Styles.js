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
        background:#E4F4E4;
        width:fit-content;
        padding:5px;
        padding-left:10px;
        padding-right:10px;
        border-radius:5px;
        margin-bottom:15px;
        position:sticky;
        top:70px;
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
`