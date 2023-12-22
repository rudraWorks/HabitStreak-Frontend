import React from 'react';
import {
  LandingPageContainer,
  Logo,
  Description,
  GetStartedButton,
  TestimonialsContainer,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  HomeHero
} from './Styles';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <LandingPageContainer>
      <Logo/>
      <Description>
        Build habits, track your progress, get badges and achieve your goals with DailyStreak.
      </Description>
      <GetStartedButton onClick={()=>navigate('/about')}>Learn more </GetStartedButton>
      <br/> 
      <HomeHero src='/images/home-hero.webp'/>

      <TestimonialsContainer>
        <TestimonialCard>
          <TestimonialText>"This app has truly transformed my daily routine. Highly recommended!"</TestimonialText>
          <TestimonialAuthor>- Sarah D.</TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard>
          <TestimonialText>"Amazing features and easy to use. It's been a game-changer for me."</TestimonialText>
          <TestimonialAuthor>- John M.</TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard>
          <TestimonialText>"I've seen a significant improvement in my habits. Fantastic app!"</TestimonialText>
          <TestimonialAuthor>- Emily R.</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
