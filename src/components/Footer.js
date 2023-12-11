import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <ContentContainer>
                <p>&copy; 2023 Your Awesome Website</p>
            </ContentContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background:#F3F4F6;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  p {
    font-size: 16px;
    margin: 0;
  }
`;

export default Footer;
