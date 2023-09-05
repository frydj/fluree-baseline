import React from 'react';
import './Switch.css';

const Switch = ({ defaultChecked = false }) => {
  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={defaultChecked} />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
