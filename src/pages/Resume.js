import React from 'react';

const Resume = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <p>
        Email me at: <strong>imayakumar_at_outlook_dot_com</strong> or contact me on{' '}
        <a href="https://www.linkedin.com/in/imaya" className="highlighted-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        for latest resume.
      </p>
    </div>
  );
};

export default Resume;
