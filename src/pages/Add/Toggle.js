import React, { useState, useEffect } from 'react';

const ToggleButton = ({setHabitType}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleStyles = {
    '--button-width': '2.8em',
    '--button-height': '1.3em',
    '--toggle-diameter': '1.3em',
    '--button-toggle-offset': 'calc((var(--button-height) - var(--toggle-diameter)) / 2)',
    '--toggle-shadow-offset': '10px',
    '--toggle-wider': '3em',
    '--color-grey': '#cccccc',
    '--color-green': '#4296f4',
  };

  const sliderStyles = {
    display: 'block',
    width: 'var(--button-width)',
    height: 'var(--button-height)',
    backgroundColor: isChecked ? 'var(--color-green)' : 'var(--color-grey)',
    borderRadius: 'calc(var(--button-height) / 2)',
    position: 'relative',
    transition: '0.3s all ease-in-out',
    cursor: 'pointer', // Added cursor style
  };

  const toggleButtonStyles = {
    content: '""',
    display: 'inline-block',
    width: 'var(--toggle-diameter)',
    height: 'var(--toggle-diameter)',
    backgroundColor: '#fff',
    borderRadius: 'calc(var(--toggle-diameter) / 2)',
    position: 'absolute',
    top: 'var(--button-toggle-offset)',
    transform: isChecked ? 'translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)))' : 'translateX(var(--button-toggle-offset))',
    boxShadow: isChecked ? 'calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1)' : 'var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1)',
    transition: '0.3s all ease-in-out',
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(()=>{
    if(!isChecked)
        setHabitType('Binary')
    else setHabitType('Measurable')
  },[isChecked])

  return (
    <div className="toggle" style={toggleStyles}>
      <input type="checkbox" style={{ display: 'none' }} checked={isChecked} onChange={handleToggle} />
      <div className="slider" style={sliderStyles} onClick={handleToggle}>
        <div className="toggle" style={toggleButtonStyles}></div>
      </div>
    </div>
  );
};

export default ToggleButton;
