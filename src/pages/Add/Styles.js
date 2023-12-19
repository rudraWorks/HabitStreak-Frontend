import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    padding:5px;
    &>div{
        width:40%;
        @media only screen and (max-width: 600px) {
           width:100%;
        }
        margin:10px;
    }
    @media only screen and (max-width: 600px) {
       flex-direction:column;
       align-items:center;
    }

    position:relative;
    overflow:hidden;
`

export const Left = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:auto;
    background:redl;
    border-radius:15px;

    &>h1{
        font-size:3rem;
    }
    &>img{
        height:8rem;
        @media only screen and (max-width: 600px) {
            height:5rem;
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
    padding:20px;
    word-wrap:break-word;
    word-break:break-all;
    &>h1{
        margin-bottom:30px;
        text-align:left;
        width:90%;
        font-size:1.5rem;
        @media only screen and (max-width: 600px) {
            font-size:1.1rem;
        }
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
    width:100%;
    max-width:90%;
    margin-top:40px;
    
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;

    &:hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }

`

export const EmojiContainer = styled.div`
    background:redl;
    font-size:3rem;
`
export const ThemeButton = styled.button`
    margin-left:auto;
    height:30px;
    padding:10px;
    border:none;
    background:#E5E7EB;
    border-radius:15px;
    display:flex;
    align-items:center;
    cursor:pointer;
    &:hover{
        background:#D1D5DB;
    }
    transition:all .15s;
`

export const TypeContainer = styled.div`
    margin-bottom:10px;
    display:flex;
    align-items:center;
    background:bluke;
    width:100%;
`

export const ToggleButtonContainer = styled.div`
    margin-left:auto;
    @media only screen and (max-width: 600px) {
        margin:0;
        margin-top:5px;
    }
`

export const TypeLabelContainer = styled.div`
    display:flex;
    align-items:center;
    @media only screen and (max-width: 600px) {
        margin-right:auto;
    }
`