import React, { useEffect } from 'react';
import Container from '../components/Bits/Container/Container';
import Setting from '../components/Pieces/Setting/Setting';
// import { useColor } from '../hooks/useColor';

const Settings = () => {
  // const { stringToColor } = useColor();

  const settingsExample = [
    { desc: 'Dark Mode', enabled: false },
    { desc: 'Other Setting', enabled: true },
  ];

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <span>This is the settings page.</span>
      {settingsExample.map((p, i) => (
        <Setting key={i} enabled={p.enabled}>
          {p.desc}
        </Setting>
      ))}
    </Container>
  );
};

export default Settings;
