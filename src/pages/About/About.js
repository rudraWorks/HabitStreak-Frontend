import React, { useState, useEffect } from 'react';
import { ButtonContainer, Container, Section, SectionInner,VideoContainer } from './Styles';
import { Button } from '../Add/Styles';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle'

function About() {
  useTitle('About')
  const navigate = useNavigate();
  const [showJumpToTop, setShowJumpToTop] = useState(false);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    // Show/hide the "Jump to Top" button based on the scroll position
    const shouldShowJumpToTop = window.scrollY > 100;
    setShowJumpToTop(shouldShowJumpToTop);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <h2> <img src='/icons/docs.png' /> HabitStreak Documentation </h2>
      <p>
        Build habits, track your progress, get badges and achieve your goals with HabitStreak.
      </p>

      {/* Styling for the index */}
      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', textAlign: 'left' }}>
        <h3>Index</h3>
        <ul style={{ listStyleType: 'none', padding: '0', marginTop: '10px' }}>
        <li>
            <a href="#demo-section" onClick={() => scrollToSection('demo-section')} style={{ textDecoration: 'none' }}>
            0️⃣ Quick Demo
            </a>
          </li>
          <li>
            <a href="#calendar-section" onClick={() => scrollToSection('calendar-section')} style={{ textDecoration: 'none' }}>
              1️⃣ Calendar Heatmap
            </a>
          </li>
          <li>
            <a href="#streaks-section" onClick={() => scrollToSection('streaks-section')} style={{ textDecoration: 'none' }}>
              2️⃣ Streaks and badges
            </a>
          </li>
          <li>
            <a href="#countdown-section" onClick={() => scrollToSection('countdown-section')} style={{ textDecoration: 'none' }}>
              3️⃣ Countdown
            </a>
          </li>
          <li>
            <a href="#features-section" onClick={() => scrollToSection('features-section')} style={{ textDecoration: 'none' }}>
              4️⃣ Upcoming features
            </a>
          </li>
          <li>
            <a href="#pricing-section" onClick={() => scrollToSection('pricing-section')} style={{ textDecoration: 'none' }}>
              5️⃣ Pricing
            </a>
          </li>
          <li>
            <a href="#contact-section" onClick={() => scrollToSection('contact-section')} style={{ textDecoration: 'none' }}>
              6️⃣ Contact
            </a>
          </li>
        </ul> 
      </div>

      {/* Sections with unique IDs */}
      <Section  id="demo-section">
      <h3> <img src='/icons/demo.png' /> Quick Demo</h3>

        <VideoContainer>
          <video controls muted autoPlay>
            <source src="/images/habit1.webm" type="video/webm" />

            <source src="/images/habit1.webm" type="video/mp4" />

          </video>
        </VideoContainer>


      </Section>
      <Section id="calendar-section">
        <h3> <img src='/icons/calendar.png' /> Calendar Heatmap</h3>
        <SectionInner>
          <ul>
            <li>Easily track daily habits and see progress at a glance.</li>
            <li>Visual progress tracking</li>
            <li>Different color shades for different intensities.</li>
          </ul>
          <img  src='/images/readbooksdailygif.gif' />
        </SectionInner>
      </Section>

      <Section id="streaks-section">
        <h3><img src='/icons/fire.png' /> Streaks and badges</h3>
        <SectionInner>
          <ul>
            <li>Aligned with goals, badges track progress, encouraging you to strive for the next achievement.</li>
            <li>Earning badges boosts self-esteem, fostering a positive self-perception.</li>
            <li>Achieving longer streaks provides you a sense of accomplishment, motivating continued positive behavior.</li>
          </ul>
          <img src='/images/badgesgif.gif' />
        </SectionInner>
      </Section>

      <Section id="countdown-section">
        <h3><img src='/icons/sand.png' /> Countdown (Hourly, Daily, Monthly and Yearly) </h3>
        <SectionInner>
          <ul>
            <li>Promotes mindfulness, aiding in hourly efficiency and daily time management.</li>
            <li>Aligns with goals, aiding in monthly progress tracking and yearly perspective.</li>
            <li>Serves as a motivational tool, encouraging commitment and deadline management.</li>
          </ul>
          <img src='/images/countdowngif.gif' />
        </SectionInner>
      </Section>

      <Section id="features-section">
        <h3><img src='/icons/features.png' /> Upcoming features</h3>
        <ul>
          <li>Leaderboard</li>
          <li>Community forum</li>
          <li>Productivity templates</li>
          <li>Dark mode</li>
          <li>Collaborate habits</li>
          <li>Reminders</li>
        </ul>
      </Section>

      <Section id="pricing-section">
        <h3><img src='/icons/dollor.png' /> Pricing</h3>
        <ButtonContainer>
          <Button onClick={() => navigate('/pro')}>
            Go to pricing page
          </Button>
        </ButtonContainer>
      </Section>

      <Section id="contact-section">
        <h3><img src='/icons/contact.png' /> Contact</h3>
        <ul>
          <li>email: merudra.official@gmail.com</li>
          <li>twitter: <a href='https://twitter.com/merudra754' target='_blank'>merudra754</a></li>
        </ul>
      </Section>

      <br />
      <br />

      {/* Jump to Top button */}
      {showJumpToTop && (
        <Button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
          }}
        >
          ↑
        </Button>
      )}


    </Container>

  );
}

export default About;

