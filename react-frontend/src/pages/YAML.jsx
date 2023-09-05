import React from 'react';
import Container from '../components/Bits/Container/Container';
import './YAML.css';

const YAML = () => {
  const calculate = () => {
    console.log('calculated');
  };

  return (
    <Container lay={{ x: 'start', y: 'start' }}>
      <Container lay={{ x: 'end', y: 'start', d: 'col', m: '0', p: '0' }}>
        <textarea id="input"></textarea>
        <button onClick={calculate}>calculate</button>
      </Container>
      <textarea id="output"></textarea>
    </Container>
  );
};

export default YAML;
