import styled from "styled-components";

export const Container = styled.div`
     width:100%;
     height:70px;
     background:#F8F8F8;
    //  background:pink;
     display:flex;
     align-items:center;
     border-bottom:1px solid #DCDCDC-;
     padding:10px;

     &>a>img{
        height:40px;
        cursor:pointer;
        margin:10px;

        margin-bottom:5px;
        @media only screen and (max-width: 600px) {
            height:30px;
        }

     }
     position:sticky;
     top:0;
     background:#F3F4F6;
     background:white;
     z-index:99999;
`

export const ACTIVE_STYLE={
    borderRadius:'50%',
    background:'#D1D5DB'
}
export const DEACTIVE_STYLE = {
    border:'none'
}
