import React, { useState } from 'react';
import styled from 'styled-components';

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  padding: 10px;
  background-color: #f0f0f0;
`;

const QuestionText = styled.h3`
  margin: 0;
  flex-grow: 1;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
`;

const Answer = styled.p`
  margin: 0;
  padding: 10px;
  background-color:#f7f9fd;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  user-select:text;
`;

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FAQItem>
      <Question onClick={toggleFAQ}>
        <QuestionText>{question}</QuestionText>
        <ToggleButton onClick={toggleFAQ}>{isOpen ? '-' : '+'}</ToggleButton>
      </Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </FAQItem>
  );
};

export default FAQ;
