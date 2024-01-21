import React, { useState, useEffect } from 'react';
import { Button } from '../pages/Add/Styles';

const PwaDownloadButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default behavior of the beforeinstallprompt event
      event.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(event);
    };

    // Add event listener for beforeinstallprompt
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Trigger the installation prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Clear the deferredPrompt variable
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div>
      <button onClick={handleInstallClick}>Download App</button>
    </div>
  );
};

export default PwaDownloadButton;
