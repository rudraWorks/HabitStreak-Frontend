import styled from "styled-components";

export const Container = styled.div`
    // background:aliceblue;
    &>h3{
        margin-bottom:10px;
    }
    & strong{
        margin:10px;
        display:inline-block;
        margin-right:0;
        margin-left:0;
    }
    & span{
        display:block;
        margin-top:10px;
        color:red;
    }
`
