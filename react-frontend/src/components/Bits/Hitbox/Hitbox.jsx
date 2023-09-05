import React from 'react';
import './Hitbox.css';
import { useNavigate } from 'react-router-dom';

const Hitbox = ({ action, link, children }) => {
  const navigate = useNavigate();
  const doAction = () => {
    if (action) {
      action();
    }
    if (link) {
      navigate(link);
    }
    if (!action && !link) {
      console.warn('no action or link prop provided!');
    }
  };

  return (
    <span className="hitbox" onClick={doAction}>
      {children}
    </span>
  );
};

export default Hitbox;
