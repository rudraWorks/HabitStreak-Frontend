import React, { useState } from 'react';

const RatingSystem = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
      }}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: 'pointer',
            fontSize: '32px',
            color: star <= rating ? 'gold' : 'gray',
            lineHeight:'0'
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingSystem;
