import React from 'react';
import useGlobal from '../../../hooks/useGlobal';
import Container from '../../Bits/Container/Container';
import { useStyles } from './ToolbarStyles';

const Toolbar = () => {
  const {
    state: { open },
  } = useGlobal();

  const { classes } = useStyles({ open });

  return (
    <Container lay={{ x: 'start', y: 'center' }} className={classes.toolbar}>
      <span className={classes.toolbarItem}>Editor</span>
      <span className={classes.toolbarItem}>File</span>
      <span className={classes.toolbarItem}>Edit</span>
    </Container>
  );
};

export default Toolbar;
