import styled from "styled-components";

export const Pro = styled.span` 
    background:#FFDD49;
    padding:2px;
    padding-left:8px;
    padding-right:8px;
    border-radius:1000px;
    font-size:.9rem;
    margin-left:10px;
    font-weight:100;
`
export const Buttons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    &>button{
        width:150px;
        margin:5px;
        margin-top:20px;
    }
    @media only screen and (max-width: 600px) {
        &>button{
            margin:5px;
            width:100%;
        }
        &>button:nth-child(1){
            margin-top:20px;
        }
    }

`
