import styled from "styled-components";

export const Container = styled.div`
    max-width:95%;
    & span{
        color:navy;
        font-weight:100;
        margin-left:auto;
    }
    & div,h3{
        display:flex;
        align-items:center;
    }
    & img{
        height:50px;
        display:inline;
        margin-right:10px;
    }
`

export const Progress = styled.progress`
    display:block;
    width:800px;
    max-width:100%;
    height:40px;
`
