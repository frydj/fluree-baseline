import React from 'react';
import './Icon.css';
import Container from '../Container/Container';

const Icon = ({ size, className, children }) => {
  return (
    <Container
      lay={{ x: 'center', y: 'center', p: '0' }}
      className={`icon-${size} ${className}`}
    >
      {children}
    </Container>
  );
};

export default Icon;
