import React, { startTransition } from 'react';
import './DocsNav.css';

import Container from '../../Bits/Container/Container';
import DocsCaption from '../../Bits/DocsCaption/DocsCaption';

const DocsNav = () => {
  return (
    <Container lay={{ x: 'start', y: 'start', d: 'col' }}>
      <h2>Bits</h2>
      <DocsCaption>
        These components are the smallest building blocks of the application.
      </DocsCaption>

      <ul>
        <li>Container</li>
        <li>Hitbox</li>
        <li>IconButton</li>
        <li>Viewport</li>
        <li>Icon</li>
      </ul>

      <h2>Pieces</h2>
      <DocsCaption>
        These are generally groups of "bits" (smaller components), and generally
        used to make "Sections".
      </DocsCaption>
      <ul>
        <li>IconButton</li>
      </ul>

      <h2>Sections</h2>
      <DocsCaption>
        These are groups of pieces and bits, and should be the building blocks
        of pages.
      </DocsCaption>
      <ul>
        <li>Banner</li>
        <li>DocsNav</li>
      </ul>
    </Container>
  );
};

export default DocsNav;
