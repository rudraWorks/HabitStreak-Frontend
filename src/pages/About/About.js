import React from 'react';
import { Container, Section } from './Styles';
import { Button } from '../Add/Styles';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <h2> <img src='/icons/docs.png' /> DailyStreak Documentation </h2>
      <p>
        Build habits, track your progress, get badges and achieve your goals with DailyStreak.
      </p>

      {/* Styling for the index */}
      <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', textAlign:'left' }}>
        <h3>Index</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>
            <a href="#calendar-section" onClick={() => scrollToSection('calendar-section')}>
              Calendar Heatmap
            </a>
          </li>
          <li>
            <a href="#streaks-section" onClick={() => scrollToSection('streaks-section')}>
              Streaks and badges
            </a>
          </li>
          <li>
            <a href="#countdown-section" onClick={() => scrollToSection('countdown-section')}>
              Countdown
            </a>
          </li>
          <li>
            <a href="#features-section" onClick={() => scrollToSection('features-section')}>
              Upcoming features
            </a>
          </li>
          <li>
            <a href="#pricing-section" onClick={() => scrollToSection('pricing-section')}>
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {/* Sections with unique IDs */}
      <Section id="calendar-section">
        <h3> <img src='/icons/calendar.png' /> Calendar Heatmap</h3>
        <ul>
          <li>Easily track daily habits and see progress at a glance.</li>
          <li>Visual progress tracking</li>
          <li>Different color shades for different intensities.</li>
        </ul> 
        <img src='/images/heatmap.png' />
      </Section>

      <Section id="streaks-section">
        <h3><img src='/icons/fire.png' /> Streaks and badges</h3>
        <ul>
          <li>Aligned with goals, badges track progress, encouraging you to strive for the next achievement.</li>
          <li>Earning badges boosts self-esteem, fostering a positive self-perception.</li>
          <li>Achieving longer streaks provides you a sense of accomplishment, motivating continued positive behavior.</li>
        </ul> 
        <img src='/images/streak.png' />
        <br/>
        <img src='/images/streakline.png' />
        <br/>
        <img src='/images/badgesgif.gif'/>
      </Section>

      <Section id="countdown-section">
        <h3><img src='/icons/sand.png' /> Countdown (Hourly, Daily, Monthly and Yearly) </h3>
        <ul>
          <li>Promotes mindfulness, aiding in hourly efficiency and daily time management.</li>
          <li>Aligns with goals, aiding in monthly progress tracking and yearly perspective.</li>
          <li>Serves as a motivational tool, encouraging commitment and deadline management.</li>
        </ul> 
        <img src='/images/countdowngif.gif' />
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
        <Button style={{ width: '200px', marginTop: '0' }} onClick={() => navigate('/pro')}>
          Go to pricing page
        </Button>
      </Section>
        <br/>
        <br/>

      {/* Jump to Top button */}
      <Button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '5px',
          left: '50%',
          transform:'translateX(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
        }}
      >
        ↑
      </Button>
    </Container>
  );
}

export default About;
