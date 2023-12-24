import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    font-size:2rem;
  } 
  & img{
    height:3rem;
    @media only screen and (max-width: 600px) {
        height:2rem;
    } 
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const GetStartedButton = styled.button`
  padding: 10px 17px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  @media only screen and (max-width: 600px) {
    font-size:1rem;
  }
`;

export const TestimonialsContainer = styled.div`
  margin-top: 30px;
  width: 80%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TestimonialCard = styled.div`
  padding: 20px;
  background-color: #F3F4F6;
//   border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 769px) {
    width: 30%;
  }
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  color: #333;
`;

export const TestimonialAuthor = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

export const HomeHero = styled.img`
  // width:900px;
  // max-width:90%;
`
export const HomeHeroContainer = styled.div`
  max-width:90%;
  background:redl;
  overflow:auto;
  position:relative;
`
export const Seek = styled.img`
  // width:130px;
  margin-left:auto;
  margin-right:200px;
  @media only screen and (max-width: 600px) {
    width:150px;
    margin-right:20px;
  }
`
export const TopRowImagesContainer = styled.div`
  // background:red;
  display:flex;
  justify-content:center;
  margin-top:10px;
  width:100%;
  flex-wrap:wrap;
  margin-bottom:4px;
  & img{
    height:50px;
    margin:20px;
    margin-top:0;
    margin-bottom:5px;
    @media only screen and (max-width: 600px) {
      height:30px;
      margin:6px;
      margin-top:0;
      margin-bottom:5px;
    }
  }
`


export const Logo = () => {
    return (
        <Title>
            <span style={{ color: '#1A567E' }}>Habit</span>
            <span style={{ color: '#FBBF24' }}>Streak</span>
            <span>&nbsp;<img src='/icons/growth.png'></img></span>
        </Title>
    )
}

export const ButtonContainer = styled.div`
  //  background:red;
  //  width:100%;
   display:flex;
   & button{
    margin-left:10px;
    margin-right:10px;
   }
`