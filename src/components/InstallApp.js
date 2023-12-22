import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${props => (props.disabled ? '#ccc' : '#4caf50')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: none;

  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : '#45a049')};
  }
`;

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default behavior to avoid showing the browser's install prompt
      event.preventDefault();

      // Store the event for later use
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    // If the deferredPrompt is available, prompt the user to install
    if (deferredPrompt) {
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }

        // Reset the deferredPrompt state
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <StyledButton onClick={handleInstallClick} disabled={!deferredPrompt}>
      Install App
    </StyledButton>
  );
};

export default InstallPWAButton;
