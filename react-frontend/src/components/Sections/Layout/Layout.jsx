import { Outlet } from 'react-router-dom';
import Container from '../../Bits/Container/Container';
import './Layout.css';

const Layout = () => {
  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col', p: '0' }}>
      <Outlet />
    </Container>
  );
};

export default Layout;
