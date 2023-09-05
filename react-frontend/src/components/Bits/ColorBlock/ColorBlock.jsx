import React from 'react';
import './ColorBlock.css';

const ColorBlock = ({ color, children, dark = false }) => {
  return (
    <div
      className={`color-block ${dark ? 'dark' : null}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default ColorBlock;
