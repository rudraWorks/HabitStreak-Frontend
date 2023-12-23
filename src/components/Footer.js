import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <StyledFooter>
            <ContentContainer>
                <p>&copy; 2023 
                  {/* <Link to="/">DailyStreak.site</Link>   */}
                  <Link to="mailto:merudra.official@gmail.com" >merudra.official@gmail.com</Link>
                  {/* <Link to="/habits">my habits</Link>  
                  <Link to="/add">create habit</Link>  
                  <Link to="/pro">PRO</Link> */}
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
  text-align:center;
`;

const ContentContainer = styled.div`
  // max-width: 800px;
  margin: 0 auto;

  p {
    font-size: .9rem;
    margin: 0;
  }
  &>p>a{
    margin-right:5px;
    margin-left:5px;
  }
`;

export default Footer;
