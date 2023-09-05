import React from 'react';
import './Setting.css';

import Container from '../../Bits/Container/Container';
import Switch from '../../Bits/Switch/Switch';

const Setting = ({ enabled, children }) => {
  return (
    <Container lay={{ x: 'start', y: 'center', p: 'sm' }}>
      <Switch defaultChecked={enabled} />
      <span className="setting">{children}</span>
    </Container>
  );
};

export default Setting;
