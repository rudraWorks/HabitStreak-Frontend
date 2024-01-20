import styled from "styled-components";

export const Container = styled.div`
    background:alicebluel;
    &>h3{
        margin-bottom:5px;
    }
`
export const RenameHabit = styled.div`
    background:graly;
    display:flex;
    align-items:center;
    &>input{
        display:inline-block;
        margin:0;
    }

    &>button{
        display:inline-block; 
        margin:0;
        margin-left:10px;
        width:100px;
        border-radius: .25rem;
    }
    margin-bottom:15px;
`

export const DeleteHabit = styled.div`
    width:100%;
    background:redl;
    display:flex;
`
export const DeleteButton = styled.button`
display:inline-block; 
margin:0;
// margin-left:auto;
width:87px;

background-color: transparent;
border: 1px solid transparent;
padding: 6px 12px;
font-size: 1rem;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
color: #f4495d;
border-color: #f4495d;

&:hover {
    color: #fff;
    background-color: #f4495d;
    border-color: #f4495d;
}
cursor:pointer;
`

export const BottomRow = styled.div`
    background:grayl;
    display:flex;
    &>div{
        margin-right:20px;
        margin-left:0;
    }
    &>div>h3{
        margin-bottom:4px;
    }
    @media only screen and (max-width: 600px) {
        flex-direction:column;
        &>div{
            margin:0;
            margin-bottom:10px;
        }
    }
`
export const ArchiveButton = styled(DeleteButton)`
    color: #faa04b;
    border-color: #faa04b;

    &:hover {
        background-color: #faa04b;
        border-color: #faa04b;
    }

`