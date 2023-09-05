import React, { useEffect } from 'react';
import Container from '../components/Bits/Container/Container';
// import { useColor } from '../hooks/useColor';

const Todos = () => {
  // const { stringToColor } = useColor();

  const todos = [
    { desc: 'User Avatar', done: false },
    { desc: 'Switch', done: false },
    { desc: 'Switch with iconsr', done: false },
    { desc: 'Dark Mode', done: false },
    { desc: 'Dynamic Classes with JS', done: false },
    { desc: 'Set up yarn lint', done: false },
    { desc: 'Container needs to have default "lays"', done: false },
    { desc: 'Container needs to handle "flex" property', done: false },
    { desc: 'BIG TICKET - Grids', done: false },
    { desc: 'BIG TICKET - Code Editor', done: false },
  ];

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <span>This is the todos page.</span>

      {todos.map((p, i) => (
        <span key={i}>
          <input type="checkbox" id={i} defaultChecked={p.done} />
          <label htmlFor={i}>{p.desc}</label>
        </span>
      ))}
    </Container>
  );
};

export default Todos;
