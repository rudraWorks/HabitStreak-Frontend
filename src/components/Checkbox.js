import React, { useState } from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-left:20px;
  transform:scale(.8);
`;

const RadioInput = styled.input`
  margin-right: 8px;
  cursor: pointer;
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
`;

const RadioLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-right: 16px; /* Adjust the margin as needed */
`;

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <RadioContainer>
      <RadioInput
        type="radio"
        id="yes"
        name="options"
        checked={selectedOption === 'yes'}
        onChange={() => handleOptionChange('yes')}
      />
      <RadioLabel htmlFor="yes">Yes</RadioLabel>

      <RadioInput
        type="radio"
        id="no"
        name="options"
        checked={selectedOption === 'no'}
        onChange={() => handleOptionChange('no')}
      />
      <RadioLabel htmlFor="no">No</RadioLabel>
    </RadioContainer>
  );
};

export default RadioButtons;
