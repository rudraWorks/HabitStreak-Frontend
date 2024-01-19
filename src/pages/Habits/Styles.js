import styled from "styled-components";

export const Container = styled.div`
    width:980px;
    @media only screen and (max-width: 600px) {
        width:100%;
    }
    background:white;
    // background:skyblue;
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
    /* background:red; */
    font-weight:bolder;
    @media only screen and (max-width: 600px) {
        width:100%;
        justify-content: center;
        flex-direction: column;
    }
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    max-width:100%;
    /* background:red; */
    &>div{
        margin-left: auto;
        margin-right:0;
        /* background:blue; */
        display: flex;
        align-items: center;
        @media only screen and (max-width: 600px) {
            margin-top: 10px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`
export const ArchivedButton = styled.button`
    /* margin-left:auto; */
    border:1px solid #BFDBFE;
    padding:5px;
    padding-left:10px;
    padding-right:10px;
    cursor:pointer;
    border-radius:1000px;
    color:#1E3A8A;
    background:${(props) => (props.showArchived ? '#BFDBFE' : '#fff')};
    &:active{
        background:#93C5FD;
    }
`
export const ViewButton = styled(ArchivedButton)`
    margin-left: auto;
    margin-right: 5px;
    background:${(props) => (props.showRow ? '#BFDBFE' : '#fff')};

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
export const HabitsContainerRowView = styled.div`
    /* background:red;     */
    /* background-color: gray; */
    margin-top: 10px;
    /* width:95%; */
    @media only screen and (max-width: 900px) {
        width:100%;
    }
    max-width: 100%;
    //width: 800px;
    overflow:auto;
    position: relative;
`
export const Row = styled.div`
    //width:100%;
    width: fit-content; 
    height:28px;
    margin-bottom:3px;
    /* background:#E5E7EB; */
    display:flex;
    align-items:center;
    /* color:#1f6feb; */
    /* background-color: black; */
    /* border:1px solid #9CA3AF; */
    //overflow-y: hidden;
    //overflow-x: hidden;
    /* border-radius: 6px; */
    /* border-radius: 1000px; */
    padding: 5px;
    /* padding-left: 20px; */
    /* padding-right: 20px; */
    &:hover{
        /* background: #6EE7B7; */
        font-weight: bolder;
    }
    /* cursor: pointer; */
    font-weight: bolder;
`

export const HabitNameInRow = styled.div`
    /* background:#cfcfcf; */
    /* color:white; */
    width: 180px;
    font-weight: bolder;
    min-width:180px;
    /* border-radius: px; */
    /* border-top-left-radius: 8px; */
    /* border-bottom-right-radius: 8px; */
    padding:4px;
    padding-left: 10px;
    /* overflow:auto; */
    /* height:100%; */
    /* height: 24px; */
    display:flex;
    align-items:center;
    overflow: hidden;
    /* border-right: 1px solid #F59E0B; */
    margin-right: 5px;
    /* white-space: pre-wrap; */
    /* word-break:keep-all; */
    /* display: inline; */
    /* position:sticky; */
    /* background-color: white; */
    left:0;
    cursor: pointer;
    transition:font-weight 0.3s ease;
    &:hover{
        color:#007CAD;
    }
`

export const DayBox = styled.div`
    background:#F9FAFB;
    background: white;
    border: 1px solid #D1D5DB; 
    height:20px;
    min-height: 20px;
    width:20px;
    min-width: 20px;
    margin-right: 5px;
    border-radius: 50%;
    /* border-radius: 5px; */
`
export const DayBoxContainer = styled.div`
    display: flex;
    width:100%; 
    /* justify-content: space-evenly; */
    align-items: center;
    //overflow: hidden;
    //overflow-y: hidden;
    //overflow-x: auto;
    
`
export const Controls = styled.div`
    background:skybluel;
    width:190px;
    height:20px;
    display:flex;
    justify-content: center;
    &>button{
        width:50%;
    }
    //margin-left: auto;
    //margin-right: 40px;
`

export const ControlButton = styled(ArchivedButton)`
    display:flex;
    align-items: center;
    justify-content: center;
    /* font-weight: bolder; */
    /* padding: 5px; */
    &>span{
        /* margin-left: auto; */
        margin-left:5px;
    }
`