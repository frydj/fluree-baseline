import React from 'react';
import Hitbox from '../../Bits/Hitbox/Hitbox';
import Icon from '../../Bits/Icon/Icon';
import './IconButton.css';

const IconButton = ({ action, link, size, children }) => {
  return (
    <Icon className="icon-button" size={size}>
      <Hitbox action={action} link={link}>
        {children}
      </Hitbox>
    </Icon>
  );
};

export default IconButton;
