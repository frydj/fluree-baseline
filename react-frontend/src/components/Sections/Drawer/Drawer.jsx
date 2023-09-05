import useGlobal from '../../../hooks/useGlobal';
import Container from '../../Bits/Container/Container';
import { useStyles } from './DrawerStyles';
import { Link } from 'react-router-dom';

const Drawer = () => {
  const {
    state: { open },
    dispatch,
  } = useGlobal();
  const { classes } = useStyles({ open });

  const toggle = () => {
    dispatch({ type: 'open', value: false });
  };

  return (
    <Container id="test-drawer" className={classes.drawer}>
      this is the drawer
      <div className={classes.navItem}>
        <Link to="/">home</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/fluree">fluree sandbox</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/todo-mvc">todo mvc</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/time-travel">time travel</Link>
      </div>
      <div className={classes.navItem}>
        <Link to="/academic-credentials">academic credentials</Link>
      </div>
    </Container>
  );
};

export default Drawer;
