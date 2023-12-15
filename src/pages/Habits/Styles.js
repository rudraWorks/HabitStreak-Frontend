import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    @media only screen and (max-width: 600px) {
        width:100%;
    }
    &>h1{
        position:sticky;
        width:100%;
        top:69px;
        background:white;
        padding:5px;
        font-size:1.8rem;
        z-index:9999;
        margin-bottom:10px;
        border-radius:10px;
        opacity:.9;
        color:#E40046;

    }
`

export const HabitsContainer = styled.div`
    display:flex;
    background:redl;
    flex-wrap:wrap;
    width:100%;
    // flex-direction:column;
    justify-content:center;
    align-items:center;
`