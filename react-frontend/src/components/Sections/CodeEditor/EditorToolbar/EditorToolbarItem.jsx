import React from 'react';
import { Tooltip } from 'react-tippy';
import { IconButton } from '@mui/material';

const tooltipDelay = 250;

const EditorToolbarItem = ({ title, offset = 0, onClick, children }) => {
  return (
    <Tooltip
      title={title}
      position="bottom"
      delay={tooltipDelay}
      size="small"
      arrow={true}
      offset={offset}
    >
      <IconButton size="small" onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default EditorToolbarItem;
