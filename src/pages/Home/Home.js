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
  HomeHero,
  ButtonContainer
} from './Styles';
import { useNavigate } from 'react-router-dom';
import Typewriter from '../../components/Typewriter';
import useUser from '../../hooks/useUser'

const LandingPage = () => {

  const navigate = useNavigate()
  const {user} = useUser()

  const handleGetStarted = () => {
    if(user)
      navigate('/habits')
    else  
      navigate('/signup')
  }

  return (
    <LandingPageContainer>
      <Logo />
      <Description>
        Build habits, track your progress, get badges and achieve your goals with HabitStreak.
      </Description>

      <ButtonContainer>
        <GetStartedButton onClick={() => navigate('/about')}>Learn more </GetStartedButton>
        <GetStartedButton onClick={handleGetStarted}>{user ? "My habits":"Get Started"} </GetStartedButton>
      </ButtonContainer>

      <br />
      <HomeHero src='/images/home-hero.webp' />

      <TestimonialsContainer>
        <TestimonialCard>
          <TestimonialText>"This app has truly transformed my daily routine. Highly recommended!"</TestimonialText>
          <TestimonialAuthor>- Sarah D.</TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard>
          <TestimonialText>"Amazing features and easy to use. The calendar heatmap is awesome, can see my daily progress at a glance."</TestimonialText>
          <TestimonialAuthor>- John M.</TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard>
          <TestimonialText>"I've seen a significant improvement in my habits. Fantastic app!"</TestimonialText>
          <TestimonialAuthor>- Rahul K.</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
