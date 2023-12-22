import React, { useState, useEffect } from 'react';

const Typewriter = ({ sentence }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typeEffect = setInterval(() => {
      setDisplayedText((prevText) => {
        const charToAdd = sentence[currentIndex];
        currentIndex++;

        // Check if the character is undefined (end of the sentence)
        if (charToAdd === undefined) {
          clearInterval(typeEffect);
          return prevText;
        }

        return prevText + charToAdd;
      });
    }, 100); // Adjust the speed by changing the interval time

    return () => {
      clearInterval(typeEffect); // Cleanup on component unmount
    };
  }, [sentence]);

  // Clear the displayed text when the sentence prop changes
  useEffect(() => {
    setDisplayedText('');
  }, [sentence]);

  return <div>{displayedText}</div>;
};

export default Typewriter;
