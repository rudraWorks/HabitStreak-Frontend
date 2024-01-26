import React from 'react';
import useModal from '../hooks/useModal';

const BetaTestingBadge = () => {
  const { dispatchModal } = useModal();

  return (
    <span 
      onClick={() => dispatchModal({
        type: 'SET_CONTENT',
        content: (
          <div>
            🚀 This feature is in testing! If you find any bug, please report it by submitting the form at the bottom right corner! 🐛
          </div>
        ),
      })}
      style={{
        display: 'inline',
        padding: '1px 2px', 
        borderRadius: '5px',
        background: '#007bff',
        color: '#fff',
        fontSize: '.8rem',
        position: 'relative',
        top: '-2px',
        cursor: 'pointer',
      }}
    >
      beta
    </span>
  );
};

export default BetaTestingBadge;
