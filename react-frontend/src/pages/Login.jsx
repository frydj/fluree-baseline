import React from 'react';
import Container from '../components/Bits/Container/Container';
import Clock from '../components/Pieces/Clock/Clock';

const Login = () => {
  return (
    <Container lay={{ x: 'center', y: 'start', d: 'col' }}>
      <span>This is the login page.</span>
      <Clock />
    </Container>
  );
};

export default Login;
