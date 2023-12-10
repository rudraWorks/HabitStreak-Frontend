import styled from "styled-components";

export const Container = styled.div`
    background:#FFDD49a;
    display:flex;
    justify-content:center;
    padding:5px;
    &>div{
        width:40%;
        @media only screen and (max-width: 600px) {
           width:90%;
        }
        margin:10px;
        
    }
    @media only screen and (max-width: 600px) {
       flex-direction:column;
       align-items:center;
    }

    

`

export const Left = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:auto;
    background:redl;
    &>h1{
        font-size:3rem;
    }
    &>img{
        height:10rem;
        @media only screen and (max-width: 600px) {
            display:none;
        }
    }

`

export const Right = styled.div`
    padding:10px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-radius:15px;
    background:#F3F4F6;
    // color:white;
    padding:20px;

    &>h1{
        margin-bottom:30px;
        text-align:left;
        width:90%;
        font-size:1.5rem;
    }
    &>div{
        width:90%;
        text-align:left;
        display:flex;
    }
    &>img{
        position:absolute;
        top:-110px;
        width:190px;
    }
    position:relative;
`
export const Input = styled.input`

    
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;

    width:100%;
    margin:10px;
    margin-bottom:30px;
    display:block;
    max-width:90%;

    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus{
        color: #212529;
        background-color: #fff;
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    }


`

export const Button = styled.button`
    
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;

    width:100%;
    max-width:90%;
    margin-top:40px;

    &:hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }

`