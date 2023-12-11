import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.text}>&copy; 2023 Your Awesome Website</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  text: {
    fontSize: '16px',
    margin: '0',
  },
};

export default Footer;
