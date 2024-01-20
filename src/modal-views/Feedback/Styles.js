import styled from "styled-components";

export const RatingRow = styled.div`
    /* background:red; */
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
    padding:5px;
    &>span:nth-child(1){
        margin-right: 15px;
    }
`
export const SuggestionInput = styled.textarea`
    margin-left: auto;
    padding: 5px;
    resize: vertical;
`
export const Container = styled.div`
    &>h2{
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 20px;
    }
    &>button{
        position: relative;
        left:50%;
        transform: translateX(-50%);
        margin-top: 15px;
        /* margin-bottom: 10px; */
        width: 150px;
        padding: 5px;
     
        cursor:pointer;
        border:1px solid gray;
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 1rem;
        border-radius: 1000px;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #0d6efd;
        border-color: #0d6efd;
    
        &:hover {
            color: #fff;
            background-color: #0d6efd;
            border-color: #0d6efd;
        }
    }
`

// export const Message = styled.div`
//   font-size: 16px;
//   padding: 10px;
//   margin-top: 10px;
//   margin-bottom: 5px;
//   border-radius: 5px;
//   color: ${(props) => (props.success ? 'green' : props.error ? 'red' : 'black')};
//   background-color: ${(props) => (props.success ? '#d9fbd9' : props.error ? '#fddddd' : 'transparent')};
// `;

export const Loader = styled.div`

`