import React from 'react';
import styled from 'styled-components';

const CircularProgressContainer = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  background:pink;
  border-radius:50%;
`;

const CircularProgressSVG = styled.svg`
  transform: rotate(-90deg);
`;

const CircularProgressCircle = styled.circle`
  fill: none;
  stroke: #3498db; /* Progress bar color */
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 247; /* Circumference of a circle (2 * π * radius) */
  stroke-dashoffset: ${({ progress }) => (100 - progress) / 100 * 247};
  transition: stroke-dashoffset 0.5s ease;
`;
 
const CircularProgressBackgroundCircle = styled.circle`
  fill: #fff; /* Gray color for the non-stroke circle */
`;

const CircularProgressText = styled.text`
  fill: #333; /* Text color */
  font-size: .9rem;
  dominant-baseline: middle;
  text-anchor: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &>div{
    display:flex;
    background:redl;
    flex-direction:column;
    position:relative;
  }

`;

const CircularProgress = ({ x, y }) => {
  const percentage = (x / y) * 100;

  return (
    <CircularProgressContainer>
      <CircularProgressSVG viewBox="0 0 100 100">
        <CircularProgressBackgroundCircle cx="50" cy="50" r="40" />
        <CircularProgressCircle cx="50" cy="50" r="40" progress={percentage} />
      </CircularProgressSVG>
      <CircularProgressText x="50" y="50">
        <div>
          <span style={{borderBottom:'1px solid black'}}>{x}</span>
          <span>{y}</span>
        </div>
      </CircularProgressText>
    </CircularProgressContainer>
  );
};

export default CircularProgress;
