import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Footer = () => {
    const {user} = useUser()
    return (
        <StyledFooter>
            <ContentContainer>
                <p>
                  <Link to="/"> &copy; HabitStreak.xyz</Link>  
                  <Link to="mailto:merudra.official@gmail.com" >merudra.official@gmail.com</Link> 
                  <Link to="/habits">My habits</Link>  
                  <Link to="/add">Create habit</Link>  
                  <Link to="/pages">My pages</Link>
                  { !user?.pro &&
                    <>
                      <Link to="/pro">PRO</Link>
                    </>
                  } 
                  <Link to="feature-logs">Feature logs</Link>

                </p>
            </ContentContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background:#F3F4F6;
  padding: 10px;
  padding-left:30px;
  padding-right:30px;
  margin-top: auto;
  user-select:text;

  /* text-align:center; */
  min-height: 60px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
   justify-content: center;
  }  
  /* justify-content: center; */
`;

const ContentContainer = styled.div`
  // max-width: 800px;
  /* margin: 0 auto; */

  p {
    font-size: .9rem;
    margin: 0;
    display: flex; 
  align-items: center;
  justify-content: start;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    &>a{
      margin-top: 5px;
    }
  }  
  }
  &>p>a{
    margin-right:5px;
    margin-left:5px;
  }

`;

export default Footer;
