import styled from "styled-components";

export const Container = styled.div`
    max-width:95%;
    color:#1F2937;

    & span{
        color:navy;
        font-weight:100;
        margin-left:auto;
    }
    & div,h3{
        display:flex;
        align-items:center;
        font-size:1.1rem;
        @media only screen and (max-width: 600px) {
            font-size:.9rem;
        }
    }
    & img{
        height:40px;
        display:inline;
        margin-right:10px;
        @media only screen and (max-width: 600px) {
            height:25px;
        }
    }
    & h2{
        font-size:1.35rem;
        @media only screen and (max-width: 600px) {
            font-size:1.2rem;
        }
    }
`

export const Progress = styled.progress`
    display:block;
    width:800px;
    max-width:100%;
    height:40px;
    margin-bottom:5px;
`
