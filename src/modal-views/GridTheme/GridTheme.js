import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGridTheme, setGridTheme } from '../../utils/utils';

const GridThemeContainer = styled.div`
  text-align: center;
`;

const ThemeRadios = styled.div`
  margin-top: 10px;
`;

const ThemeRadioLabel = styled.label`
  position: relative;
  display: inline-block;
  margin: 0 5px;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? props.theme.color : 'transparent')};
  color: ${(props) => (props.checked ? 'white' : props.theme.color)};
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 50%;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color};
    color: white;
  }
`;

const ThemeRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const ThemeImage = styled.img`
  height: 30px;
`; 

function GridTheme({setGridThemeFlag}) {
  const [theme, setTheme] = useState(getGridTheme());

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); 
  }; 

  useEffect(()=>{ 
    setGridTheme(theme)
    setGridThemeFlag((p)=>p+1)
  },[theme])

  return (
    <GridThemeContainer>
      <h2 style={{marginBottom:'15px',fontSize:'1.4rem'}}>Select theme</h2>
      <ThemeRadios>
        <ThemeRadioLabel checked={theme === 'green'} theme={{ color: 'green' }}>
          <ThemeRadioInput
            type="radio"
            name="theme"
            checked={theme === 'green'}
            onChange={() => handleThemeChange('green')}
          />
        </ThemeRadioLabel>
        <ThemeRadioLabel checked={theme === 'blue'} theme={{ color: 'blue' }}>
          <ThemeRadioInput
            type="radio"
            name="theme"
            checked={theme === 'blue'}
            onChange={() => handleThemeChange('blue')}
          />
        </ThemeRadioLabel>
        <ThemeRadioLabel checked={theme === 'gray'} theme={{ color: 'gray' }}>
          <ThemeRadioInput
            type="radio"
            name="theme"
            checked={theme === 'gray'}
            onChange={() => handleThemeChange('gray')}
          />
        </ThemeRadioLabel>
      </ThemeRadios>
      <br />
      <ThemeImage src={`/images/${theme}theme.png`} alt={`${theme} theme`} />
    </GridThemeContainer>
  );
}

export default GridTheme;
