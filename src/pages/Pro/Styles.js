import styled,{keyframes} from "styled-components";

export const Container = styled.div`
    padding:30px;
    padding-top:0px;
    @media only screen and (max-width: 600px) {
        padding:10px;
    }
`

const rotateAnimation = keyframes`
  100% {
    background-position: -100% 0;
  }
`;


export const CardsContainer = styled.div`
    display:flex;
    width:100%;
    background:redl;
    justify-content:center;
    flex-wrap:wrap;
    &>div{
        margin:40px;
        width:300px;
        max-width:95%;  
        border-radius:10px;
        padding:20px;
        animation: ${rotateAnimation} 2s infinite;
        display:flex;
        flex-direction:column;
        align-items:center;
        @media only screen and (max-width: 600px) {
            margin:10px;
        }
    }
    &>div>h3{
        font-size:1.9rem;
        @media only screen and (max-width: 600px) {
            font-size:1.5rem;
        }
    }
    &>div>span{
        font-size:1.2rem;
        margin-top:20px;
        display:inline-block;
        @media only screen and (max-width: 600px) {
            font-size:1rem;
        }
    }
`

export const Free = styled.div`
    background: linear-gradient(120deg, #c9d1d9 30%, #f0f0f0 38%, #f0f0f0 40%, #c9d1d9 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    position:relative;
    &>img{
        position:absolute;
        top:-40px;
        right:-40px;
        height:60px;
        transform:rotate(-45deg);
        @media only screen and (max-width: 600px) {
            height:40px;
            top:-20px;
            right:-20px;
        }
    }
`
export const Paid = styled.div`
    background: linear-gradient(120deg, #FCD34D 30%, #f0f0f0 38%, #f0f0f0 40%, #FCD34D 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
`
export const BuyNow = styled.button`
    padding: 12px 24px;
    font-size: 1.2rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
    margin-top:30px;
    width:200px;
    @media only screen and (max-width: 600px) {
        font-size:1rem;
    }
`