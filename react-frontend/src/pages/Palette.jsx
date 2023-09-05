import React from 'react';
import PopWindow from '../assets/icons/PopWindow';
import ColorBlock from '../components/Bits/ColorBlock/ColorBlock';
import Container from '../components/Bits/Container/Container';
import { colors1, colors2 } from '../theme/Palette';
import IconButton from '../components/Pieces/IconButton/IconButton';

const Palette = ({ popped = false }) => {
  const c1 = Object.entries(colors1);
  const c2 = Object.entries(colors2);
  const c = [...c1, ...c2];

  const pop = () => {
    window.open('/pop/palette', '_blank', 'height=10000,width=490');
  };

  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <Container lay={{ x: 'start', y: 'center', p: '0' }}>
        <h1>Color Palette</h1>
        {!popped && (
          <IconButton action={pop} size="md">
            <PopWindow />
          </IconButton>
        )}
      </Container>
      <Container lay={{ x: 'start', y: 'start', p: '0' }}>
        <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
          {c.map((p, i) => (
            <ColorBlock key={`${i}-1`} color={p[1]}>
              {p[0]}
            </ColorBlock>
          ))}
        </Container>

        <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
          {c.map((p, i) => (
            <ColorBlock key={`${i}-2`} color={p[1]} dark>
              {p[0]}
            </ColorBlock>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Palette;
