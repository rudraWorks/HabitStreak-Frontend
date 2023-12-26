import styled from "styled-components";

export const Container = styled.div`
    width:980px;
    @media only screen and (max-width: 600px) {
        width:100%;
    }
    // background:blue;
    max-width:100%;
`

export const Heading = styled.div`
    position:sticky;
    width:800px;
    top:69px;
    background:white;
    padding:5px;
    font-size:1.8rem;
    z-index:9999;
    margin-bottom:10px;
    border-radius:10px;
    opacity:.9;
    color:#E40046;
    // text-align:left;
    // background:red;
    font-weight:bolder;
    @media only screen and (max-width: 600px) {
        width:100%;
    }
    display:flex;
    align-items:center;
    max-width:100%;
`
export const ArchivedButton = styled.button`
    margin-left:auto;
    border:1px solid #BFDBFE;
    padding:5px;
    padding-left:10px;
    padding-right:10px;
    cursor:pointer;
    border-radius:1000px;
    color:#1E3A8A;
    background:${(props) => (props.showArchived ? '#BFDBFE' : '#fff')};
    &:active{
        background:#60A5FA;
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

export const Img = styled.img`
    height:8rem;
    @media only screen and (max-width: 600px) {
        height:5rem;
    }

`