import React from 'react';
import styled from 'styled-components';

const StreakProgressBar = ({ streak }) => {
  const stops = [10, 21, 60, 100, 180];
  const position = Math.min(Math.max(streak, 0), stops[stops.length - 1]);

  return (
    <ProgressBar>
      {stops.map((stop, index) => (
        <React.Fragment key={index}>
          <Stop style={{ left: `${(stop / stops[stops.length - 1]) * 100 - (index===stops.length-1?.2:0)}%` }} />
          <StopLabel style={{ left: `${(stop / stops[stops.length - 1]) * 100 - (index===stops.length-1?1.2:0)}%` }}>{stop}</StopLabel>
        </React.Fragment>
      ))}
      <CurrentStreakLine style={{ width: `${(position / stops[stops.length - 1]) * 100}%` }} />
      <Pointer style={{ left: `${(position / stops[stops.length - 1]) * 100}%` }} />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  position: relative;
  height: 28px;
  width: 100%;
  background-color: #eee;
  margin-top: 45px;
`;

const Stop = styled.div`
  position: absolute;
  height: 8px;
  width: 2px;
  background-color: #ccc;
  
`;

const StopLabel = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: #777;
  font-size: 12px;
`;

const CurrentStreakLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #007bff;
  opacity: 0.5;
`;

const Pointer = styled.div`
  position: absolute;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #007bff;
  transform: translate(-50%, -50%);
  border: 2px solid #fff;
`;

export default StreakProgressBar;
