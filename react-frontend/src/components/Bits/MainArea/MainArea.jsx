import React from 'react';
import { useStyles } from './MainAreaStyles';
import useGlobal from '../../../hooks/useGlobal';

const MainArea = ({ children }) => {
  const {
    state: { open },
  } = useGlobal();

  const { classes } = useStyles({ open });

  return <div className={classes.mainArea}>{children}</div>;
};

export default MainArea;
