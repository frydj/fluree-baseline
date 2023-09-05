import React from 'react';
import { useStyles } from './ViewportStyles';

const Viewport = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div id="viewport" className={classes.viewport}>
      {children}
    </div>
  );
};

export default Viewport;
