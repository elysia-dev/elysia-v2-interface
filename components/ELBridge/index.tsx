import React from 'react';
import { useEffect } from 'react';
import Section from './Section';

const ELBridge = () => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <div>
      <Section />
    </div>
  );
};

export default ELBridge;
