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
  ButtonContainer,
  HomeHeroContainer,
  Seek,
  TopRowImagesContainer,
} from './Styles';
import useTitle from '../../hooks/useTitle'
import { useNavigate } from 'react-router-dom';
import Typewriter from '../../components/Typewriter';
import useUser from '../../hooks/useUser'

const LandingPage = () => {
  useTitle('Home')
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

      {/* <img src='/images/untangle.jpg' /> */}
      {/* <Seek style={{maxWidth:'95%'}} src='/images/seek.avif' /> */}
      <TopRowImagesContainer>
        <img src='/icons/reading.png' />
        <img src='/icons/exercise.png' />
        <img src='/icons/study.png' />
        <img src='/icons/cigeratte.png' />
        <img src='/icons/gym.png' />
        <img src='/icons/meditate.png' />
      </TopRowImagesContainer> 
      <HomeHeroContainer>
        <HomeHero src='/images/heatmap.png' />
        {/* <HomeHero src='/images/readbooksdailygif.gif' /> */}
      </HomeHeroContainer> 

      <TestimonialsContainer>
        <TestimonialCard>
          <TestimonialText>"Having gone through James Clear's Atomic Habits book, I was on the lookout for a similar tool. This application has genuinely revolutionized my day-to-day schedule. I highly endorse it!"</TestimonialText>
          <TestimonialAuthor>- Sarah D.</TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard>
          <TestimonialText>"Amazing features and easy to use. The calendar heatmap is awesome, can see my daily progress at a glance."</TestimonialText>
          <TestimonialAuthor>- John M.</TestimonialAuthor>
        </TestimonialCard>

        <TestimonialCard>
          <TestimonialText>"I've seen a significant improvement in my habits. Fantastic app! Afterall discipline is the difference between who wants it and who gets it."</TestimonialText>
          <TestimonialAuthor>- Rahul K.</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
