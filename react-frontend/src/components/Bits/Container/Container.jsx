import React from 'react';
import './Container.css';
import { useStyles } from './ContainerStyles';

const Container = ({ lay, className, id, children, inline = false }) => {
  const { classes } = useStyles();
  let x, y;

  if (lay?.d === 'col') {
    x = lay?.x ? `y-${lay.x}` : 'y-center';
    y = lay?.y ? `x-${lay.y}` : 'x-center';
  } else {
    x = lay?.x ? `x-${lay.x}` : 'x-center';
    y = lay?.y ? `y-${lay.y}` : 'y-center';
  }

  const z = lay?.z ? `z-${lay.z}` : null;
  const d = lay?.d ? `d-${lay.d}` : null;
  const p = lay?.p ? `p-${lay.p}` : 'p-md';

  let arr = [x, y, z, d, p];
  let str = arr.join(' ');

  return (
    <div
      id={id}
      className={`${inline ? 'inline-flex' : 'flex'} ${str} ${className} ${
        classes.container
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
